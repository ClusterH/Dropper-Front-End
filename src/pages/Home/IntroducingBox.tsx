import React from 'react'
import { MainButton, TransparentBtn } from '../../components/Buttons/MainButton'
import {
  ComponentWrapper,
  BoxCardWithoutBorder,
  TextCustom,
  ContainerRow,
  ImageContainer,
} from '../../styles/globalStyles'
import LOGO_IMG from '../../assets/images/dropper-small-shaddow.png'
import { isMobile } from 'react-device-detect'
import BANNER_MAIN from '../../assets/images/banner-main.svg'
import ARROW_RIGHT_ROUNDED from '../../assets/images/arrow-right-rounded.svg'

export const IntroducingBox: React.FC = () => {
  return (
    <ComponentWrapper margin={'50px 0 0'} padding={'24px'}>
      <ContainerRow>
        <BoxCardWithoutBorder flexDirection={'column'} boxWidth={'40%'} alignItems={'flex-start'}>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={isMobile ? '2rem' : '3.2rem'}
            fontWeight={700}
            fontFamily={'RubikBold'}
            lineHeight={1.2}
            textAlign={'left'}
          >
            Fans love your brand. Now they can be a part of it.
          </TextCustom>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={isMobile ? '0.8rem' : '1rem'}
            fontWeight={100}
            fontFamily={'LatoThin'}
            lineHeight={1.5}
            textAlign={'left'}
            style={{ marginTop: '10px' }}
          >
            The platform where celebrities launch iconic NFT collections that give fans digital access to their world.
          </TextCustom>
          <BoxCardWithoutBorder boxWidth={'100%'} justifyContent={'flex-start'} padding={'0px'} margin={'0px'}>
            <MainButton
              width={'fit-content'}
              borderRadius={'24px'}
              padding={'24px 24px'}
              backgroundColor={'var(--secondary)'}
              margin={'20px 0'}
              onClick={() => (window.location.href = '/clix')}
            >
              Clix Drop &nbsp;
              <ImageContainer src={ARROW_RIGHT_ROUNDED} width={'36px'} />
            </MainButton>
            <TransparentBtn
              borderRadius={'24px'}
              padding={'24px 24px'}
              margin={'12px'}
              onClick={() => (window.location.href = '/clix')}
            >
              <ImageContainer src={LOGO_IMG} width={'80%'} />
            </TransparentBtn>
          </BoxCardWithoutBorder>
        </BoxCardWithoutBorder>
        <BoxCardWithoutBorder boxWidth={'50%'}>
          <ImageContainer src={BANNER_MAIN} width={'100%'} style={{ marginTop: '-15%' }} />
        </BoxCardWithoutBorder>
      </ContainerRow>
    </ComponentWrapper>
  )
}
