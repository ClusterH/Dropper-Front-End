import React from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import DOT_BLOCK_EFFECT_BLUE from '../../assets/images/dot-block-effect-blue.svg'
import DOT_BLOCK_EFFECT_RED from '../../assets/images/dot-block-effect-red.svg'
import QUOTATION_MARK from '../../assets/images/quotation-mark.svg'
import BORDER_EFFECT_IMG from '../../assets/images/text-border-bottom-effect.svg'
import { creatorBio } from '../../constants/dummy'
import {
  AvatarContainer,
  BoxCard,
  ComponentWrapper,
  ContainerColumn,
  ContainerRow,
  Divider,
  ImageContainer,
  SubText,
  TextCustom,
} from '../../styles/globalStyles'

const DotBlockEffectLeft = styled(ImageContainer)`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
`

const DotBlockEffectRight = styled(ImageContainer)`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  padding: 0;
`

const QuotationMarkBox = styled(ContainerColumn)`
  position: absolute;
  top: 40px;
  left: 10%;
  align-items: center;
`

const QuotationMarkIcon = styled(ImageContainer)`
  border-radius: 0;
  object-fit: fill;
`

export const CreatorBox: React.FC = () => {
  return (
    <ComponentWrapper margin={isMobile ? '0' : '20px 0 0'} padding={isMobile ? '10px' : '0 48px 20px 48px'}>
      <ContainerRow justifyContent={'center'} margin={'0 0 30px 0'}>
        <SubText
          color={'var(--primary-text)'}
          fontSize={isMobile ? '2rem' : '3rem'}
          fontWeight={600}
          fontFamily={'RubikBold'}
          textAlign={'center'}
          borderImg={BORDER_EFFECT_IMG}
        >
          Creator
        </SubText>
      </ContainerRow>
      <ContainerRow width={'100%'} padding={'40px 10px'} margin={'0'} justifyContent={'center'}>
        <DotBlockEffectLeft src={DOT_BLOCK_EFFECT_RED} width={'240px'} height={'auto'} borderRadius={'0'} />
        <DotBlockEffectRight src={DOT_BLOCK_EFFECT_BLUE} width={'240px'} height={'auto'} borderRadius={'0'} />
        <ContainerRow width={isMobile ? '100%' : '85%'} padding={'0'} margin={'10px 0'} justifyContent={'center'}>
          <BoxCard
            key={creatorBio.id}
            flexDirection={'column'}
            alignItems={'center'}
            padding={'30px 20px 20px'}
            margin={'0'}
            border={'none'}
            borderHover={'none'}
            backgroundColor={'var(--light-navy-blue)'}
            style={{ position: 'relative' }}
          >
            <QuotationMarkBox width={isMobile ? '25px' : '40px'}>
              <QuotationMarkIcon src={QUOTATION_MARK} width={isMobile ? '25px' : '40px'} height={isMobile ? '25px' : '40px'} />
              <TextCustom
                color={'var(--secondary)'}
                fontSize={isMobile ? '0.8rem' : '1rem'}
                fontWeight={600}
                fontFamily={'RubikBold'}
                lineHeight={1.2}
                textAlign={'center'}
                margin={'20px 0 0'}
              >
                {'Clix'}
              </TextCustom>
            </QuotationMarkBox>
            <AvatarContainer
              width={'120px'}
              src={creatorBio.imgUrl}
              onClick={() => {
                window.open('https://www.joindropper.com/', '_blank')
              }}
            />
            <Divider width={'10%'} height={'3px'} backColor={'var(--light-blue)'} margin={'20px 0 0 0'} />
            <ContainerRow margin={'10px 0 0'} padding={isMobile ? '10px' : '10px 30px'}>
              <TextCustom
                fontSize={isMobile ? '0.8rem' : '1rem'}
                fontWeight={300}
                fontFamily={'Rubik'}
                lineHeight={1.5}
                textAlign={'center'}
              >
                {creatorBio.description}
              </TextCustom>
            </ContainerRow>
            <ContainerColumn justifyContent={'center'} alignItems={'center'} padding={'20px'}>
              {/* <TextCustom
                fontSize={isMobile ? '0.8rem' : '1.2rem'}
                fontWeight={300}
                fontFamily={'Rubik'}
                lineHeight={2}
                textAlign={'center'}
              >
                {creatorBio.name}
              </TextCustom>
              <TextCustom
                color={'var(--grey-opacity)'}
                fontSize={isMobile ? '0.5rem' : '0.8rem'}
                fontWeight={300}
                fontFamily={'Rubik'}
                lineHeight={2}
                textAlign={'center'}
              >
                {`${creatorBio.role} Angular Cooperation`}
              </TextCustom> */}
            </ContainerColumn>
          </BoxCard>
        </ContainerRow>
      </ContainerRow>
    </ComponentWrapper>
  )
}
