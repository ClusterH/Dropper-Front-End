import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { ContainerRow } from '../../styles/globalStyles'
import Logo from '../Icons/logo'

const MenuContainer = styled(ContainerRow)`
  padding: 0.5rem 1rem;
`
const MenuItem = styled(NavLink)`
  color: var(--primary-text);
  text-decoration: none;
  margin: 0 0.5rem;
  &:hover {
    color: var(--secondary);
  }
`

const Menu: React.FC = () => {
  return (
    <MenuContainer justifyContent={'flex-start'} rowWidth={'fit-content'}>
      <MenuItem to="/creators">Creators</MenuItem>
      <MenuItem to="/account">My Account</MenuItem>
      <MenuItem to="/account">Rankings</MenuItem>
    </MenuContainer>
  )
}

export default Menu
