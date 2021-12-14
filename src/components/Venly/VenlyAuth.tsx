import React from 'react'
import { useVenlyAccount, useVenlyConnect } from '../../hooks/useVenly'
import { shortenAddress } from '../../utils'
import { MainButton } from '../Buttons/MainButton'

const VenlyAuth: React.FC = () => {
  const { authStatus, handleAuthentication, handleLogOut } = useVenlyConnect()
  const venlyAccount = useVenlyAccount()

  return (
    <>
      {authStatus ? (
        <MainButton onClick={handleLogOut}>
          {venlyAccount.address ? shortenAddress(venlyAccount.address) : ''}
        </MainButton>
      ) : (
        <MainButton onClick={handleAuthentication}>{'SignIn'}</MainButton>
      )}
    </>
  )
}

export default VenlyAuth
