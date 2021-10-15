import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LOGO_IMG from '../../assets/images/dropper-small-shaddow.png'

const ImgContainer = styled.img<{ imgWidth?: string; imgHeight?: string }>`
  background-size: cover;
  background-position: center center;
  width: ${({ imgWidth }) => (imgWidth ? imgWidth : '100%')};
  height: ${({ imgHeight }) => (imgHeight ? imgHeight : 'auto')};
`

const OnlineImages: React.FC<{ url: string; imgWidth?: string; imgHeight?: string }> = ({
  url,
  imgWidth,
  imgHeight,
}) => {
  return <ImgContainer src={url} imgWidth={imgWidth} imgHeight={imgHeight} />
}

export default OnlineImages
