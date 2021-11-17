import React from 'react'
import { isMobile } from 'react-device-detect'
import BORDER_EFFECT_IMG from '../../assets/images/text-border-bottom-effect.svg'
import { advisorList } from '../../constants/dummy'
import {
  BoxCard,
  ComponentWrapper,
  ContainerRow,
  ImageContainer,
  PhotoContainer,
  SubText,
  TextCustom,
} from '../../styles/globalStyles'

export const AdvisorCardBoxItem: React.FC<{ src: string; mainText: string; contentText?: string }> = ({
  src,
  mainText,
}) => {
  return (
    <BoxCard
      boxWidth={isMobile ? '40%' : '20%'}
      boxHeight={'auto'}
      border={'5px solid var(--light-navy)'}
      borderHover={'5px solid var(--light-secondary)'}
      backgroundHover={'var(--secondary)'}
      backgroundColor={'transparent'}
      flexDirection={'column'}
      justifyContent={'space-around'}
      margin={isMobile ? '10% 12px' : '12px'}
    >
      <PhotoContainer
        position={'relative'}
        border={isMobile ? '5px solid var(--primary-text)' : '10px solid var(--primary-text)'}
        backgroundColor={'#6E9673'}
        margin={'-50% 0 0 0'}
        padding={'0'}
      >
        <ImageContainer src={src} width={'100%'} height={'100%'} borderRadius={'50%'} objectFit={'cover'} />
      </PhotoContainer>
      <TextCustom
        color={'var(--primary-text)'}
        fontSize={isMobile ? '0.8rem' : '25px'}
        fontWeight={300}
        fontFamily={'Rubik'}
        lineHeight={1.1}
        textAlign={'center'}
        margin={'20% 2% 5% 2%'}
      >
        {mainText}
      </TextCustom>
      {/* <TextCustom
        color={'var(--primary-text)'}
        fontSize={isMobile ? '0.6rem' : '16px'}
        fontWeight={300}
        fontFamily={'Rubik'}
        lineHeight={1.3}
        textAlign={'center'}
        margin={'3% 2% 5% 2%'}
      >
        {contentText}
      </TextCustom> */}
      <ContainerRow
        width={'80%'}
        padding={'10% 0'}
        margin={'0 0 10% 0'}
        justifyContent={'space-around'}
        alignItems={'center'}
      >
        {/* <TwitterIcon />
        <LinkedInIcon />
        <SkypeIcon /> */}
      </ContainerRow>
    </BoxCard>
  )
}

export const AdvisorsCardBox: React.FC = () => {
  return (
    <ComponentWrapper margin={isMobile ? '10px 0 0' : '50px 0 0'} padding={'24px'}>
      <TextCustom
        fontSize={isMobile ? '2rem' : '3.5rem'}
        fontWeight={600}
        fontFamily={'RubikBold'}
        lineHeight={1.1}
        textAlign={'center'}
        margin={'1% 0 2% 0'}
      >
        Meet Our&nbsp;
        <SubText
          color={'var(--secondary)'}
          fontSize={isMobile ? '2rem' : '3.5rem'}
          fontWeight={600}
          fontFamily={'RubikBold'}
          textAlign={'center'}
          borderImg={BORDER_EFFECT_IMG}
        >
          Advisors
        </SubText>
      </TextCustom>
      <ContainerRow margin={'10% 0 0 0'} flexWrap={isMobile ? 'wrap' : 'normal'}>
        {advisorList.map((item) => {
          return <AdvisorCardBoxItem key={`advisor_${item.id}`} src={item.imgUri} mainText={item.name} />
        })}
      </ContainerRow>
    </ComponentWrapper>
  )
}
