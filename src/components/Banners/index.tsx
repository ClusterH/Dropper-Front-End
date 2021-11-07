import React from 'react'
import { MainButton } from '../../components/Buttons/MainButton'
import {
  ComponentWrapper,
  BoxCardWithoutBorder,
  TextCustom,
  ContainerRow,
  ImageContainer,
  SubText,
  ContainerColumn,
} from '../../styles/globalStyles'
import { isMobile } from 'react-device-detect'
import ARROW_RIGHT_ROUNDED from '../../assets/images/arrow-right-rounded.svg'
import BORDER_EFFECT_IMG from '../../assets/images/text-border-bottom-effect.svg'
import BANNER_IMG from '../../assets/images/banner.png'

const InventoryBanner = 'https://dropper.s3.ca-central-1.amazonaws.com/main-banner.png'
const Banner: React.FC<{ mainTitle?: string; subTitle?: string; summary?: string; isClix?: boolean }> = ({
  mainTitle,
  subTitle,
  summary,
  isClix,
}) => {
  return (
    <ContainerColumn>
      <ImageContainer src={isClix ? BANNER_IMG : InventoryBanner} width={'100%'} borderRadius={'0'} margin={'0'} />
      <ContainerRow position={'absolute'} padding={'0'} margin={'0'} justifyContent={'center'}>
        <ComponentWrapper margin={'50px 0 0'} padding={'24px'}>
          <ContainerRow>
            <BoxCardWithoutBorder flexDirection={'column'} boxWidth={'40%'} alignItems={'flex-start'}>
              <TextCustom
                color={'var(--primary-text)'}
                fontSize={isMobile ? '2rem' : '3rem'}
                fontWeight={700}
                fontFamily={'RubikBold'}
                lineHeight={1.2}
                textAlign={'left'}
              >
                {mainTitle}
              </TextCustom>
              <SubText
                color={'var(--secondary)'}
                fontSize={isMobile ? '2rem' : '3rem'}
                fontWeight={600}
                fontFamily={'RubikBold'}
                textAlign={'center'}
                borderImg={BORDER_EFFECT_IMG}
              >
                {subTitle}
              </SubText>
              <TextCustom
                color={'var(--primary-text)'}
                fontSize={isMobile ? '0.8rem' : '1rem'}
                fontWeight={300}
                fontFamily={'Rubik'}
                lineHeight={1.2}
                textAlign={'left'}
                margin={'20px 0'}
              >
                {summary}
              </TextCustom>
              <MainButton
                width={'fit-content'}
                borderRadius={'24px'}
                padding={'24px 24px'}
                backgroundColor={'var(--secondary)'}
                margin={'20px 0'}
                onClick={() => (window.location.href = '/')}
              >
                Back to Home &nbsp;
                <ImageContainer src={ARROW_RIGHT_ROUNDED} width={'36px'} />
              </MainButton>
            </BoxCardWithoutBorder>
          </ContainerRow>
        </ComponentWrapper>
      </ContainerRow>
    </ContainerColumn>
  )
}

export default Banner
