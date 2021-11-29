import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { TextCustom } from '../../styles/globalStyles'

const LinkContainer = styled(TextCustom)`
  cursor: pointer;
  text-decoration: none;
`

const QuickLink: React.FC<{
  link: string
  text?: string
  color?: string
  fontSize?: string
  fontWeight?: number
  fontFamily?: string
  textAlign?: string
  margin?: string
}> = ({ link, text, color, fontSize, fontFamily, fontWeight, textAlign, margin }) => {
  return (
    <NavLink to={link} style={{ textDecoration: 'none' }}>
      <LinkContainer
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontFamily={fontFamily}
        lineHeight={1.2}
        textAlign={textAlign}
        margin={margin}
      >
        {text}
      </LinkContainer>
    </NavLink>
  )
}

export default QuickLink
