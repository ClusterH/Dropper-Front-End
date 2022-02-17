import { DAppProvider, Polygon, useEthers } from '@usedapp/core'
import React, { useMemo } from 'react'
import { NETWORK_URLS } from './connectors'
import { VENLY_CHAIN_ID } from './constants/chains'
import { useChainId, useIsWalletConnected } from './hooks/useWallet'

export const DAppProviders: React.FC = ({ children }) => {
  const isWalletConnected = useIsWalletConnected()
  const chainId = useChainId()

  const config = useMemo(() => {
    if (isWalletConnected === undefined || !chainId) return {}
    return {
      readOnlyChainId: chainId,
      readOnlyUrls: {
        [Polygon.chainId]: NETWORK_URLS[chainId!],
      },
    }
  }, [chainId, isWalletConnected])
  return <DAppProvider config={config}>{children}</DAppProvider>
}
