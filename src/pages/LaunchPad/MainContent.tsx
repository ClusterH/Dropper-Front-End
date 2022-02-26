import React from 'react'
import { isMobile } from 'react-device-detect'
import DROP_EXPLAIN_ITEM from '../../assets/images/dropper-explain-item.svg'
import BORDER_EFFECT_IMG from '../../assets/images/text-border-bottom-effect.svg'
import {
  BoxCard,
  ComponentWrapper,
  ContainerColumn,
  ImageContainer,
  ResponsiveContainer,
  SubText,
  TextCustom,
} from '../../styles/globalStyles'

const LaunchIntroduceList = [
  {
    id: 1,
    description: 'Enabling Creators To Launch NFT Collections',
    subDescription: 'Pre-audited smart contracts enable the next generation of web creators easy deployment.',
  },
  {
    id: 2,
    description: 'Supporting Launches Of Collections On Multiple Chains',
    subDescription:
      'Launch your NFT collection with a pre-audited smart contract on leading chains like Ethereum, Polygon, Solana and Hedera.',
  },
  {
    id: 3,
    description: 'You Can Launch Your NFT Collection On Dropper Without Code',
    subDescription: 'Deploy your NFT project without having a technical lead. The Dropper team can help.',
  },
  {
    id: 4,
    description: 'Enabling Minters To Buy Traditionally Or With A Credit Card',
    subDescription:
      'Is your community not crypto centric? We enable purchase of NFTs via credit. This means your community can simply mint via a credit card.',
  },
  {
    id: 5,
    description: 'Enabling Minters To Easily Create An NFT Wallet',
    subDescription:
      'If your community is new to NFTs, wallet creation can be a pain. Dropper enables wallet creation via social sign ups/on with traditional platforms like Twitter, Facebook, and Google.',
  },
]

const Item: React.FC<{ url: string; description: string; subDescription: string }> = ({ url, description, subDescription }) => {
  return (
    <BoxCard
      boxWidth={'100%'}
      border={'2px solid var(--light-navy-blue)'}
      justifyContent={'flex-start'}
      borderRadius={'5px'}
      borderHover={'2px solid var(--secondary-opacity)'}
      backgroundHover={'var(--dark-secondary)'}
      padding={'4%'}
    >
      <ImageContainer src={url} width={'7.2vmax'} borderRadius={'0'} objectFit={'contain'} margin={'0 40px 0 20px'} />
      <ContainerColumn width={isMobile ? '100%' : '80%'} alignItems={'flex-start'} gap={'20px'}>
        <TextCustom
          fontSize={isMobile ? '2.4vmax' : '2.2vmax'}
          fontWeight={600}
          fontFamily={'RubikBold'}
          lineHeight={1.1}
          textAlign={'left'}
        >
          {description}
        </TextCustom>
        <TextCustom fontSize={isMobile ? '1.6vmax' : '1.2vmax'} fontWeight={300} lineHeight={1.3} textAlign={'left'}>
          {subDescription}
        </TextCustom>
      </ContainerColumn>
    </BoxCard>
  )
}

export const LaunchIntoduceContainer: React.FC = () => {
  return (
    <ComponentWrapper padding={'24px'}>
      <ContainerColumn>
        <ResponsiveContainer>
          {LaunchIntroduceList.map((item) => {
            return <Item key={item.id} url={DROP_EXPLAIN_ITEM} description={item.description} subDescription={item.subDescription} />
          })}
        </ResponsiveContainer>
        <TextCustom
          fontSize={isMobile ? '2.6vmax' : '2.4vmax'}
          fontWeight={400}
          fontFamily={'Lato'}
          lineHeight={1.1}
          textAlign={'center'}
          margin={'5% 0 2% 0'}
        >
          The&nbsp;
          <SubText
            color={'var(--secondary)'}
            fontSize={isMobile ? '2.6vmax' : '2.4vmax'}
            fontWeight={400}
            fontFamily={'Lato'}
            textAlign={'center'}
            borderImg={BORDER_EFFECT_IMG}
          >
            Dropper
          </SubText>
          &nbsp;MarketPlace
        </TextCustom>
        <TextCustom
          fontSize={isMobile ? '2.6vmax' : '2.4vmax'}
          fontWeight={400}
          fontFamily={'Lato'}
          lineHeight={1.1}
          textAlign={'center'}
          margin={'0 0 32px'}
        >
          Coming Soon
        </TextCustom>
      </ContainerColumn>
    </ComponentWrapper>
  )
}
