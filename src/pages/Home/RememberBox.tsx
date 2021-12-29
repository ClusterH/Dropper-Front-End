import React from 'react'
import { isMobile } from 'react-device-detect'
import BANNER_SECOND from '../../assets/images/banner-second.svg'
import { BigBoxWithoutShadow, BoxCardWithoutBorder, ComponentWrapper, ImageContainer, TextCustom } from '../../styles/globalStyles'

export const RememberBox: React.FC = () => {
  return (
    <ComponentWrapper margin={'50px 0 0'} padding={'24px'}>
      <BigBoxWithoutShadow
        border={'20px solid var(--light-navy)'}
        backgroundColor={'var(--light-navy-blue)'}
        flexDirection={isMobile ? 'column' : 'row'}
      >
        <BoxCardWithoutBorder boxWidth={isMobile ? '100%' : '40%'}>
          <ImageContainer src={BANNER_SECOND} width={'100%'} margin={'-15% 0 0 0'} />
        </BoxCardWithoutBorder>
        <BoxCardWithoutBorder flexDirection={'column'} boxWidth={isMobile ? '100%' : '50%'} alignItems={'flex-start'}>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={isMobile ? '1.2rem' : '1.8rem'}
            fontWeight={700}
            fontFamily={'RubikBold'}
            lineHeight={1.2}
            textAlign={'left'}
            margin={'-5% 0 0 0'}
          >
            Each NFT collection on Dropper is unique
          </TextCustom>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={isMobile ? '1rem' : '1.4rem'}
            fontWeight={700}
            fontFamily={'RubikBold'}
            lineHeight={1.1}
            textAlign={'left'}
            margin={isMobile ? '40px 0 0 0' : '40px 90px 0 70px'}
          >
            We enable celebrities to create web3 experiences that give fans unparalleled access and influence into their world.
          </TextCustom>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={isMobile ? '1.2rem' : '1.5rem'}
            fontWeight={100}
            fontFamily={'Rubik'}
            lineHeight={1}
            textAlign={'left'}
            margin={isMobile ? '0' : '30px 0 0 0'}
          ></TextCustom>
        </BoxCardWithoutBorder>
      </BigBoxWithoutShadow>
    </ComponentWrapper>
  )
}
