import React from 'react'
import styled from 'styled-components'
import { BoxCard, TextCustom } from '../../styles/globalStyles'
import { isMobile } from 'react-device-detect'

interface IRoundedTextBox {
  width?: string
  height?: string
  border?: string
  text?: string
  textColor?: string
  margin?: string
}

const RoundedTextBox: React.FC<IRoundedTextBox> = ({ width, height, border, text, textColor, margin }) => {
  return (
    <BoxCard
      border={border}
      backgroundColor={'var(--primary-text)'}
      borderHover={border}
      shadowColor={textColor}
      borderRadius={'50%'}
      boxWidth={width}
      boxHeight={height}
      margin={margin}
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
    </BoxCard>
  )
}

export default RoundedTextBox
