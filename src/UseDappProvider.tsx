import { DAppProvider, Polygon, useEthers } from '@usedapp/core'
import React, { useMemo } from 'react'
import { NETWORK_URLS } from './connectors'
import { VENLY_CHAIN_ID } from './constants/chains'
import { useGetWalletConnection } from './hooks/useWallet'

export const DAppProviders: React.FC = ({ children }) => {
  const { chainId } = useEthers()
  const isWalletConnected = useGetWalletConnection()
  const config = useMemo(() => {
    console.log('Dappprovider===>>>', chainId, isWalletConnected)
    if (isWalletConnected === undefined) return {}
    return {
      readOnlyChainId: isWalletConnected === 'venly' ? VENLY_CHAIN_ID : chainId,
      readOnlyUrls: {
        [Polygon.chainId]: NETWORK_URLS[isWalletConnected === 'venly' ? VENLY_CHAIN_ID : chainId!],
      },
    }
  }, [chainId, isWalletConnected])
  return <DAppProvider config={config}>{children}</DAppProvider>
}
