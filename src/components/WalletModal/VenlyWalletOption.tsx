import React from 'react'
import { SUPPORTED_WALLETS } from '../../constants/wallet'
import { useIsVenly, useVenlyConnect } from '../../hooks/useVenly'
import Option from './Option'

const option = SUPPORTED_WALLETS.VENLY

const VenlyWalletOption: React.FC = () => {
  const isVenly = useIsVenly()
  const { handleAuthentication } = useVenlyConnect()

  return (
    <Option
      id={`connect-${'Venly'}`}
      color={option.color}
      header={'Venly Wallet'}
      subheader={null}
      icon={option.iconURL}
      active={isVenly}
      onClick={handleAuthentication}
    />
  )
}

export default VenlyWalletOption
