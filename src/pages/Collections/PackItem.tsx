import React, { useState } from 'react'
import { TransparentBtn } from '../../components/Buttons/MainButton'
import OnlineImages from '../../components/Icons/onlineImages'
import { useBuyPack } from '../../hooks/useCollection'
import { ContainerColumn, TextDescription, TextMain } from '../../styles/globalStyles'
import { TPackItem } from '../../types'
import { ProcessingLoader } from './Processing'

export const PackItem: React.FC<{ pack: TPackItem }> = ({ pack }) => {
  const [pendingTx, setPendingTx] = useState<boolean>(false)
  const { onBuyPack } = useBuyPack(pack.id, 1)

  return (
    <ContainerColumn width={'32%'}>
      <OnlineImages url={pack.uri} imgWidth={'95%'} />
      <TextMain>{pack.level}</TextMain>
      <TextDescription>{`${pack.count} Moments @ $${pack.price}`}</TextDescription>
      <TransparentBtn
        borderRadius={'24px'}
        padding={'24px 24px'}
        margin={'24px 0 0'}
        disabled={pendingTx}
        onClick={async () => {
          setPendingTx(true)
          try {
            await onBuyPack(pack.id, 1)
            setPendingTx(false)
            window.location.href = `/account`
          } catch (e) {
            setPendingTx(false)
          }
        }}
      >
        {pendingTx ? 'Processing' : 'Buy Now!'}
      </TransparentBtn>
      {pendingTx && <ProcessingLoader />}
    </ContainerColumn>
  )
}
