import styled, { createGlobalStyle } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { TFlexAlignItems, TFlexDirections, TFlexJustifyContents } from '../types'

export const GlobalStyles = createGlobalStyle`
  html {
    --primary: #000000;
    --primary-text: #ffffff;
    --primary-opacity: #ffffff50;
    --secondary: #ff0069;
    --light-secondary: #F5599A;
    --dark-secondary: #C2025A;
    --secondary-opacity: #ff006970;
    --secondary-text: #1a1a1a;
    --accent: #505050;
    --accent-text: #ffffff;
    --disabled: #606061;
    --light-primary: #0C092E;
    --light-navy: #2B2566;
    --light-navy-blue: #100A4D;
    --navy-blue: #241C76;
    --navy-blue-opacity: #241C7660;
    --yellow: #F5BA5B;
    --light-blue: #ABCB9C;
    --dark-navy: #070525;
    --purple: #1F1A4F;
    --grey: #181444;
    --grey-opacity: rgba(255, 255, 255, 0.56);
    --dark-grey: #192A3E;
    --light-grey: #F7F7F7;
    scroll-behavior: smooth;
  }
`
export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}
// Used for wrapping a page component
export const PageWrapper = styled.div<{ image?: string }>`
  position: relative;
  background-color: var(--light-primary);
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
  max-width: 1640px;
  padding: ${({ padding }) => (padding ? padding : '0')};
  margin: ${({ margin }) => (margin ? margin : '0')};
`
// Used for providing a wrapper around a component
export const ContainerRow = styled.div<{
  maxWidth?: string
  justifyContent?: TFlexJustifyContents
  alignItems?: TFlexAlignItems
  backgroundColor?: string
  image?: string
  padding?: string
  margin?: string
  width?: string
  minHeight?: string
  flexWrap?: string
  position?: string
  gap?: string
}>`
  display: flex;
  flex-direction: row;
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : 'no-wrap')};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'space-between')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'none')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '100%')};
  background-image: ${({ image }) => (image ? `url(${image})` : 'none')};
  background-size: cover;
  background-position: center;
  padding: ${({ padding }) => (padding ? padding : '0')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  width: ${({ width }) => (width ? width : '100%')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
  top: 0;
  position: ${({ position }) => (position ? position : 'relative')};
  gap: ${({ gap }) => (gap ? gap : '12px')};
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
  gap?: string
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
  height: ${({ height }) => (height ? height : 'auto')};
  gap: ${({ gap }) => (gap ? gap : 'auto')};
  transition: height 0.5s ease-in-out;
`

export const ToastWrapper = styled(ToastContainer).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: 'progress',
})``

export const ResponsiveContainer = styled(ContainerColumn)`
  @media ${device.laptop} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
  }
`
export const BigBox = styled.div<{
  flexDirection?: TFlexDirections
  justifyContent?: TFlexJustifyContents
  alignItems?: TFlexAlignItems
  padding?: string
  margin?: string
  width?: string
  boxShadow?: string
}>`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection ? flexDirection : 'column')};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'center')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  width: ${({ width }) => (width ? width : '100%')};
  height: auto;
  padding: ${({ padding }) => (padding ? padding : '24px')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  border-style: solid;
  border-radius: 10px;
  border-color: var(--secondary);
  background: black;
  box-shadow: 3px 3px 12px 2px var(--secondary);
`

