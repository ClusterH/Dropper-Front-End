import React from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import { ContainerRow } from '../../styles/globalStyles'
import { ProfileIcon } from '../Icons'
import Hamburger from '../Icons/hamburgerIcon'
import Logo from '../Icons/logo'
import Menu from '../Menu'
import VenlyAuth from '../Venly/VenlyAuth'
import WalletConnector from '../WalletConnector'

const HeaderContainer = styled(ContainerRow)`
  padding: 0.5rem 1rem;
  height: 120px;
  background-color: var(--dark-navy);
  box-shadow: 0px 1px 10px var(--navy-blue-opacity);
  z-index: 999;
  position: fixed;
`
const SpacerHeader = styled.div`
  height: 120px;
  width: 100%;
  backgound: none;
`

const Header: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <ContainerRow width={'fit-content'}>
          <Logo />
          <Menu />
        </ContainerRow>
        <ContainerRow width={'fit-content'} padding={'0'} margin={'0'} alignItems={'center'}>
          {/* <VenlyAuth /> */}
          <WalletConnector />
          {!isMobile && <ProfileIcon />}
          <Hamburger />
        </ContainerRow>
      </HeaderContainer>
      <SpacerHeader />
    </>
  )
}

export default Header
