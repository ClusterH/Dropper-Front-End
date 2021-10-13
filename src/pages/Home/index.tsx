import React from 'react'
import { BigBox } from '../../components/Boxes'
import { MainButton, TransparentBtn } from '../../components/Buttons/MainButton'
import OnlineIcons from '../../components/Icons/onlineIcons'
import { PageWrapper, SpacerMedium, TextCustom, TextMain, TextSubTitle } from '../../styles/globalStyles'

const Home: React.FC = () => {
  return (
    <PageWrapper>
      <BigBox>
        <TextCustom color={'var(--primary-text)'} fontSize={'3.5rem'} fontWeight={'300'} lineHeight={1.2}>
          Fans Love Live Content.
        </TextCustom>
        <TextCustom color={'var(--primary-text)'} fontSize={'3.5rem'} fontWeight={'300'} lineHeight={1.2}>
          Now They Can Collect It.
        </TextCustom>
        <TextMain>Dropper Turns the Most Epic Moments of Live Content into Collectibles for Fans</TextMain>
        <SpacerMedium />
        <TextSubTitle>Introducing</TextSubTitle>
        <OnlineIcons
          url={'https://tournament-platform.s3.ca-central-1.amazonaws.com/MicrosoftTeams-image+(167).png'}
          imgWidth={'350px'}
        />
        <SpacerMedium />
        <TransparentBtn width={'fit-content'} borderRadius={'24px'} padding={'24px 24px'}>
          Buy My First Pack
        </TransparentBtn>
      </BigBox>
    </PageWrapper>
  )
}

export default Home