export const BigBoxWithoutShadow = styled.div<{
  flexDirection?: TFlexDirections
  justifyContent?: TFlexJustifyContents
  alignItems?: TFlexAlignItems
  padding?: string
  margin?: string
  width?: string
  backgroundColor?: string
  border?: string
}>`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection ? flexDirection : 'row')};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'space-between')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  width: ${({ width }) => (width ? width : '100%')};
  height: auto;
  padding: ${({ padding }) => (padding ? padding : '24px')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  border-radius: 10px;
  border: ${({ border }) => (border ? border : '1px solid var(--secondary)')};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'none')};
`
export const BoxCard = styled.div<{
  flexDirection?: TFlexDirections
  justifyContent?: TFlexJustifyContents
  alignItems?: TFlexAlignItems
  boxWidth?: string
  boxHeight?: string
  textAlign?: string
  border?: string
  borderRadius?: string
  backgroundColor?: string
  padding?: string
  margin?: string
  borderHover?: string
  backgroundHover?: string
  shadowColor?: string
}>`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection ? flexDirection : 'row')};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'center')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  width: ${({ boxWidth }) => (boxWidth ? boxWidth : 'fit-content')};
  height: ${({ boxHeight }) => (boxHeight ? boxHeight : 'auto')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  padding: ${({ padding }) => (padding ? padding : '10px')};
  margin: ${({ margin }) => (margin ? margin : '12px')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '10px')};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'none')};
  border: ${({ border }) => (border ? border : '2px solid var(--secondary)')};
  position: relative;
  transition: height 0.5s ease-in-out;
  box-sizing: borer-box;
  cursor: pointer;
  &:hover {
    border: ${({ borderHover }) => (borderHover ? borderHover : 'none')};
    background-color: ${({ backgroundHover }) => (backgroundHover ? backgroundHover : 'none')};
    box-shadow: ${({ shadowColor }) => (shadowColor ? `3px 3px 12px 2px ${shadowColor}` : 'none')};
  }
`

export const BoxCardWithoutBorder = styled.div<{
  flexDirection?: TFlexDirections
  justifyContent?: TFlexJustifyContents
  alignItems?: TFlexAlignItems
  boxWidth?: string
  boxHeight?: string
  padding?: string
  margin?: string
}>`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection ? flexDirection : 'row')};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'center')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  width: ${({ boxWidth }) => (boxWidth ? boxWidth : 'fit-content')};
  height: ${({ boxHeight }) => (boxHeight ? boxHeight : 'auto')};
  padding: ${({ padding }) => (padding ? padding : '10px')};
  margin: ${({ margin }) => (margin ? margin : '12px')};
  border: none;
`

export const ImageIconContainer = styled.div<{
  flexDirection?: TFlexDirections
  justifyContent?: TFlexJustifyContents
  alignItems?: TFlexAlignItems
  boxWidth?: string
  boxHeight?: string
  padding?: string
  margin?: string
  top?: string
  left?: string
  border?: string
  backgroundColor?: string
  position?: string
  borderRadius?: string
  borderHover?: string
  backgroundHover?: string
  shadowColor?: string
}>`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection ? flexDirection : 'row')};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'center')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  width: ${({ boxWidth }) => (boxWidth ? boxWidth : 'fit-content')};
  height: ${({ boxHeight }) => (boxHeight ? boxHeight : 'auto')};
  min-height: ${({ boxHeight }) => (boxHeight ? boxHeight : 'auto')};
  padding: ${({ padding }) => (padding ? padding : '10px')};
  top: ${({ top }) => (top ? top : '0')};
  left: ${({ left }) => (left ? left : '0px')};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'none')};
  border: ${({ border }) => (border ? border : '2px solid var(--secondary)')};
  position: ${({ position }) => (position ? position : 'absolute')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '50%')};
  &:hover {
    border: ${({ borderHover, border }) => (borderHover ? borderHover : border ? border : '2px solid var(--secondary)')};
    background-color: ${({ backgroundHover, backgroundColor }) =>
    backgroundHover ? backgroundHover : backgroundColor ? backgroundColor : 'none'};
    box-shadow: ${({ shadowColor }) => (shadowColor ? `3px 3px 12px 2px ${shadowColor}` : 'none')};
  }
`

