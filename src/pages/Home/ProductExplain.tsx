import React from 'react'
import {
  ComponentWrapper,
  BoxCard,
  TextCustom,
  ContainerRow,
  ImageContainer,
  SubText,
  ImageIconContainer,
} from '../../styles/globalStyles'
import { isMobile } from 'react-device-detect'
import BANNER_SECOND from '../../assets/images/banner-second.svg'
import { title } from 'process'

export const ProductExplainItem: React.FC<{
  src: string
  title: string
  description: Array<string>
  highlightText: string
}> = ({ src, title, description, highlightText }) => {
  return (
    <BoxCard
      boxWidth={'30%'}
      boxHeight={'498px'}
      border={'10px solid var(--light-navy)'}
      backgroundColor={'var(--light-navy-blue)'}
      flexDirection={'column'}
      justifyContent={'space-around'}
    >
      <ImageIconContainer
        position={'relative'}
        boxWidth={'251px'}
        boxHeight={'251px'}
        border={'5px solid var(--light-navy)'}
        backgroundColor={'var(--purple)'}
        margin={'-20% 0 0 0'}
      >
        <ImageContainer src={src} width={'90%'} borderRadius={'0'} objectFit={'contain'} />
      </ImageIconContainer>
      <TextCustom
        color={'var(--secondary)'}
        fontSize={isMobile ? '0.8rem' : '45px'}
        fontWeight={300}
        fontFamily={'Rubik'}
        lineHeight={1.1}
        textAlign={'center'}
        margin={'3% 0 0% 0'}
      >
        {title}
      </TextCustom>
      <TextCustom
        color={'var(--primary-text)'}
        fontSize={isMobile ? '0.8rem' : '35px'}
        fontWeight={300}
        fontFamily={'Rubik'}
        lineHeight={1}
        textAlign={'center'}
        margin={'6% 0 2% 0'}
      >
        {description[0]} &nbsp;
        <SubText
          color={'var(--secondary)'}
          fontSize={isMobile ? '0.8rem' : '35px'}
          fontWeight={300}
          fontFamily={'Rubik'}
          textAlign={'center'}
        >
          {highlightText}
        </SubText>
        &nbsp; {description[1]}
      </TextCustom>
    </BoxCard>
  )
}

export const ProductExplain: React.FC = () => {
  return (
    <ComponentWrapper margin={'50px 0 0'} padding={'24px'}>
      <ContainerRow>
        <ProductExplainItem
          src={'https://dropper.s3.ca-central-1.amazonaws.com/logos.png'}
          title={'Verify'}
          description={['Each celebrity is', ' on the Dropper Platform']}
          highlightText={'verified'}
        />
        <ProductExplainItem
          src={'https://dropper.s3.ca-central-1.amazonaws.com/solodropper1.png'}
          title={'Experience'}
          description={['They craft a digital', 'for their fans powered by NFTs and Tokenization']}
          highlightText={'experience'}
        />
        <ProductExplainItem
          src={'https://dropper.s3.ca-central-1.amazonaws.com/sidewayspack.png'}
          title={'Access'}
          description={['Fans buy NFTs to get', '']}
          highlightText={'access'}
        />
      </ContainerRow>
    </ComponentWrapper>
  )
}
