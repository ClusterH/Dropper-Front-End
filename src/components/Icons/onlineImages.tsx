import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LOGO_IMG from '../../assets/images/dropper-small-shaddow.png'

const ImgContainer = styled.img<{ imgWidth?: string }>`
  width: ${({ imgWidth }) => (imgWidth ? imgWidth : '100%')};
`

const OnlineImages: React.FC<{ url: string; imgWidth?: string }> = ({ url, imgWidth }) => {
  return <ImgContainer src={url} imgWidth={imgWidth} />
}

export default OnlineImages
