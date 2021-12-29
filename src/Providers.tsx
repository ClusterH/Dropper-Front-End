import React, { useMemo } from 'react'
import { Provider } from 'react-redux'
import { Config, Polygon, DAppProvider, useEthers } from '@usedapp/core'
import { WyreWidgetProvider } from './components/Wyre'
import { CollectionContextProvider } from './contexts/CollectionContext'
import { MomentContextProvider } from './contexts/MomentContext'
import { PackContextProvider } from './contexts/PackContext'
import store from './state'
import { NETWORK_URLS } from './connectors'
import { SupportedChainId, VENLY_CHAIN_ID } from './constants/chains'
import { useGetWalletConnection } from './hooks/useWallet'
import { useVenlyAccount } from './hooks/useVenly'
import { DAppProviders } from './UseDappProvider'

export const Providers: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <WyreWidgetProvider>
        <CollectionContextProvider>
          <PackContextProvider>
            <MomentContextProvider>{children}</MomentContextProvider>
          </PackContextProvider>
        </CollectionContextProvider>
      </WyreWidgetProvider>
    </Provider>
  )
}
