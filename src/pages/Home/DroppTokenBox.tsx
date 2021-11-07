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
import BORDER_EFFECT_IMG from '../../assets/images/text-border-bottom-effect.svg'

export const DroppTokenBoxItem: React.FC<{ src: string; mainText: string; contentText: string }> = ({
  src,
  mainText,
  contentText,
}) => {
  return (
    <BoxCard
      boxWidth={'30%'}
      boxHeight={'498px'}
      border={'10px solid var(--light-navy)'}
      borderHover={'10px solid var(--light-secondary)'}
      backgroundHover={'var(--secondary)'}
      backgroundColor={'var(--light-navy-blue)'}
      flexDirection={'column'}
      justifyContent={'space-around'}
    >
      <ImageIconContainer
        position={'relative'}
        boxWidth={'251px'}
        boxHeight={'251px'}
        border={'5px solid var(--purple)'}
        backgroundColor={'var(--purple)'}
        borderHover={'5px solid var(--light-secondary)'}
        backgroundHover={'var(--light-secondary)'}
        margin={'-20% 0 0 0'}
        borderRadius={'5px'}
      >
        <ImageContainer src={src} width={'90%'} borderRadius={'0'} objectFit={'contain'} />
      </ImageIconContainer>
      <TextCustom
        color={'var(--primary-text)'}
        fontSize={isMobile ? '0.8rem' : '35px'}
        fontWeight={300}
        fontFamily={'Rubik'}
        lineHeight={1.1}
        textAlign={'center'}
        margin={'10% 2% 5% 2%'}
      >
        {mainText}
      </TextCustom>
      <TextCustom
        color={'var(--primary-text)'}
        fontSize={isMobile ? '0.6rem' : '18px'}
        fontWeight={300}
        fontFamily={'Rubik'}
        lineHeight={1.3}
        textAlign={'center'}
        margin={'5% 2% 10% 2%'}
      >
        {contentText}
      </TextCustom>
    </BoxCard>
  )
}

export const DroppTokenBox: React.FC = () => {
  return (
    <ComponentWrapper margin={'50px 0 0'} padding={'24px'}>
      <TextCustom
        fontSize={isMobile ? '2rem' : '3.5rem'}
        fontWeight={600}
        fontFamily={'RubikBold'}
        lineHeight={1.1}
        textAlign={'center'}
        margin={'1% 0 2% 0'}
      >
        The&nbsp;
        <SubText
          color={'var(--secondary)'}
          fontSize={isMobile ? '2rem' : '3.5rem'}
          fontWeight={600}
          fontFamily={'RubikBold'}
          textAlign={'center'}
          borderImg={BORDER_EFFECT_IMG}
        >
          $DROPP
        </SubText>
        &nbsp;Token
      </TextCustom>
      <ContainerRow margin={'10% 0 0 0'}>
        <DroppTokenBoxItem
          src={'https://dropper.s3.ca-central-1.amazonaws.com/logos.png'}
          mainText={'$DROPP to get to the front of the lineup'}
          contentText={
            'To avoid bots front running every drop, users who hold and stake $DROPP will get to the front of the lineup. This will give them exclusive access to the first purchase of Dropps that they stake to.'
          }
        />
        <DroppTokenBoxItem
          src={'https://dropper.s3.ca-central-1.amazonaws.com/solodropper1.png'}
          mainText={'$DROPP Voting & Access'}
          contentText={
            'Users holding $DROPP will be able to vote on the queue of drops. This means if they are excited about a specific creator dropping a pack, they can move them directly to the front of the line'
          }
        />
        <DroppTokenBoxItem
          src={'https://dropper.s3.ca-central-1.amazonaws.com/sidewayspack.png'}
          mainText={'$DROPP as a toll'}
          contentText={
            '$DROPP will be the native token in the Dropper ecosystem. Like mobile games, users will be able to purchase packs, list assets, and buy assets with $DROPP. It is used in every transaction, from minting to buying a pack of NFTs, on the platform.'
          }
        />
      </ContainerRow>
    </ComponentWrapper>
  )
}
