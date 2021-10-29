import React, { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import ClipLoader from 'react-spinners/ClipLoader'

import { TransparentBtn } from '../../components/Buttons/MainButton'
import OnlineImages from '../../components/Icons/onlineImages'
import USDCIcon from '../../components/Icons/usdcIcon'
import { useCollectionContext } from '../../contexts/CollectionContext'
import { useApproveUSDC, useBuyPack } from '../../hooks/useCollection'
import { useActiveWeb3React } from '../../hooks/useWeb3'
import { ContainerColumn, TextDescription, TextMain } from '../../styles/globalStyles'
import { TPackItem } from '../../types'
import { ProcessingLoader } from './Processing'

export const PackItem: React.FC<{ pack: TPackItem }> = ({ pack }) => {
  const [pendingTx, setPendingTx] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { onBuyPack } = useBuyPack(pack.id, 1)
  const { onApprove } = useApproveUSDC()

  const { account } = useActiveWeb3React()
  const { isUSDCApproved, setIsUSDCApproved } = useCollectionContext()

  const BuyPackProcess = async () => {
    try {
      setPendingTx(true)
      const status = await onBuyPack(pack.id, 1)
      setPendingTx(false)

      if (status) {
        window.location.href = `/account`
      }
    } catch (e) {
      setPendingTx(false)
    }
  }

  const ApprovingUSDC = async () => {
    try {
      setIsLoading(true)
      const status = await onApprove()
      setIsLoading(false)

      if (status) setIsUSDCApproved(true)
    } catch (e) {
      setPendingTx(false)
    }
  }

  return (
    <ContainerColumn width={isMobile ? '100%' : '32%'} height={'auto'} padding={isMobile ? '0 0 70px' : '0'}>
      <OnlineImages url={pack.uri} imgWidth={isMobile ? '90%' : '90%'} />
      <TextMain>{pack.level}</TextMain>
      <TextDescription>{`${pack.count} Moments @ $${pack.price}`}</TextDescription>
      {isUSDCApproved ? (
        <TransparentBtn
          borderRadius={'24px'}
          padding={'24px 24px'}
          margin={'24px 0 0'}
          disabled={pendingTx || account === null || account === undefined}
          onClick={() => BuyPackProcess()}
        >
          {'Buy Now!'}
          <USDCIcon />
        </TransparentBtn>
      ) : (
        <TransparentBtn
          borderRadius={'24px'}
          padding={'24px 24px'}
          margin={'24px 0 0'}
          disabled={isLoading || pendingTx || account === null || account === undefined}
          onClick={() => ApprovingUSDC()}
        >
          {'Approve'}
          {isLoading ? <ClipLoader color={'#ff0069'} size={'24px'} /> : <USDCIcon />}
        </TransparentBtn>
      )}

      {pendingTx && <ProcessingLoader />}
    </ContainerColumn>
  )
}
