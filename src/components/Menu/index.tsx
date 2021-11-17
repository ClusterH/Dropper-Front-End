import React from 'react'
import styled from 'styled-components'
import { ContainerRow, device } from '../../styles/globalStyles'
import { WyreDebitCard } from '../Wyre/DebitCard'
import WyreReservationModal from '../WyreModal'
import { MenuItem } from './MenuItem'

const MenuContainer = styled(ContainerRow)`
  padding: 0.5rem 1rem;
  display: none;
  @media ${device.laptop} {
    display: flex;
  }
`

const Menu: React.FC = () => {
  return (
    <MenuContainer justifyContent={'flex-start'} width={'fit-content'}>
      <MenuItem to="/clix">Drops</MenuItem>
      <MenuItem to="/aboutus">About Us</MenuItem>
      <MenuItem color={'var(--disabled)'} to="/ranks" onClick={(e) => e.preventDefault()}>
        Rankings
      </MenuItem>
      <MenuItem color={'var(--disabled)'} to="/marketplace" onClick={(e) => e.preventDefault()}>
        Marketplace
      </MenuItem>
      {/* <MenuItem to="/account" fontSize={'1.3rem'}>
        My Account
      </MenuItem> */}
      <WyreDebitCard />
      <WyreReservationModal />
    </MenuContainer>
  )
}

export default Menu
