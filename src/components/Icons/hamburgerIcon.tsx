import React, { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import HAMBURGER_IMG from '../../assets/images/menu.png'
import { ContainerColumn, ContainerRow, device } from '../../styles/globalStyles'
import { MenuItem } from '../Menu/MenuItem'
import { WyreDebitCard } from '../Wyre/DebitCard'
import WyreReservationModal from '../WyreModal'

const HamburgerContainer = styled.img`
  display: fixed;

  @media ${device.laptop} {
    display: none;
  }
`

const HamburgerMenuWrapper = styled(ContainerColumn)`
  width: 90vw;
  position: absolute;
  top: 72px;
  right: 0;
  z-index: 1;
  background-color: var(--light-navy-blue);
  padding: 24px;
  border-radius: 12px;
  border: 2px solid var(--secondary);
  transition: background-color 3000ms ease-in-out 0s, opacity 8000ms ease-in-out 0s;
`
const HamburgerMenuItem: React.FC<{ label: string; navLink: string; disabled?: boolean }> = ({
  label,
  navLink,
  disabled,
}) => {
  return (
    <ContainerRow margin={'24px 0 0 0'} justifyContent={'center'}>
      <MenuItem
        color={disabled ? 'var(--disabled)' : 'var(--primary-text)'}
        to={`/${navLink}`}
        fontSize={isMobile ? '2rem' : '2.5rem'}
        onClick={(e) => (disabled ? e.preventDefault() : null)}
      >
        {label}
      </MenuItem>
    </ContainerRow>
  )
}

const HamburgerMenu: React.FC<{ setIsOpen: (isOpen: boolean) => void }> = ({ setIsOpen }) => {
  return (
    <HamburgerMenuWrapper justifyContent={'flex-start'} onClick={() => setIsOpen(false)}>
      <HamburgerMenuItem label={'Drops'} navLink={'clix'} />
      <HamburgerMenuItem label={'About Us'} navLink={'aboutus'} />
      <HamburgerMenuItem disabled label={'Rankings'} navLink={'ranks'} />
      <HamburgerMenuItem disabled label={'Marketplace'} navLink={'marketplace'} />
      <HamburgerMenuItem label={'Profile'} navLink={'inventory'} />
      <WyreDebitCard />
      <WyreReservationModal />
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
