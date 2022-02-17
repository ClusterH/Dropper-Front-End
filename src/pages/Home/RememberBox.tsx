import React from 'react'
import { isMobile } from 'react-device-detect'
import BANNER_SECOND from '../../assets/images/banner-second.svg'
import { TransparentBtn } from '../../components/Buttons/MainButton'
import {
  BigBoxWithoutShadow,
  BoxCardWithoutBorder,
  ComponentWrapper,
  ContainerRow,
  ImageContainer,
  TextCustom,
} from '../../styles/globalStyles'

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
            fontSize={isMobile ? '1rem' : '1.4rem'}
            fontWeight={400}
            fontFamily={'RubikBold'}
            lineHeight={1.4}
            textAlign={'left'}
          >
            Launch your NFT project with audited smart contracts, whitelist controls, and collection tools to create a flawless launch
            experience for your community.
          </TextCustom>
          <ContainerRow justifyContent="center" margin="24px 0">
            <TransparentBtn
              width={isMobile ? '100%' : '45%'}
              height={'50px'}
              borderRadius={'24px'}
              padding={'0'}
              margin={'12px'}
              onClick={() => (window.location.href = '/howitwork')}
            >
              <TextCustom
                color={'var(--secondary)'}
                fontSize={isMobile ? '1.5rem' : '1.2rem'}
                fontWeight={600}
                fontFamily={'RubikBold'}
                lineHeight={1.1}
                textAlign={'center'}
                margin={'1% 0 2% 0'}
              >
                Go to Launchpad
              </TextCustom>
            </TransparentBtn>
          </ContainerRow>
        </BoxCardWithoutBorder>
      </BigBoxWithoutShadow>
    </ComponentWrapper>
  )
}
