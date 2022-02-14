import React from 'react'
import { isMobile } from 'react-device-detect'
import ARROW_RIGHT_ROUNDED from '../../assets/images/arrow-right-rounded.svg'
import BANNER_MAIN from '../../assets/images/banner2.svg'
import MainButton, { TransparentBtn } from '../../components/Buttons/MainButton'

import { BoxCardWithoutBorder, ComponentWrapper, ContainerRow, ImageContainer, TextCustom } from '../../styles/globalStyles'

export const IntroducingBox: React.FC = () => {
  return (
    <ComponentWrapper margin={'50px 0 0'} padding={'24px'}>
      <ContainerRow>
        <BoxCardWithoutBorder flexDirection={'column'} boxWidth={isMobile ? '100%' : '50%'} alignItems={'flex-start'}>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={'3vmax'}
            fontWeight={700}
            fontFamily={'RubikBold'}
            lineHeight={1.2}
            textAlign={'left'}
          >
            Mint NFTs
          </TextCustom>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={'3vmax'}
            fontWeight={700}
            fontFamily={'RubikBold'}
            lineHeight={1.2}
            textAlign={'left'}
          >
            Get Rewards
          </TextCustom>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={'3vmax'}
            fontWeight={700}
            fontFamily={'RubikBold'}
            lineHeight={1.2}
            textAlign={'left'}
            margin={'24px 0 0'}
          >
            Create NFT Collections
          </TextCustom>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={'3.2vmax'}
            fontWeight={700}
            fontFamily={'RubikBold'}
            lineHeight={1.2}
            textAlign={'left'}
          >
            Get Rewards
          </TextCustom>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={'1.2vmax'}
            fontWeight={700}
            fontFamily={'LatoThin'}
            lineHeight={1.5}
            textAlign={'left'}
            style={{ marginTop: '10px' }}
          >
            Dropper is the community-first NFT launch platform with rewards for creating, minting, and buying NFTs.
          </TextCustom>
          <BoxCardWithoutBorder
            boxWidth={'100%'}
            justifyContent={'flex-start'}
            padding={'0px'}
            margin={'0px'}
            flexDirection={isMobile ? 'column' : 'row'}
          >
            <MainButton
              width={isMobile ? '100%' : '45%'}
              borderRadius={'24px'}
              padding={'24px 10px'}
              backgroundColor={'var(--secondary)'}
              margin={'20px 0'}
              onClick={() => (window.location.href = '/upcoming')}
            >
              <TextCustom
                fontSize={isMobile ? '1.5rem' : '1.2rem'}
                fontWeight={600}
                fontFamily={'RubikBold'}
                lineHeight={1.1}
                textAlign={'center'}
                margin={'1% 0 2% 0'}
              >
                Drops &nbsp;
              </TextCustom>
              <ImageContainer src={ARROW_RIGHT_ROUNDED} width={'36px'} />
            </MainButton>
            <TransparentBtn
              width={isMobile ? '100%' : '45%'}
              height={'50px'}
              borderRadius={'24px'}
              padding={'0'}
              margin={'12px'}
              onClick={() => (window.location.href = '/howtobuy')}
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
                How To Buy
              </TextCustom>
            </TransparentBtn>
          </BoxCardWithoutBorder>
        </BoxCardWithoutBorder>
        {!isMobile && (
          <BoxCardWithoutBorder boxWidth={'50%'}>
            <ImageContainer src={BANNER_MAIN} width={'100%'} style={{ marginTop: '-15%' }} />
          </BoxCardWithoutBorder>
        )}
      </ContainerRow>
    </ComponentWrapper>
  )
}
