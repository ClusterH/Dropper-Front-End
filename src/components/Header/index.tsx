import React from 'react'
import styled from 'styled-components'
import { ContainerRow } from '../../styles/globalStyles'
import Hamburger from '../Icons/hamburgerIcon'
import Logo from '../Icons/logo'
import Menu from '../Menu'
import WalletConnector from '../WalletConnection'

const HeaderContainer = styled(ContainerRow)`
  padding: 0.5rem 1rem;
  box-shadow: 0px 3px 10px var(--secondary-opacity);
  border-bottom: solid;
  border-color: var(--secondary);
  border-width: 1px;
`

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <ContainerRow rowWidth={'fit-content'}>
        <Logo />
        <Menu />
      </ContainerRow>
      <WalletConnector />
      <Hamburger />
    </HeaderContainer>
  )
}

export default Header
