import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiProfileLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'

const ProfileIcon: React.FC = () => {
  return (
    <NavLink to="/inventory">
      <CgProfile size={'36px'} color={'var(--secondary)'} />
    </NavLink>
  )
}

export default ProfileIcon
