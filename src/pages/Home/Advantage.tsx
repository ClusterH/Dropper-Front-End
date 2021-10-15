import React from 'react'
import { ComponentWrapper, ContainerColumn, ContainerRow, SpacerLarge, TextCustom } from '../../styles/globalStyles'

export const Advantage: React.FC = () => {
  return (
    <ComponentWrapper margin={'0 0 50px'}>
      <ContainerRow justifyContent={'center'}>
        <TextCustom color={'var(--primary-text)'} fontSize={'3.5rem'} fontWeight={700}>
          Connecting Fans and&nbsp;
        </TextCustom>
        <TextCustom color={'var(--secondary)'} fontSize={'3.5rem'} fontWeight={700}>
          Creators
        </TextCustom>
      </ContainerRow>
      <SpacerLarge />
      <ContainerRow alignItems={'flex-start'}>
        <ContainerColumn width={'48%'}>
          <TextCustom textAlign={'start'} fontWeight={300}>
            Dropper lets creators memorialize their best moments. Anything fans want can be made into an NFT at the
            creator&apos;s discretion.
          </TextCustom>
          <SpacerLarge />
          <TextCustom textAlign={'start'} fontWeight={300}>
            Dropper is the premium NFT minting and collecting marketplace. Some of the biggest creators in gaming and
            crypto live here, building the dropper name, and your NFTS every day.
          </TextCustom>
        </ContainerColumn>
        <ContainerColumn width={'48%'}>
          <TextCustom textAlign={'start'} fontWeight={300}>
            It has never been easier to feel like a part of the community. Dropper is constantly working to bring on the
            biggest names and the best content.
          </TextCustom>
          <SpacerLarge />
          <TextCustom textAlign={'start'} fontWeight={300}>
            Each pack is unique to the creator, and owning an NFT is a fun and unique way to show your status amongst
            your friends.
          </TextCustom>
        </ContainerColumn>
      </ContainerRow>
    </ComponentWrapper>
  )
}
