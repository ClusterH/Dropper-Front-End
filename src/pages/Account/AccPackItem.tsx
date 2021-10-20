import React, { useState } from 'react'
import styled from 'styled-components'
import { TransparentBtn } from '../../components/Buttons/MainButton'
import OnlineImages from '../../components/Icons/onlineImages'
import { useOpenPackWithApprove } from '../../hooks/useCollection'
import { ContainerColumn, TextDescription, TextMain } from '../../styles/globalStyles'
import { TPackItem } from '../../types'
import { ProcessingLoader } from '../Collections/Processing'
import { isMobile } from 'react-device-detect'

const PackItemWrapper = styled(ContainerColumn)`
  box-shadow: 0px 3px 10px var(--secondary-opacity);
  border-radius: 12px;
  padding: 24px;
  margin: 0 0 32px 0;
  height: auto;
`
export const AccPackItem: React.FC<{ pack: TPackItem; setActivatedTab: (tab: 'pack' | 'moment') => void }> = ({
  pack,
  setActivatedTab,
}) => {
  const [pendingTx, setPendingTx] = useState<boolean>(false)
  const { onOpenPack } = useOpenPackWithApprove(pack.id, 1)

  return (
    <PackItemWrapper width={isMobile ? '90%' : '32%'}>
      <OnlineImages url={pack.uri} imgWidth={'100%'} />
      <TextMain>{`${pack.level} Packs (${pack.balance})`}</TextMain>
      <TextDescription>{`@DropperNFT`}</TextDescription>
      <TransparentBtn
        borderRadius={'24px'}
        padding={'24px 24px'}
        margin={'24px 0 0'}
        disabled={pendingTx || pack.balance === undefined || pack.balance === '0'}
        onClick={async () => {
          setPendingTx(true)
          try {
            const res = await onOpenPack(pack.id, 1)
            if (res) setActivatedTab('moment')
            setPendingTx(false)
          } catch (e) {
            console.log('openPack error', e)
            setPendingTx(false)
          }
        }}
      >
        {pendingTx ? 'Processing' : 'Open Pack!'}
      </TransparentBtn>
      {pendingTx && <ProcessingLoader animationUrl={pack.animationUrl} />}
    </PackItemWrapper>
  )
}
