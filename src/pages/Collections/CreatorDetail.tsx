import React from 'react'
import {
  AvatarContainer,
  ComponentWrapper,
  ContainerRow,
  Divider,
  TextMain,
  TextSubTitle,
  TextTitle,
} from '../../styles/globalStyles'

export const CreatorDetail: React.FC = () => {
  return (
    <ComponentWrapper margin={'120px 0 0'} padding={'0 48px'}>
      <TextSubTitle>Creator</TextSubTitle>
      <Divider width={'100%'} height={'1px'} />
      <ContainerRow>
        <AvatarContainer
          width={'120px'}
          src={'https://dropper.s3.ca-central-1.amazonaws.com/clix-headshot.png'}
          onClick={() => {
            window.open('https://www.joindropper.com/', '_blank')
          }}
        />
        <ContainerRow justifyContent={'center'}>
          <TextTitle>{'Clix'}</TextTitle>
        </ContainerRow>
      </ContainerRow>
      <ContainerRow margin={'24px 0 0'}>
        <TextMain>
          This is the official NFT Ultimate Clix Collection by myself, Cody “Clix” Conrad! I have been working on
          something special for my community that’s been ride or die from day one. From the Fortnite World Cup, to
          winning the BFC and Twitch rivals, going 100-0 in boxfights, and even copping my dream car, you all have made
          this experience so amazing, and now we can share these moments together with this collection. I love making
          people happy and I hope that you’ll join me in this journey too!
        </TextMain>
      </ContainerRow>
    </ComponentWrapper>
  )
}
