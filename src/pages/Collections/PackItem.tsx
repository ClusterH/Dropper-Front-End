import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'

import { TransparentBtn } from '../../components/Buttons/MainButton'
import OnlineImages from '../../components/Icons/onlineImages'
import { useBuyPack } from '../../hooks/useCollection'
import { useActiveWeb3React } from '../../hooks/useWeb3'
import { ContainerColumn, TextDescription, TextMain } from '../../styles/globalStyles'
import { TPackItem } from '../../types'
import { ProcessingLoader } from './Processing'

export const PackItem: React.FC<{ pack: TPackItem }> = ({ pack }) => {
  const [pendingTx, setPendingTx] = useState<boolean>(false)
  const { onBuyPack } = useBuyPack(pack.id, 1)
  const { account } = useActiveWeb3React()

  return (
    <ContainerColumn width={isMobile ? '100%' : '32%'} height={'auto'} padding={isMobile ? '0 0 70px' : '0'}>
      <OnlineImages url={pack.uri} imgWidth={isMobile ? '90%' : '90%'} />
      <TextMain>{pack.level}</TextMain>
      <TextDescription>{`${pack.count} Moments @ $${pack.price}`}</TextDescription>
      <TransparentBtn
        borderRadius={'24px'}
        padding={'24px 24px'}
        margin={'24px 0 0'}
        disabled={pendingTx || account === null || account === undefined}
        onClick={async () => {
          setPendingTx(true)
          try {
            const res = await onBuyPack(pack.id, 1)
            setPendingTx(false)
            if (res) window.location.href = `/account`
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
