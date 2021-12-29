import React from 'react'
import { isMobile } from 'react-device-detect'
import ARROW_RIGHT_ROUNDED from '../../assets/images/arrow-right-rounded.svg'
import BANNER_IMG from '../../assets/images/banner.png'
import BORDER_EFFECT_IMG from '../../assets/images/text-border-bottom-effect.svg'
import MainButton from '../../components/Buttons/MainButton'
import {
  BoxCardWithoutBorder,
  ComponentWrapper,
  ContainerColumn,
  ContainerRow,
  ImageContainer,
  SubText,
  TextCustom,
} from '../../styles/globalStyles'

const InventoryBanner = 'https://dropper.s3.ca-central-1.amazonaws.com/main-banner.png'

const Banner: React.FC<{ mainTitle?: string; subTitle?: string; summary?: string; isClix?: boolean }> = ({
  mainTitle,
  subTitle,
  summary,
  isClix,
}) => {
  return (
    <ContainerColumn height={isMobile ? '50vw' : 'auto'}>
      <ImageContainer
        src={isClix ? BANNER_IMG : InventoryBanner}
        width={'100%'}
        height={isMobile ? '50vw' : 'auto'}
        borderRadius={'0'}
        margin={'0'}
        objectFit={'cover'}
        position={isMobile ? 'absolute' : 'relative'}
        style={{ top: '0' }}
      />
      <ContainerRow padding={'0'} margin={'0'} justifyContent={'center'} position={isMobile ? 'relative' : 'absolute'}>
        <ComponentWrapper margin={isMobile ? '0' : '50px 0 0'} padding={isMobile ? '0px 24px' : '24px'}>
          <ContainerRow>
            <BoxCardWithoutBorder flexDirection={'column'} boxWidth={isMobile ? '100%' : '40%'} alignItems={'flex-start'}>
              <TextCustom
                color={'var(--primary-text)'}
                fontSize={isMobile ? '1.5rem' : '3rem'}
                fontWeight={700}
                fontFamily={'RubikBold'}
                lineHeight={1.2}
                textAlign={'left'}
              >
                {mainTitle}
              </TextCustom>
              <SubText
                color={'var(--secondary)'}
                fontSize={isMobile ? '1.5rem' : '3rem'}
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
                margin={isMobile ? '5px 0' : '25px 0'}
              >
                {summary}
              </TextCustom>
              <MainButton
                width={'fit-content'}
                borderRadius={'24px'}
                height={isMobile ? '40px' : '50px'}
                padding={isMobile ? '0 10px' : '0 24px'}
                backgroundColor={'var(--secondary)'}
                // margin={isMobile ? '' : '20px 0'}
                onClick={() => (window.location.href = '/')}
              >
                Back to Home &nbsp;
                <ImageContainer src={ARROW_RIGHT_ROUNDED} width={isMobile ? '24px' : '36px'} />
              </MainButton>
            </BoxCardWithoutBorder>
          </ContainerRow>
        </ComponentWrapper>
      </ContainerRow>
    </ContainerColumn>
  )
}

export default Banner
