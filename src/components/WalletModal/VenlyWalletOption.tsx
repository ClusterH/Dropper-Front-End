import React from 'react'
import { SUPPORTED_WALLETS } from '../../constants/wallet'
import { useVenlyConnect } from '../../hooks/useVenly'
import { useIsWalletConnected } from '../../hooks/useWallet'
import Option from './Option'

const option = SUPPORTED_WALLETS.VENLY

const VenlyWalletOption: React.FC = () => {
  const isWalletConnected = useIsWalletConnected()
  const { handleAuthentication } = useVenlyConnect()

  return (
    <Option
      id={`connect-${'Venly'}`}
      color={option.color}
      header={'Venly Wallet'}
      subheader={null}
      icon={option.iconURL}
      active={isWalletConnected === 'venly'}
      onClick={handleAuthentication}
    />
  )
}

export default VenlyWalletOption
