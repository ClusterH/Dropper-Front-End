import React, { useLayoutEffect, useRef } from 'react'
import { isMobile } from 'react-device-detect'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import {
  ColorDot,
  ComponentWrapper,
  ContainerColumn,
  ContainerRow,
  ImageContainer,
  SubText,
  TextCustom,
} from '../../styles/globalStyles'
import ELLIPSE_BACKGROUND_WITH_NUMBER from '../../assets/images/ellipse-background-with-number.svg'
import ELLIPSE_BACKGROUND from '../../assets/images/ellipse-background.svg'
import BORDER_EFFECT_IMG from '../../assets/images/text-border-bottom-effect.svg'
import RoundedTextBox from '../../components/RoundedTextBox'

const RoadmapContentItem = styled(ContainerColumn)<{
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
  margin,
}) => {
  return (
    <RoadmapContentItem border={border} width={width} height={height} borderColor={borderColor} margin={margin}>
      <TextCustom
        color={textColor}
        fontSize={isMobile ? '1rem' : '1.5rem'}
        fontWeight={600}
        fontFamily={'RubikBold'}
        lineHeight={1.1}
        textAlign={'center'}
        margin={isMobile ? '5% 0' : '10% 0 8% 0'}
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
    if ((!!!id || id === 'roadmap') && roadmapRef.current !== null) {
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
      <ComponentWrapper margin={isMobile ? '10px 0 0' : '50px 0 0'} padding={'24px'}>
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
          {isMobile ? (
            <ContainerRow justifyContent={'space-around'} margin={'20px 0 0 0'}>
              <ImageContainer src={ELLIPSE_BACKGROUND_WITH_NUMBER} width={'100%'} borderRadius={'0'} />
            </ContainerRow>
          ) : (
            <ContainerRow justifyContent={'space-around'} margin={'60px'}>
              <ImageContainer src={ELLIPSE_BACKGROUND} width={'100%'} borderRadius={'0'} position={'absolute'} />
              <ContainerRow justifyContent={'space-around'} backgroundColor={'transparent'}>
                <RoundedTextBox
                  width={'157px'}
                  height={'157px'}
                  border={'20px solid var(--secondary)'}
                  text={'Q4'}
                  textColor={'var(--secondary)'}
                  margin={'0 0 0 30px'}
                />
                <RoundedTextBox
                  width={'157px'}
                  height={'157px'}
                  border={'20px solid var(--navy-blue)'}
                  text={'Q1'}
                  textColor={'var(--navy-blue)'}
                />
                <RoundedTextBox
                  width={'157px'}
                  height={'157px'}
                  border={'20px solid var(--yellow)'}
                  text={'Q2'}
                  textColor={'var(--yellow)'}
                />
                <RoundedTextBox
                  width={'157px'}
                  height={'157px'}
                  border={'20px solid var(--secondary)'}
                  text={'Q4'}
                  textColor={'var(--secondary)'}
                />
              </ContainerRow>
            </ContainerRow>
          )}
          <ContainerRow
            justifyContent={'center'}
            alignItems={'stretch'}
            margin={'5% 0 2% 0'}
            gap={'0'}
            flexWrap={isMobile ? 'wrap' : 'normal'}
          >
            <RoadmapContentBox
              width={isMobile ? '100%' : '25%'}
              mainTitle={'Q4 2021'}
              contentList={['$DROPP Private Sale', 'First Celebrity Pack Dropp']}
              textColor={'var(--secondary)'}
              margin={isMobile ? '5% 0' : '0'}
            />
            <RoadmapContentBox
              width={isMobile ? '100%' : '25%'}
              mainTitle={'Q1 2022'}
              contentList={['$DROPP Presale', 'Scale into Traditional Digital Media']}
              textColor={'var(--navy-blue)'}
              margin={isMobile ? '5% 0' : '0'}
            />
            <RoadmapContentBox
              width={isMobile ? '100%' : '25%'}
              mainTitle={'Q2 2022'}
              contentList={['$DROPP Public Sale', 'Staking, Yield Farming and Uniswap Listing']}
              textColor={'var(--yellow)'}
              margin={isMobile ? '5% 0' : '0'}
            />
            <RoadmapContentBox
              width={isMobile ? '100%' : '25%'}
              mainTitle={'Q3 2022'}
              contentList={['Initial Version 1 Complete Marketplace Release', 'First Airdrop to Token Holders']}
              textColor={'var(--secondary)'}
              margin={isMobile ? '5% 0' : '0'}
            />
          </ContainerRow>
        </ContainerColumn>
      </ComponentWrapper>
    </ContainerRow>
  )
}
