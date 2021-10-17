import React, { useState } from 'react'
import { TransparentBtn } from '../../components/Buttons/MainButton'
import OnlineImages from '../../components/Icons/onlineImages'
import { useOpenPackWithApprove } from '../../hooks/useCollection'
import { ContainerColumn, TextDescription, TextMain } from '../../styles/globalStyles'
import { TPackItem } from '../../types'
import { ProcessingLoader } from '../Collections/Processing'

export const AccPackItem: React.FC<{ pack: TPackItem }> = ({ pack }) => {
  const [pendingTx, setPendingTx] = useState<boolean>(false)
  const { onOpenPack } = useOpenPackWithApprove(pack.id, 1)

  return (
    <ContainerColumn width={'32%'}>
      <OnlineImages url={pack.uri} imgWidth={'95%'} />
      <TextMain>{`${pack.level} Packs (${pack.balance})`}</TextMain>
      <TextDescription>{`@DropperNFT`}</TextDescription>
      <TransparentBtn
        borderRadius={'24px'}
        padding={'24px 24px'}
        margin={'24px 0 0'}
        disabled={pendingTx}
        onClick={async () => {
          setPendingTx(true)
          try {
            const res = await onOpenPack(pack.id, 1)
            console.log('opening Pack===>>>', res)
            setPendingTx(false)

            // window.location.href = `/account`
          } catch (e) {
            console.log('openPack error', e)
            setPendingTx(false)
          }
        }}
      >
        {pendingTx ? 'Processing' : 'Open Pack!'}
      </TransparentBtn>
      {pendingTx && <ProcessingLoader />}
    </ContainerColumn>
  )
}
