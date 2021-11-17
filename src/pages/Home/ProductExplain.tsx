import React from 'react'
import { isMobile } from 'react-device-detect'
import {
  BoxCard,
  ComponentWrapper,
  ContainerRow,
  ImageContainer,
  ImageIconContainer,
  ResponsiveContainer,
  SubText,
  TextCustom,
} from '../../styles/globalStyles'

export const ProductExplainItem: React.FC<{
  src: string
  title: string
  description: Array<string>
  highlightText: string
}> = ({ src, title, description, highlightText }) => {
  return (
    <BoxCard
      boxWidth={isMobile ? '80%' : '30%'}
      boxHeight={isMobile ? '320px' : '480px'}
      border={'10px solid var(--light-navy)'}
      backgroundColor={'var(--light-navy-blue)'}
      flexDirection={'column'}
      justifyContent={'flex-start'}
      padding={'0 1.5%'}
      margin={isMobile ? '10% 0' : '12px'}
    >
      <ImageIconContainer
        position={'relative'}
        boxWidth={isMobile ? '200px' : '251px'}
        boxHeight={isMobile ? '200px' : '251px'}
        border={'5px solid var(--light-navy)'}
        backgroundColor={'var(--purple)'}
        margin={'-20% 0 0 0'}
      >
        <ImageContainer src={src} width={'90%'} borderRadius={'0'} objectFit={'contain'} />
      </ImageIconContainer>
      <TextCustom
        color={'var(--secondary)'}
        fontSize={isMobile ? '1.2rem' : '35px'}
        fontWeight={300}
        fontFamily={'Rubik'}
        lineHeight={1.1}
        textAlign={'center'}
        margin={'10% 0 0% 0'}
      >
        {title}
      </TextCustom>
      <TextCustom
        color={'var(--primary-text)'}
        fontSize={isMobile ? '.8rem' : '18px'}
        fontWeight={300}
        fontFamily={'Rubik'}
        lineHeight={1}
        textAlign={'center'}
        margin={'6% 0 2% 0'}
      >
        {description[0]} &nbsp;
        <SubText
          color={'var(--secondary)'}
          fontSize={isMobile ? '.8rem' : '18px'}
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
        <ResponsiveContainer>
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
        </ResponsiveContainer>
      </ContainerRow>
    </ComponentWrapper>
  )
}
