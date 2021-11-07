import React from 'react'
import { isMobile } from 'react-device-detect'
import {
  BoxCard,
  ComponentWrapper,
  ContainerColumn,
  ResponsiveContainer,
  TextCustom,
  SubText,
  ImageContainer,
} from '../../styles/globalStyles'
import BORDER_EFFECT_IMG from '../../assets/images/text-border-bottom-effect.svg'
import DROP_EXPLAIN_ITEM from '../../assets/images/dropper-explain-item.svg'

const DroppExplainList = [
  {
    id: 1,
    description: 'Web3 Powered Innovation',
    subDescription:
      'Dropper is a digital web3 platform for celebrities to create unique experiences for fans powered by NFTs and Tokenization.',
  },
  {
    id: 2,
    description: 'Where Celebrities Drop NFTs',
    subDescription:
      'Celebrities create NFTs both from historical and freshly generated content. Fans collect these NFTs to get access to web3 powered experiences.',
  },
  {
    id: 3,
    description: 'Unique Access into Digital Worlds',
    subDescription: "These NFTs enable you unique access into celebrities' worlds. No two experiences are the same.",
  },
  {
    id: 4,
    description: 'Access to the Impossible',
    subDescription:
      'It’s not just about collecting content, it’s about getting access. Access to unique experiences that only token holders are able to access.',
  },
]

export const DroppExplainItem: React.FC<{ url: string; description: string; subDescription: string }> = ({
  url,
  description,
  subDescription,
}) => {
  return (
    <BoxCard
      boxWidth={'47%'}
      boxHeight={'150px'}
      border={'5px solid var(--light-navy-blue)'}
      justifyContent={'flex-start'}
      borderRadius={'5px'}
      borderHover={'2px solid var(--secondary-opacity)'}
      backgroundHover={'var(--dark-secondary)'}
    >
      <ImageContainer src={url} width={'75px'} borderRadius={'0'} objectFit={'contain'} margin={'0 20px 0 20px'} />
      <ContainerColumn width={isMobile ? '100%' : '80%'} alignItems={'flex-start'} gap={'20px'}>
        <TextCustom
          fontSize={isMobile ? '1rem' : '1.25rem'}
          fontWeight={600}
          fontFamily={'RubikBold'}
          lineHeight={1.1}
          textAlign={'left'}
        >
          {description}
        </TextCustom>
        <TextCustom fontSize={isMobile ? '0.6rem' : '1rem'} fontWeight={300} lineHeight={1.3} textAlign={'left'}>
          {subDescription}
        </TextCustom>
      </ContainerColumn>
    </BoxCard>
  )
}

export const DroppExplain: React.FC = () => {
  return (
    <ComponentWrapper padding={'24px'}>
      <ContainerColumn>
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
        <ResponsiveContainer>
          {DroppExplainList.map((item) => {
            return (
              <DroppExplainItem
                key={item.id}
                url={DROP_EXPLAIN_ITEM}
                description={item.description}
                subDescription={item.subDescription}
              />
            )
          })}
        </ResponsiveContainer>
      </ContainerColumn>
    </ComponentWrapper>
  )
}
