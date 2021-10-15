import React from 'react'
import {
  ComponentWrapper,
  BigBox,
  ContainerColumn,
  ContainerRow,
  Divider,
  TextDescription,
  TextMain,
  TextSubTitle,
  AvatarContainer,
  TextTitle,
} from '../../styles/globalStyles'

export const CreatorDetail: React.FC = () => {
  return (
    <ComponentWrapper margin={'120px 0 0'} padding={'0 48px'}>
      <TextSubTitle>Creator</TextSubTitle>
      <Divider width={'100%'} height={'1px'} />
      <ContainerRow>
        <AvatarContainer width={'120px'} src={'https://dropper.s3.ca-central-1.amazonaws.com/clix-headshot.png'} />
        <ContainerRow justifyContent={'center'}>
          <TextTitle>{'Clix'}</TextTitle>
        </ContainerRow>
      </ContainerRow>
      <ContainerRow margin={'24px 0 0'}>
        <TextMain>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </TextMain>
      </ContainerRow>
    </ComponentWrapper>
  )
}
