import React from 'react'
import styled from 'styled-components'
import { ContainerRow } from '../../styles/globalStyles'
import Hamburger from '../Icons/hamburgerIcon'
import Logo from '../Icons/logo'
import Menu from '../Menu'
import { SearchBox } from '../SearchBox'
import WalletConnector from '../WalletConnection'

const HeaderContainer = styled(ContainerRow)`
  padding: 0.5rem 1rem;
  height: 120px;
  background-color: var(--dark-navy);
  box-shadow: 0px 1px 10px var(--navy-blue-opacity);
  z-index: 999;
`

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <ContainerRow width={'fit-content'}>
        <Logo />
        <Menu />
      </ContainerRow>
      {/* <ContainerRow width={'30%'} minHeight={'60px'} padding={'0'}>
        <SearchBox width={'70%'} height={'100%'} />
        <WalletConnector />
      </ContainerRow> */}
      <WalletConnector />
      <Hamburger />
    </HeaderContainer>
  )
}

export default Header
