import React from 'react'
import { isMobile } from 'react-device-detect'
import ARROW_RIGHT_ROUNDED from '../../assets/images/arrow-right-rounded.svg'
import BANNER_IMG from '../../assets/images/banner.png'
import BANNER_IMG2 from '../../assets/images/background.png'
import HEADER_IMG from '../../assets/images/headerimage.png'
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

const Banner: React.FC<{ mainTitle?: string; subTitle?: string; summary?: string; isClix?: boolean }> = ({
  mainTitle,
  subTitle,
  summary,
  isClix,
}) => {
  return (
    <ContainerColumn height={isMobile ? '50vw' : 'auto'}>
      <ImageContainer
        src={isClix ? BANNER_IMG : BANNER_IMG2}
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
                fontSize={'3.33vmax'}
                fontWeight={700}
                fontFamily={'RubikBold'}
                lineHeight={1.2}
                textAlign={'left'}
              >
                {mainTitle}
              </TextCustom>
              <SubText
                color={'var(--secondary)'}
                fontSize={'3.33vmax'}
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
                padding={'1.7vmax 2.4vmax'}
                backgroundColor={'var(--secondary)'}
                onClick={() => (window.location.href = '/')}
              >
                <TextCustom fontSize={'1.1vmax'} fontWeight={600}>
                  Back to Home &nbsp;
                </TextCustom>
                <ImageContainer src={ARROW_RIGHT_ROUNDED} width={'1.5vmax'} />
              </MainButton>
            </BoxCardWithoutBorder>
            {!isMobile && !isClix && (
              <BoxCardWithoutBorder boxWidth={'50%'}>
                <ImageContainer src={HEADER_IMG} width={'70%'} />
              </BoxCardWithoutBorder>
            )}
          </ContainerRow>
        </ComponentWrapper>
      </ContainerRow>
    </ContainerColumn>
  )
}

export default Banner
