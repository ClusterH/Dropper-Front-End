import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import HAMBURGER_IMG from '../../assets/images/menu.png'
import { ContainerColumn, ContainerRow, device } from '../../styles/globalStyles'
import { MenuItem } from '../Menu/MenuItem'

const HamburgerContainer = styled.img`
  display: fixed;

  @media ${device.laptop} {
    display: none;
  }
`

const HamburgerMenuWrapper = styled(ContainerColumn)`
  position: absolute;
  top: 72px;
  right: 0;
  z-index: 1;
  background-color: var(--primary);
  padding: 24px;
  border-radius: 12px;
  border: 2px solid var(--secondary);
  transition: background-color 3000ms ease-in-out 0s, opacity 8000ms ease-in-out 0s;
`
const HamburgerMenuItem: React.FC<{ label: string; navLink: string }> = ({ label, navLink }) => {
  return (
    <ContainerRow margin={'24px 0 0 0'} justifyContent={'center'}>
      <MenuItem to={`/${navLink}`} fontSize={'2.5rem'}>
        {label}
      </MenuItem>
    </ContainerRow>
  )
}

const HamburgerMenu: React.FC<{ setIsOpen: (isOpen: boolean) => void }> = ({ setIsOpen }) => {
  return (
    <HamburgerMenuWrapper justifyContent={'flex-start'} onClick={() => setIsOpen(false)}>
      <HamburgerMenuItem label={'Creators'} navLink={'creators'} />
      <HamburgerMenuItem label={'My Account'} navLink={'account'} />
      <HamburgerMenuItem label={'Rankings'} navLink={''} />
    </HamburgerMenuWrapper>
  )
}
const Hamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    return () => {
      setIsOpen(false)
    }
  }, [])

  return (
    <>
      <HamburgerContainer src={HAMBURGER_IMG} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <HamburgerMenu setIsOpen={setIsOpen} />}
    </>
  )
}

export default Hamburger
