import React, { useLayoutEffect, useRef } from 'react'
import { isMobile } from 'react-device-detect'
import { useParams } from 'react-router-dom'
import BORDER_EFFECT_IMG from '../../assets/images/text-border-bottom-effect.svg'
import ExpanableCard from '../../components/Cards/expanableCard'
import { ComponentWrapper, ContainerColumn, ContainerRow, SubText, TextCustom } from '../../styles/globalStyles'

const faqContent = [
  {
    title: 'What is an NFT?',
    content:
      "A Non Fungible Token is a unique token secured by the blockchain. It is a 'proof of authenticity' that allows its holder to prove ownership over a specific piece of content.",
  },
  {
    title: 'What is Dropper built on?',
    content:
      'Dropper uses Polygon, an Ethereum side chain, to facilitate and verify all the transactions of the community.',
  },
  {
    title: 'What are the different moment rarities?',
    content:
      'Collections feature Common, Uncommon, Rare, Epic, and Mythic moments. The probability of each rarity being opened is: Common: 21/40, Uncommon: 7/20, Rare: 1/10, Epic: 6/25, Mythic: 1/100 Or 52.5%, 35%, 10%, 2.4%, .1%.',
  },
  {
    title: 'What do I get in a pack?',
    content:
      'Each pack has officially licensed NFTs from the featured creator. Collections offer different pack types, basic, plus, and premium. The basic pack has 3 moments with a guarantee of 1 uncommon or better. The plus pack has 5 moments with a guarantee of 1 rare or better. The premium pack offers 7 moments with 1 epic or better.',
  },
  {
    title: 'How can I buy or sell my NFTs?',
    content:
      'You can find your moments on <a href="https://opensea.io/account" target="_blank" style="color: #FFF">Opensea</a> here . Here you can buy, sell, and auction off your moments.',
  },
  {
    title: 'How many NFTs are there?      ',
    content:
      "Dropper uses a 'unlimited mint, limited time' minting model. This allows users to take their time to mint whenever they want within the minting period. During that time, any number of NFTs can be minted. However, after 2 weeks have passed, no more packs will be minted. After that time, existing packs can still be opened and traded. Each moment rarity has different odds of being opened that will determine the supply with the exception of Mythic moments. Mythic moments are unique, 1/1 moments. Only one will ever exist.",
  },
]

export const FAQBox: React.FC = () => {
  const faqRef = useRef<HTMLDivElement>(null)
  const { id } = useParams<{ id?: string }>()

  useLayoutEffect(() => {
    if (id === 'faq' && faqRef.current !== null) {
      faqRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [id])

  return (
    <ComponentWrapper ref={faqRef} padding={'24px'}>
      <ContainerColumn>
        <TextCustom
          fontSize={isMobile ? '2rem' : '3.5rem'}
          fontWeight={600}
          fontFamily={'RubikBold'}
          lineHeight={1.1}
          textAlign={'center'}
          margin={'5% 0 2% 0'}
        >
          Frequently Ask&nbsp;
          <SubText
            color={'var(--secondary)'}
            fontSize={isMobile ? '2rem' : '3.5rem'}
            fontWeight={600}
            fontFamily={'RubikBold'}
            textAlign={'center'}
            borderImg={BORDER_EFFECT_IMG}
          >
            Questions
          </SubText>
        </TextCustom>
        <ContainerRow alignItems={'flex-start'}>
          <ContainerColumn width={'50%'} justifyContent={'flex-start'}>
            {faqContent.map((item, index) => {
              return (
                index % 2 == 0 && (
                  <ExpanableCard key={index} boxWidth={'100%'} title={item.title} content={item.content} />
                )
              )
            })}
          </ContainerColumn>
          <ContainerColumn width={'50%'} justifyContent={'flex-start'}>
            {faqContent.map((item, index) => {
              return (
                index % 2 == 1 && (
                  <ExpanableCard key={index} boxWidth={'100%'} title={item.title} content={item.content} />
                )
              )
            })}
          </ContainerColumn>
        </ContainerRow>
      </ContainerColumn>
    </ComponentWrapper>
  )
}
