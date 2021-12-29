import React from 'react'
import { isMobile } from 'react-device-detect'
import COUNTDOWN_BACK from '../../assets/images/countdown-back.svg'
import PIN_ICON from '../../assets/images/pin-icon.svg'
import BORDER_EFFECT_IMG from '../../assets/images/text-border-bottom-effect.svg'
import MainButton from '../../components/Buttons/MainButton'
import DateTimeCount from '../../components/DateTimeCount'
import { ComponentWrapper, ContainerRow, ImageContainer, SubText, TextCustom } from '../../styles/globalStyles'

export const CountdownBox: React.FC = () => {
  return (
    <ContainerRow backgroundColor={'var(--dark-navy)'} justifyContent={'center'} width={'100%'} padding={'0'} position={'relative'}>
      <ImageContainer src={COUNTDOWN_BACK} objectFit={'cover'} borderRadius={'0'} width={'100%'} height={'100%'} position={'absolute'} />
      <ComponentWrapper margin={'40px 0'} padding={'24px'}>
        <ContainerRow justifyContent={'center'} margin={'0 0 30px 0'}>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={isMobile ? '2rem' : '3rem'}
            fontWeight={700}
            fontFamily={'RubikBold'}
            lineHeight={1.2}
            textAlign={'left'}
          >
            Countdown to &nbsp;
          </TextCustom>
          <SubText
            color={'var(--secondary)'}
            fontSize={isMobile ? '2rem' : '3rem'}
            fontWeight={600}
            fontFamily={'RubikBold'}
            textAlign={'center'}
            borderImg={BORDER_EFFECT_IMG}
          >
            Launch!
          </SubText>
        </ContainerRow>
        <DateTimeCount />
        <ContainerRow justifyContent={'center'} width={'70%'} margin={'15% auto 5% auto'}>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={isMobile ? '1.5rem' : '2rem'}
            fontWeight={300}
            fontFamily={'RubikBold'}
            lineHeight={1.5}
            textAlign={'center'}
          >
            {`Want all the info on Clix's launch? Sign up to get your early access code!`}
          </TextCustom>
        </ContainerRow>
        <ContainerRow justifyContent={'center'} width={'70%'} margin={'0 auto -8% auto'} style={{ zIndex: 9999 }}>
          <MainButton
            width={'fit-content'}
            borderRadius={'24px'}
            padding={'4% 5%'}
            backgroundColor={'var(--secondary)'}
            margin={'0'}
            onClick={() => (window.location.href = '/ranks')}
          >
            <TextCustom color={'var(--primary-text)'} fontSize={'2.5rem'} fontWeight={600}>
              Sign Up Here &nbsp;
            </TextCustom>
            <ImageContainer src={PIN_ICON} width={'20px'} />
          </MainButton>
        </ContainerRow>
      </ComponentWrapper>
    </ContainerRow>
  )
}
