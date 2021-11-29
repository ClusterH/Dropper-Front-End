import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LOGO_IMG from '../../assets/images/dropper-small-shaddow.png'
import { size } from '../../styles/globalStyles'

const LogoContainer = styled.img`
  @media screen and (max-width: ${size.mobileL}) {
    width: 100%;
    object-fit: cover;
  }
`

const Logo: React.FC = () => {
  return (
    <NavLink to="/">
      <LogoContainer src={LOGO_IMG} />
    </NavLink>
  )
}

export default Logo
