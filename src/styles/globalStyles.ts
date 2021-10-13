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
  background-color: var(--primary);
  background-image: ${({ image }) => (image ? `url(${image})` : 'none')};
  background-size: cover;
  background-position: center;
  width: 100%;
  margin: 0 auto;
  padding: 50px 24px;
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

// Used for providing a wrapper around a component
export const ContainerRow = styled.div<{
  rowWidth?: string
  justifyContent?: TFlexJustifyContents
  alignItems?: TFlexAlignItems
  backgroundColor?: string
  image?: string
}>`
  display: flex;
  flex-direction: 'row';
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'space-between')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'none')};
  width: ${({ rowWidth }) => (rowWidth ? rowWidth : '100%')};
  background-image: ${({ image }) => (image ? `url(${image})` : 'none')};
  background-size: cover;
  background-position: center;
`
export const ContainerColumn = styled.div<{
  justifyContent?: TFlexJustifyContents
  alignItems?: TFlexAlignItems
  backgroundColor?: string
  image?: string
}>`
  display: flex;
  flex-direction: 'column';
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'center')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'none')};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : 'none')};
  background-size: cover;
  background-position: center;
`
export const BoxCard = styled.div<{ boxWidth?: string; boxHeight?: string }>`
  width: ${({ boxWidth }) => (boxWidth ? boxWidth : 'fit-content')};
  height: ${({ boxHeight }) => (boxHeight ? boxHeight : '50vh')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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
`
export const TextDescription = styled.span`
  color: var(--primary-text);
  font-size: 14px;
  line-height: 1.6;
`
export const TextCustom = styled.p<{ color: string; fontSize?: string; fontWeight?: string; lineHeight?: number }>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '18px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 500)};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : 1.6)};
`

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`
