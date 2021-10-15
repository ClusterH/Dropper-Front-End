import styled, { createGlobalStyle } from 'styled-components'
import { TFlexAlignItems, TFlexDirections, TFlexJustifyContents } from '../types'

export const GlobalStyles = createGlobalStyle`
  html {
    --primary: #000000;
    --primary-text: #ffffff;
    --secondary: #ff0069;
    --secondary-opacity: #ff006970;
    --secondary-text: #1a1a1a;
    --accent: #505050;
    --accent-text: #ffffff;
  }
`

// Used for wrapping a page component
export const PageWrapper = styled.div<{ image?: string }>`
  position: relative;
  background-color: var(--primary);
  background-image: ${({ image }) => (image ? `url(${image})` : 'none')};
  background-size: cover;
  background-position: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  min-height: calc(100vh - 72px);
  display: flex;
  flex-direction: column;
  align-items: center;
`

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`
export const ComponentWrapper = styled.div<{ padding?: string; margin?: string }>`
  position: relative;
  width: 100%;
  max-width: 1140px;
  padding: ${({ padding }) => (padding ? padding : '0')};
  margin: ${({ margin }) => (margin ? margin : '0')};
`
// Used for providing a wrapper around a component
export const ContainerRow = styled.div<{
  rowWidth?: string
  justifyContent?: TFlexJustifyContents
  alignItems?: TFlexAlignItems
  backgroundColor?: string
  image?: string
  padding?: string
  margin?: string
  width?: string
}>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'space-between')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'none')};
  width: ${({ rowWidth }) => (rowWidth ? rowWidth : '100%')};
  background-image: ${({ image }) => (image ? `url(${image})` : 'none')};
  background-size: cover;
  background-position: center;
  padding: ${({ padding }) => (padding ? padding : '0')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  width: ${({ width }) => (width ? width : '100%')};
  gap: 12px;
`
export const ContainerColumn = styled.div<{
  justifyContent?: TFlexJustifyContents
  alignItems?: TFlexAlignItems
  backgroundColor?: string
  image?: string
  padding?: string
  margin?: string
  width?: string
  height?: string
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'center')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'none')};
  background-image: ${({ image }) => (image ? `url(${image})` : 'none')};
  background-size: cover;
  background-position: center;
  padding: ${({ padding }) => (padding ? padding : '0')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '50vh')};
`
export const BigBox = styled.div<{ padding?: string; width?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ width }) => (width ? width : '100%')};
  height: auto;
  padding: ${({ padding }) => (padding ? padding : '24px')};
  border-style: solid;
  border-radius: 10px;
  border-color: #ff0069;
  background: black;
  box-shadow: 3px 3px 12px 2px #ff0069;
`
export const BoxCard = styled.div<{ boxWidth?: string; boxHeight?: string }>`
  width: ${({ boxWidth }) => (boxWidth ? boxWidth : 'fit-content')};
  height: ${({ boxHeight }) => (boxHeight ? boxHeight : 'auto')};
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; */
  text-align: center;
  padding: 10px;
  margin: 12px;
  border-radius: 10px;
  border: 2px solid var(--secondary);
`
export const TextTitle = styled.span`
  color: var(--primary-text);
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.6;
  display: inline-block;
`
export const TextSubTitle = styled.span`
  color: var(--primary-text);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.6;
  margin: 1rem 0;
`
export const TextMain = styled.span`
  color: var(--primary-text);
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.6;
  margin: 1rem 0;
  text-align: center;
`
export const TextDescription = styled.span`
  color: var(--primary-text);
  font-size: 14px;
  line-height: 1.6;
`
export const TextCustom = styled.p<{
  color?: string
  fontSize?: string
  fontWeight?: number
  lineHeight?: number
  textAlign?: string
}>`
  color: ${({ color }) => (color ? color : 'var(--primary-text)')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.25rem')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 600)};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : 1.6)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
`
export const Divider = styled.div<{ width?: string; height?: string; margin?: string }>`
  width: ${({ width }) => (width ? width : '50%')};
  height: ${({ height }) => (height ? height : '4px')};
  background-color: var(--secondary);
  margin: ${({ margin }) => (margin ? margin : '2rem 0')};
`
