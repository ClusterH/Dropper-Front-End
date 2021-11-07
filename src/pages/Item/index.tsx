import React from 'react'
import { useLocation } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { VideoContainer } from '../../components/VideoContainer'
import {
  ContainerColumn,
  ContainerRow,
  ImageContainer,
  PageWrapper,
  ResponsiveContainer,
  TextCustom,
  TextMain,
} from '../../styles/globalStyles'
import { b64DecodeUnicode } from '../../utils/convertString'
import { TMomentItem } from '../../types'
import { MainButton } from '../../components/Buttons/MainButton'
import ARROW_RIGHT_ROUNDED from '../../assets/images/arrow-right-rounded.svg'

const ItemText: React.FC<{ label: string; text: string }> = ({ label, text }) => {
  return (
    <ContainerRow justifyContent={'flex-start'}>
      <TextCustom color={'var(--secondary)'} fontSize={'1.25rem'} style={{ width: '32%' }} textAlign={'left'}>
        {`${label}: `}
      </TextCustom>
      <TextMain>{text}</TextMain>
    </ContainerRow>
  )
}

const ItemDetail: React.FC<{ moment: TMomentItem }> = ({ moment }) => {
  return (
    <ContainerColumn
      alignItems={'flex-start'}
      width={isMobile ? '100%' : '20%'}
      height={'auto'}
      padding={'24px 0 0 12px'}
    >
      <ItemText label={'Name'} text={moment.name} />
      <ItemText label={'Class'} text={moment.rarity} />
      <ItemText label={'Moment Id'} text={moment.id} />
      <ItemText label={'Total Minted'} text={moment.totalMintedMoments} />
      <ContainerRow justifyContent={'center'}>
        <MainButton
          width={'fit-content'}
          borderRadius={'24px'}
          padding={'24px 24px'}
          backgroundColor={'var(--secondary)'}
          margin={'20px 0'}
          onClick={() => (window.location.href = '/account')}
        >
          Back to Account &nbsp;
          <ImageContainer src={ARROW_RIGHT_ROUNDED} width={'36px'} />
        </MainButton>
      </ContainerRow>
    </ContainerColumn>
  )
}

const Item: React.FC = () => {
  const search = useLocation().search
  const params = new URLSearchParams(search)
  const moment: TMomentItem = JSON.parse(b64DecodeUnicode(params.get('query')!))

  return (
    <PageWrapper>
      <ResponsiveContainer height={isMobile ? 'auto' : 'calc(100vh - 72px)'}>
        <VideoContainer
          url={moment.animationUrl}
          posterUrl={moment.imageUrl}
          width={isMobile ? '100%' : '70%'}
        ></VideoContainer>
        <ItemDetail moment={moment} />
      </ResponsiveContainer>
    </PageWrapper>
  )
}
export default Item
