import React from 'react'
import styled from 'styled-components'
import { ContainerRow } from '../../styles/globalStyles'
import { device } from '../../styles/globalStyles'
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
    <MenuContainer justifyContent={'flex-start'} rowWidth={'fit-content'}>
      {/* <MenuItem to="/creators">Creators</MenuItem> */}
      <MenuItem to="/account">My Account</MenuItem>
      <MenuItem to="/account">Rankings</MenuItem>
    </MenuContainer>
  )
}

export default Menu
