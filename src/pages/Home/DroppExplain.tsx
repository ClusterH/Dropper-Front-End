import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import BANNER_THIRD from '../../assets/images/banner-third.svg'
import BORDER_EFFECT_IMG from '../../assets/images/text-border-bottom-effect.svg'
import { TimelineContainer } from '../../components/TimelineContainer'
import { ComponentWrapper, ContainerColumn, device, ImageContainer, SpacerLarge, SubText, TextCustom } from '../../styles/globalStyles'

const ResponsiveWrapper = styled(ContainerColumn)`
  align-items: center;
  @media ${device.laptop} {
    flex-direction: row;
    align-items: flex-start;
  }
`
const cardItems = [
  {
    cardTitle: 'A Multi-Chain NFT Launchpad',
    cardSecondTitle: 'With a Multi-Chain Marketplace Coming Soon',
    cardContent: 'Launch your NFT collection with a pre-audited smart contract on leading chains like Ethereum, Polygon, Solana and Hedera',
  },
  {
    cardTitle: 'Introducing $DROPP',
    cardSecondTitle: 'The token powering the Dropper platform',
    cardContent: '100% of transaction fees from Mint, Royalties, and Trade are distributed to Stakers of the DROPP token.',
  },
  {
    cardTitle: 'Mint & Trade to Earn.',
    cardContent: 'Earn DROPP token every time you mint or trade an NFT on the Dropper platform.',
  },
  {
    cardTitle: 'Incentivizing Creators',
    cardSecondTitle: 'To Launch with an incentivized community',
    cardContent: 'Dropper enables creators to launch with pre-audited smart contracts within an incentivized community. ',
  },
]

export const DroppExplain: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState(1)
  const cardSelect = (index: number) => {
    setSelectedCard(index)
  }

  return (
    <ComponentWrapper margin={'0 0 50px'}>
      <ResponsiveWrapper justifyContent={'center'}>
        <TextCustom
          fontSize={isMobile ? '2rem' : '3.5rem'}
          fontWeight={600}
          fontFamily={'RubikBold'}
          lineHeight={1.1}
          textAlign={'center'}
          margin={'5% 0 2% 0'}
        >
          What is&nbsp;
          <SubText
            color={'var(--secondary)'}
            fontSize={isMobile ? '2rem' : '3.5rem'}
            fontWeight={600}
            fontFamily={'RubikBold'}
            textAlign={'center'}
            borderImg={BORDER_EFFECT_IMG}
          >
            Dropper?
          </SubText>
        </TextCustom>
      </ResponsiveWrapper>
      <SpacerLarge />
      <ResponsiveWrapper>
        <ImageContainer src={BANNER_THIRD} width={isMobile ? '90%' : '35%'} objectFit={'cover'} margin={'0 20px 0 20px'} />
        <ContainerColumn width={isMobile ? '90%' : '62%'}>
          {cardItems.map((item, index) => {
            return (
              <TimelineContainer
                key={`card_${index}`}
                cardTitle={item.cardTitle}
                cardSecondTitle={item.cardSecondTitle}
                cardContent={item.cardContent}
                cardSelected={selectedCard >= index}
                onMouseMove={() => cardSelect(index)}
                onScroll={() => cardSelect(index)}
              />
            )
          })}
        </ContainerColumn>
      </ResponsiveWrapper>
    </ComponentWrapper>
  )
}
