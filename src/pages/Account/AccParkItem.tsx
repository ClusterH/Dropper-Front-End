import React, { useState } from 'react'
import { TransparentBtn } from '../../components/Buttons/MainButton'
import OnlineImages from '../../components/Icons/onlineImages'
import useBuyPack from '../../hooks/useCollection'
import { ContainerColumn, TextDescription, TextMain } from '../../styles/globalStyles'
import { TParkItem } from '../../types'
// import { ProcessingLoader } from './Processing'

export const AccParkItem: React.FC<{ park: TParkItem }> = ({ park }) => {
  const [pendingTx, setPendingTx] = useState<boolean>(false)
  const { onBuyPark } = useBuyPack(park.id, 1)

  return (
    <ContainerColumn width={'32%'}>
      <OnlineImages url={park.uri} imgWidth={'95%'} />
      <TextMain>{park.level}</TextMain>
      <TextDescription>{`${park.count} Moments @ $${park.price}`}</TextDescription>
      <TransparentBtn
        borderRadius={'24px'}
        padding={'24px 24px'}
        margin={'24px 0 0'}
        disabled={pendingTx}
        onClick={async () => {
          setPendingTx(true)
          try {
            await onBuyPark(park.id, 1)
            setPendingTx(false)
            window.location.href = `/account`
          } catch (e) {
            setPendingTx(false)
          }
        }}
      >
        {pendingTx ? 'Processing' : 'Buy Now!'}
      </TransparentBtn>
      {/* {pendingTx && <ProcessingLoader />} */}
    </ContainerColumn>
  )
}
