import React, { useRef, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  ComponentWrapper,
  TextCustom,
  ImageContainer,
  ContainerRow,
  ContainerColumn,
  SubText,
  ColorDot,
} from '../../styles/globalStyles'
import { isMobile } from 'react-device-detect'
import ELLIPSE_BACKGROUND from '../../assets/images/ellipse-background.svg'
import BORDER_EFFECT_IMG from '../../assets/images/text-border-bottom-effect.svg'
import RoundedTextBox from '../../components/RoundedTextBox'
import styled from 'styled-components'

// eslint-disable-next-line prettier/prettier
const RoadmapContentItem = styled(ContainerColumn) <{
  border?: string
  borderColor?: string
}>`
  border: ${({ border }) => (border ? border : '1px solid var(--purple)')};
  border-color: ${({ borderColor }) => (borderColor ? borderColor : 'var(--purple)')};
  border-bottom: none;
  padding: 1% 1%;
`
interface IRoadmapContentBox {
  width?: string
  height?: string
  border?: string
  borderColor?: string
  mainTitle?: string
  textColor?: string
  margin?: string
  contentList?: Array<string>
}

export const RoadmapContentBox: React.FC<IRoadmapContentBox> = ({
  border,
  borderColor,
  width,
  height,
  mainTitle,
  contentList,
  textColor,
}) => {
  return (
    <RoadmapContentItem border={border} width={width} height={height} borderColor={borderColor}>
      <TextCustom
        color={textColor}
        fontSize={isMobile ? '1rem' : '1.5rem'}
        fontWeight={600}
        fontFamily={'RubikBold'}
        lineHeight={1.1}
        textAlign={'center'}
        margin={'10% 0 8% 0'}
      >
        {mainTitle}
      </TextCustom>
      <ContainerColumn>
        {contentList?.map((item, index) => {
          return (
            <ContainerRow
              key={index}
              justifyContent={'flex-start'}
              alignItems={'flex-start'}
              padding={'0 5% 0 5%'}
              margin={'1% 0 1% 0'}
            >
              <ColorDot backColor={textColor} />
              <TextCustom
                fontSize={isMobile ? '0.8rem' : '1rem'}
                fontWeight={300}
                fontFamily={'Rubik'}
                lineHeight={1.1}
                textAlign={'left'}
                margin={'1% 1% 1% 0'}
              >
                {item}
              </TextCustom>
            </ContainerRow>
          )
        })}
      </ContainerColumn>
    </RoadmapContentItem>
  )
}

export const RoadmapBox: React.FC = () => {
  const roadmapRef = useRef<HTMLDivElement>(null)
  const { id } = useParams<{ id?: string }>()

  useLayoutEffect(() => {
    if (id === 'roadmap' && roadmapRef.current !== null) {
      roadmapRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [id])

  return (
    <ContainerRow
      ref={roadmapRef}
      width={'100%'}
      backgroundColor={'var(--dark-navy)'}
      padding={'0'}
      margin={'0'}
      justifyContent={'center'}
    >
      <ComponentWrapper margin={'50px 0 0'} padding={'24px'}>
        <ContainerColumn>
          <TextCustom
            fontSize={isMobile ? '2rem' : '3.5rem'}
            fontWeight={600}
            fontFamily={'RubikBold'}
            lineHeight={1.1}
            textAlign={'center'}
            margin={'1% 0 2% 0'}
          >
            Dropper&nbsp;
            <SubText
              color={'var(--secondary)'}
              fontSize={isMobile ? '2rem' : '3.5rem'}
              fontWeight={600}
              fontFamily={'RubikBold'}
              textAlign={'center'}
              borderImg={BORDER_EFFECT_IMG}
            >
              Roadmap
            </SubText>
          </TextCustom>
          <ContainerRow justifyContent={'space-around'}>
            <ImageContainer src={ELLIPSE_BACKGROUND} width={'100%'} borderRadius={'0'} />
            <ContainerRow justifyContent={'space-around'} backgroundColor={'transparent'} position={'absolute'}>
              <RoundedTextBox
                width={'157px'}
                height={'160px'}
                border={'20px solid var(--secondary)'}
                text={'Q4'}
                textColor={'var(--secondary)'}
                margin={'0 0 0 30px'}
              />
              <RoundedTextBox
                width={'157px'}
                height={'160px'}
                border={'20px solid var(--navy-blue)'}
                text={'Q1'}
                textColor={'var(--navy-blue)'}
              />
              <RoundedTextBox
                width={'157px'}
                height={'160px'}
                border={'20px solid var(--yellow)'}
                text={'Q2'}
                textColor={'var(--yellow)'}
              />
              <RoundedTextBox
                width={'157px'}
                height={'160px'}
                border={'20px solid var(--secondary)'}
                text={'Q4'}
                textColor={'var(--secondary)'}
              />
              <RoundedTextBox
                width={'157px'}
                height={'160px'}
                border={'20px solid var(--light-blue)'}
                text={'Q1'}
                textColor={'var(--light-blue)'}
                margin={'0 30px 0 0'}
              />
            </ContainerRow>
          </ContainerRow>
          <ContainerRow justifyContent={'center'} margin={'5% 0 2% 0'} gap={'0'}>
            <RoadmapContentBox
              width={'20%'}
              mainTitle={'Q4 2021'}
              contentList={['$DROPP Private Sale', 'First Celebrity Pack Dropp']}
              textColor={'var(--secondary)'}
              margin={'0'}
            />
            <RoadmapContentBox
              width={'20%'}
              mainTitle={'Q1 2022'}
              contentList={['$DROPP Presale', 'Scale into Traditional Digital Media']}
              textColor={'var(--navy-blue)'}
              margin={'0'}
            />
            <RoadmapContentBox
              width={'20%'}
              mainTitle={'Q2 2022'}
              contentList={['$DROPP Public Sale', 'Staking, Yield Farming and Uniswap Listing']}
              textColor={'var(--yellow)'}
              margin={'0'}
            />
            <RoadmapContentBox
              width={'20%'}
              mainTitle={'Q3 2022'}
              contentList={['V1, Marketplace Released', 'First Airdrop to Token Holders']}
              textColor={'var(--secondary)'}
              margin={'0'}
            />
            <RoadmapContentBox
              width={'20%'}
              mainTitle={'Q4 2022'}
              contentList={['Social Network Activity Feed', 'First Celebrity Pack Drop']}
              textColor={'var(--light-blue)'}
              margin={'0'}
            />
          </ContainerRow>
        </ContainerColumn>
      </ComponentWrapper>
    </ContainerRow>
  )
}
