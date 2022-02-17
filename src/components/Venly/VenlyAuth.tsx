import React from 'react'
import { useIsVenly, useVenlyAccount, useVenlyConnect, useVenlyConnection } from '../../hooks/useVenly'
import { shortenAddress } from '../../utils'
import MainButton from '../Buttons/MainButton'

const VenlyAuth: React.FC = () => {
  useVenlyConnection()
  const isVenly = useIsVenly()
  const { handleAuthentication, handleLogOut } = useVenlyConnect()
  const venlyAccount = useVenlyAccount()

  return (
    <>
      {isVenly ? (
        <MainButton onClick={handleLogOut}>{venlyAccount.address ? shortenAddress(venlyAccount.address) : ''}</MainButton>
      ) : (
        <MainButton onClick={handleAuthentication}>{'SignIn'}</MainButton>
      )}
    </>
  )
}

export default VenlyAuth
