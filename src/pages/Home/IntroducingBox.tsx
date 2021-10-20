import React from 'react'
import { TransparentBtn } from '../../components/Buttons/MainButton'
import OnlineImages from '../../components/Icons/onlineImages'
import { ComponentWrapper, BigBox, SpacerMedium, TextCustom, TextMain, TextSubTitle } from '../../styles/globalStyles'
import { isMobile } from 'react-device-detect'

export const IntroducingBox: React.FC = () => {
  return (
    <ComponentWrapper margin={'50px 0 0'} padding={'24px'}>
      <BigBox>
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '2.5rem' : '3.5rem'}
          fontWeight={300}
          lineHeight={1.2}
        >
          Fans Love Live Content.
        </TextCustom>
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '2.5rem' : '3.5rem'}
          fontWeight={300}
          lineHeight={1.2}
        >
          Now They Can Collect It.
        </TextCustom>
        <TextMain>Dropper Turns the Most Epic Moments of Live Content into Collectibles for Fans</TextMain>
        <SpacerMedium />
        <TextSubTitle>Introducing</TextSubTitle>
        <OnlineImages
          url={'https://tournament-platform.s3.ca-central-1.amazonaws.com/MicrosoftTeams-image+(167).png'}
          imgWidth={'70%'}
        />
        <SpacerMedium />
        <TransparentBtn
          borderRadius={'24px'}
          padding={'24px 24px'}
          margin={'12px'}
          onClick={() => (window.location.href = '/clix')}
        >
          Buy My First Pack
        </TransparentBtn>
      </BigBox>
    </ComponentWrapper>
  )
}
