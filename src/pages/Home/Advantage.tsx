import React from 'react'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect'

import { ComponentWrapper, ContainerColumn, SpacerLarge, TextCustom, device } from '../../styles/globalStyles'

const ResponsiveWrapper = styled(ContainerColumn)`
  align-items: center;
  @media ${device.laptop} {
    flex-direction: row;
    align-items: flex-start;
  }
`
export const Advantage: React.FC = () => {
  return (
    <ComponentWrapper margin={'0 0 50px'}>
      <ResponsiveWrapper justifyContent={'center'}>
        <TextCustom color={'var(--primary-text)'} fontSize={isMobile ? '2.5rem' : '3.5rem'} fontWeight={700}>
          Connecting Fans and&nbsp;
        </TextCustom>
        <TextCustom color={'var(--secondary)'} fontSize={isMobile ? '2.5rem' : '3.5rem'} fontWeight={700}>
          Creators
        </TextCustom>
      </ResponsiveWrapper>
      <SpacerLarge />
      <ResponsiveWrapper>
        <ContainerColumn width={isMobile ? '80%' : '48%'} height={'auto'} margin={isMobile ? '12px 0' : '0 12px'}>
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
        <ContainerColumn width={isMobile ? '80%' : '48%'} height={'auto'} margin={isMobile ? '12px 0' : '0 12px'}>
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
      </ResponsiveWrapper>
    </ComponentWrapper>
  )
}
