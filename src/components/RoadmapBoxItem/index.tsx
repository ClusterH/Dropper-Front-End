import React from 'react'
import styled from 'styled-components'
import { BoxCard, TextCustom } from '../../styles/globalStyles'
import { isMobile } from 'react-device-detect'

// eslint-disable-next-line prettier/prettier
const ButtomBorderBoxContainer = styled(BoxCard) <{
  width?: string
  height?: string
  border?: string
}>`
  width: ${({ width }) => (width ? width : '200px')};
  height: ${({ height }) => (height ? height : '200px')};
  border-radius: 50%;
  border: ${({ border }) => (border ? border : '20px solid var(--secondary)')};
  border-top-color: transparent;
  border-left-color: transparent;
  transform: rotate(45deg);
  box-sizing: border-box;
`
// eslint-disable-next-line prettier/prettier
const TopBorderBoxContainer = styled(BoxCard) <{
  width?: string
  height?: string
  border?: string
  margin?: string
}>`
  width: ${({ width }) => (width ? width : '200px')};
  height: ${({ height }) => (height ? height : '200px')};
  border-radius: 50%;
  border: ${({ border }) => (border ? border : '20px solid var(--secondary)')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  border-bottom-color: transparent;
  border-right-color: transparent;
  transform: rotate(45deg);
  box-sizing: border-box;
`
const TextBoxCard = styled(BoxCard)`
  transform: rotate(-45deg);
`

interface IRoadmapBoxItem {
  width?: string
  height?: string
  border?: string
  text?: string
  textColor?: string
  margin?: string
  direction?: string
}

const RoadmapBoxItem: React.FC<IRoadmapBoxItem> = ({ width, height, border, text, textColor, margin, direction }) => {
  return (
    <>
      {direction === 'top' && (
        <TopBorderBoxContainer width={width} height={height} border={border} margin={margin}>
          <TextBoxCard
            border={border}
            backgroundColor={'var(--primary-text)'}
            borderHover={border}
            shadowColor={textColor}
            borderRadius={'50%'}
            boxWidth="157px"
            boxHeight={'160px'}
          >
            <TextCustom
              color={textColor}
              fontSize={isMobile ? '2rem' : '3.5rem'}
              fontWeight={600}
              fontFamily={'RubikBold'}
              lineHeight={1.1}
              textAlign={'center'}
              margin={'0'}
            >
              {text}
            </TextCustom>
          </TextBoxCard>
        </TopBorderBoxContainer>
      )}
      {direction === 'bottom' && (
        <ButtomBorderBoxContainer width={width} height={height} border={border} margin={margin}>
          <TextBoxCard
            border={border}
            backgroundColor={'var(--primary-text)'}
            borderHover={border}
            shadowColor={textColor}
            borderRadius={'50%'}
            boxWidth="157px"
            boxHeight={'160px'}
          >
            <TextCustom
              color={textColor}
              fontSize={isMobile ? '2rem' : '3.5rem'}
              fontWeight={600}
              fontFamily={'RubikBold'}
              lineHeight={1.1}
              textAlign={'center'}
              margin={'0'}
            >
              {text}
            </TextCustom>
          </TextBoxCard>
        </ButtomBorderBoxContainer>
      )}
    </>
  )
}

export default RoadmapBoxItem
