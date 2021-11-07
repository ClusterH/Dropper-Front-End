import React, { useState } from 'react'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect'

import {
  ComponentWrapper,
  ContainerColumn,
  SpacerLarge,
  TextCustom,
  device,
  SubText,
  ImageContainer,
} from '../../styles/globalStyles'
import BORDER_EFFECT_IMG from '../../assets/images/text-border-bottom-effect.svg'
import BANNER_THIRD from '../../assets/images/banner-third.svg'
import { TimelineContainer } from '../../components/TimelineContainer'

const ResponsiveWrapper = styled(ContainerColumn)`
  align-items: center;
  @media ${device.laptop} {
    flex-direction: row;
    align-items: flex-start;
  }
`
const cardItems = [
  {
    cardTitle: 'Enabling Fans Digital Access to their favorite Celebrities',
    cardSubtitle:
      'Fans love celebrities. Until now the relationship has been one way. Dropper helps celebrities with thriving communities create new methods of engagement powered by web3.',
  },
  {
    cardTitle: 'Re-imagining the Fan to Celebrity Relationship',
    cardSubtitle:
      'Fans want to be invested in their favorite celebrity. Until now, the only way you could do that was by buying merch or subscribing to a channel. Dropper introduces new types of relationship models for fans.',
  },
  {
    cardTitle: 'Turning fans into co-creators',
    cardSubtitle:
      'What if a fan could provide a celebrity input on their next clothing line? What if they could help design it? NFTs enable creators on Dropper a new way to engage their fans.',
  },
  {
    cardTitle: 'Fan Powered Experiences',
    cardSubtitle:
      'Digital access powered by NFTs means new experiences that can create a new type of celebrity to creator dynamic. Digital events in metaverses. Live events with direct access to NFT holders.',
  },
]

export const Advantage: React.FC = () => {
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
          Connecting Fans and&nbsp;
          <SubText
            color={'var(--secondary)'}
            fontSize={isMobile ? '2rem' : '3.5rem'}
            fontWeight={600}
            fontFamily={'RubikBold'}
            textAlign={'center'}
            borderImg={BORDER_EFFECT_IMG}
          >
            Creators
          </SubText>
        </TextCustom>
      </ResponsiveWrapper>
      <SpacerLarge />
      <ResponsiveWrapper>
        <ImageContainer src={BANNER_THIRD} width={'35%'} objectFit={'cover'} margin={'0 20px 0 20px'} />
        <ContainerColumn>
          {cardItems.map((item, index) => {
            return (
              <TimelineContainer
                key={`card_${index}`}
                cardTitle={item.cardTitle}
                cardContent={item.cardSubtitle}
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
