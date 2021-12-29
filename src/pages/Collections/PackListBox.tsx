import React from 'react'
import { isMobile } from 'react-device-detect'
import ClipLoader from 'react-spinners/ClipLoader'
import MainButton from '../../components/Buttons/MainButton'
import USDCIcon from '../../components/Icons/usdcIcon'
import { usePackListBox } from '../../hooks/useCollection'
import { ResponsiveContainer } from '../../styles/globalStyles'
import { PackItem } from './PackItem'
import { ProcessingLoader } from './Processing'

export const PackListBox = () => {
  const { account, cartList, pendingTx, isLoading, currentTotalPrice, isUSDCApproved, BuyPackProcess, ApprovingUSDC } = usePackListBox()

  return (
    <>
      <ResponsiveContainer>
        {cartList.map((pack) => {
          return <PackItem key={pack.id} pack={pack} currentTotalPrice={currentTotalPrice} />
        })}
        {isUSDCApproved ? (
          <MainButton
            width={isMobile ? '80%' : 'fit-content'}
            borderRadius={'24px'}
            padding={'24px 24px'}
            margin={'20px 0'}
            disabled={pendingTx || !account}
            onClick={() => BuyPackProcess()}
          >
            {'Buy Now!'}
            <USDCIcon />
          </MainButton>
        ) : (
          <MainButton
            width={isMobile ? '80%' : 'fit-content'}
            borderRadius={'24px'}
            padding={'24px 24px'}
            margin={'20px 0'}
            disabled={isLoading || pendingTx || !account}
            onClick={() => ApprovingUSDC()}
          >
            {'Approve'}
            {isLoading ? <ClipLoader color={'var(--light-navy-blue)'} size={'24px'} /> : <USDCIcon />}
          </MainButton>
        )}
      </ResponsiveContainer>
      {pendingTx && <ProcessingLoader />}
    </>
  )
}
