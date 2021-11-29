import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import React from 'react'
import { Provider } from 'react-redux'
import Web3ReactManager from './components/Web3ReactManager'
import { WyreWidgetProvider } from './components/Wyre'
import { NetworkContextName } from './constants/misc'
import { CollectionContextProvider } from './contexts/CollectionContext'
import { MomentContextProvider } from './contexts/MomentContext'
import { PackContextProvider } from './contexts/PackContext'
import store from './state'
import getLibrary from './utils/getLibrary'

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)
export const Providers: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ProviderNetwork getLibrary={getLibrary}>
          <Web3ReactManager>
            <WyreWidgetProvider>
              <CollectionContextProvider>
                <PackContextProvider>
                  <MomentContextProvider>{children}</MomentContextProvider>
                </PackContextProvider>
              </CollectionContextProvider>
            </WyreWidgetProvider>
          </Web3ReactManager>
        </Web3ProviderNetwork>
      </Web3ReactProvider>
    </Provider>
  )
}
