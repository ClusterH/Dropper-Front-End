import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'
import { TransparentBtn } from '../../../components/Buttons/MainButton'
import { VideoContainer } from '../../../components/VideoContainer'
import { useOpenPackMeta } from '../../../hooks/useCollection'
import { BoxCard, ContainerColumn, TextCustom } from '../../../styles/globalStyles'
import { TPackItem, TSelectedTab } from '../../../types'
import { ProcessingLoader } from '../../Collections/Processing'

interface IPackItem {
  width?: string
  data: {
    title: string
  }
  onClick: () => void
}

export const PacksItem: React.FC<{ pack: TPackItem; setSelectedTab: (tab: TSelectedTab) => void }> = ({ pack, setSelectedTab }) => {
  const [pendingTx, setPendingTx] = useState<boolean>(false)
  const { onOpenPackMeta } = useOpenPackMeta()

  return (
    <BoxCard
      boxWidth={isMobile ? '100%' : '48%'}
      border={'3px solid var(--navy-blue)'}
      borderHover={'5px solid var(--navy-blue)'}
      backgroundColor={'var(--light-navy-blue)'}
      backgroundHover={'var(--light-navy-blue)'}
      borderRadius={'26px'}
      margin={'0'}
      alignItems={'center'}
      padding={'20px'}
    >
      <VideoContainer
        url={pack.animationUrl}
        posterUrl={pack.uri}
        width={'60%'}
        height={'fit-content'}
        borderRadius={'10px'}
        border={'3px solid var(--navy-blue)'}
        isControls={true}
        isAutoPlay={true}
      />
      <ContainerColumn justifyContent={'flex-start'} alignItems={'flex-start'} padding={'20px 0 0 20px'} gap={'12px'}>
        <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
          {`${pack.level} Packs (${pack.balance})`}
        </TextCustom>
        <TextCustom color={'var(--secondary)'} fontSize={'16px'} fontWeight={300}>
          {'@DropperNFT'}
        </TextCustom>
        {/* <TransparentBtn
          borderRadius={'24px'}
          padding={'24px 24px'}
          disabled={pendingTx || pack.balance === undefined || pack.balance === '0'}
          onClick={async () => {
            setPendingTx(true)
            try {
              const res = await onOpenPack(pack.id)
              if (res) {
                setSelectedTab('moments')
                window.location.href = '/inventory'
              }
              setPendingTx(false)
            } catch (e) {
              console.log('openPack error', e)
              setPendingTx(false)
            }
          }}
        >
          {pendingTx ? 'Processing' : 'Open Pack!'}
        </TransparentBtn> */}
        <TransparentBtn
          borderRadius={'24px'}
          padding={'24px 24px'}
          disabled={pendingTx || pack.balance === undefined || pack.balance === '0'}
          onClick={async () => {
            setPendingTx(true)
            try {
              const res = await onOpenPackMeta(pack.id)
              if (res) {
                setSelectedTab('moments')
                window.location.href = '/inventory'
              }
              setPendingTx(false)
            } catch (e) {
              console.log('openPack error', e)
              setPendingTx(false)
            }
          }}
        >
          {pendingTx ? 'Processing' : 'Open Pack!'}
        </TransparentBtn>
      </ContainerColumn>

      {pendingTx && <ProcessingLoader animationUrl={pack.animationUrl} />}
    </BoxCard>
  )
}
