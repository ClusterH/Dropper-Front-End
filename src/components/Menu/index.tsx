import React from 'react'
import styled from 'styled-components'
import { ContainerRow } from '../../styles/globalStyles'
import { device } from '../../styles/globalStyles'
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
      <MenuItem to="/clix">Clix</MenuItem>
      <MenuItem to="/about">About Us</MenuItem>
      <MenuItem to="/roadmap">Roadmap</MenuItem>
      <MenuItem to="/teams">Team</MenuItem>
      <MenuItem to="/faq">FAQ</MenuItem>
      {/* <MenuItem to="/account" fontSize={'1.3rem'}>
        My Account
      </MenuItem> */}
      <MenuItem to="/inventory">Inventory</MenuItem>
      <WyreDebitCard />
      <WyreReservationModal />
    </MenuContainer>
  )
}

export default Menu
