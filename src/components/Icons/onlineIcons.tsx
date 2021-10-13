import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LOGO_IMG from '../../assets/images/dropper-small-shaddow.png'

const ImgContainer = styled.img<{ imgWidth?: string }>`
  width: ${({ imgWidth }) => (imgWidth ? imgWidth : 'fit-content')};
`

const OnlineIcons: React.FC<{ url: string; imgWidth?: string }> = ({ url, imgWidth }) => {
  return <ImgContainer src={url} imgWidth={imgWidth} />
}

export default OnlineIcons