export const PhotoContainer = styled(ImageIconContainer)`
  @media ${device.mobileL} {
    width: 280px !important;
    height: 280px;
  }
  @media ${device.mobileL} {
    width: 200px !important;
    height: 200px;
  }
  @media ${device.tablet} {
    width: 250px !important;
    height: 250px;
  }
  @media ${device.laptopL} {
    width: 280px !important;
    height: 280px;
  }
  @media ${device.desktopL} {
    width: 350px !important;
    height: 350px;
  }
  @media screen and (max-width: ${size.mobileL}) {
    width: 145px;
    height: 145px;
  }
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
  text-align: center;
`
export const SubText = styled.span<{
  color?: string
  fontSize?: string
  fontWeight?: number
  fontFamily?: string
  lineHeight?: number
  textAlign?: string
  margin?: string
  borderImg?: string
}>`
  color: ${({ color }) => (color ? color : 'var(--primary-text)')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 300)};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : 'rubik')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  line-height: 1.6;
  border-bottom: 10px solid transparent;
  border-image: ${({ borderImg }) => (borderImg ? `url(${borderImg})` : 'none')} 30 stretch;
`
export const TextCustom = styled.p<{
  color?: string
  fontSize?: string
  fontWeight?: number
  fontFamily?: string
  lineHeight?: number
  textAlign?: string
  margin?: string
}>`
  color: ${({ color }) => (color ? color : 'var(--primary-text)')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.25rem')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 600)};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : 'Rubik')};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : 1.6)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  margin: ${({ margin }) => (margin ? margin : '0')};
`
export const Divider = styled.div<{ width?: string; height?: string; margin?: string; backColor?: string }>`
  width: ${({ width }) => (width ? width : '50%')};
  height: ${({ height }) => (height ? height : '4px')};
  background-color: ${({ backColor }) => (backColor ? backColor : 'var(--secondary)')};
  margin: ${({ margin }) => (margin ? margin : '2rem 0')};
`
export const AvatarContainer = styled.img<{ width?: string }>`
  border-radius: 50%;
  width: ${({ width }) => (width ? width : '100%')};
  max-width: 240px;
  cursor: pointer;
`

export const InputWrapper = styled.input<{ width?: string; height?: string }>`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '42px')};
  border-radius: 4px;
  outline: none;
  border: 1px solid var(--primary-opacity);
  padding: 12px;
  background-color: transparent;
  color: var(--primary-text);
`

export const ImageContainer = styled.img<{
  width?: string
  height?: string
  maxWidth?: string
  maxHeight?: string
  margin?: string
  objectFit?: string
  borderRadius?: string
  position?: string
}>`
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '50%')};
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '100%')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  object-fit: ${({ objectFit }) => (objectFit ? objectFit : 'cover')};
  cursor: pointer;
  position: ${({ position }) => (position ? position : 'unset')};
`
export const ColorDot = styled.span<{
  width?: string
  height?: string
  backColor?: string
}>`
  width: ${({ width }) => (width ? width : '18px')};
  min-width: ${({ width }) => (width ? width : '18px')};
  height: ${({ height }) => (height ? height : '18px')};
  background-color: ${({ backColor }) => (backColor ? backColor : 'var(--secondary')};
  border-radius: 50%;
`

export const RoundedIconBox = styled.div<{
  width?: string
  backColor?: string
  margin?: string
  padding?: string
}>`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ width }) => (width ? width : 'auto')};
  background-color: ${({ backColor }) => (backColor ? backColor : 'none')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const RoundedInputContainer = styled.div<{
  width?: string
  height?: string
  backColor?: string
  border?: string
}>`
  width: ${({ width }) => (width ? width : '18px')};
  min-width: ${({ width }) => (width ? width : '18px')};
  height: ${({ height }) => (height ? height : '18px')};
  background-color: ${({ backColor }) => (backColor ? backColor : 'none')};
  border: ${({ border }) => (border ? border : '1px solid var(--secondary)')};
  border-radius: 40px;
  position: relative;
`
export const CustomInput = styled.input<{
  width?: string
  height?: string
  backColor?: string
  border?: string
  color?: string
  padding?: string
  fontSize?: string
  fontFamily?: string
  fontWeight?: number
}>`
  width: ${({ width }) => (width ? width : '18px')};
  min-width: ${({ width }) => (width ? width : '18px')};
  height: ${({ height }) => (height ? height : '18px')};
  background-color: ${({ backColor }) => (backColor ? backColor : 'transparent')};
  border: ${({ border }) => (border ? border : '1px solid var(--secondary)')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 300)};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : 'Rubik')};
  color: ${({ color }) => (color ? color : 'var(--primary-text)')};
  outline: none;
  @media screen and (max-width: ${size.mobileL}) {
    margin-bottom: 10px;
  }
`
