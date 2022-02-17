import React from 'react'
import { Provider } from 'react-redux'
import { WyreWidgetProvider } from './components/Wyre'
import { CollectionContextProvider } from './contexts/CollectionContext'
import { MomentContextProvider } from './contexts/MomentContext'
import { PackContextProvider } from './contexts/PackContext'
import store from './state'

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
