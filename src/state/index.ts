import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { load, save } from 'redux-localstorage-simple'
import application from './application/reducer'
import cart from './cart/reducer'
import dropper from './dropper/reducer'
import venly from './venly/reducer'
import wallet from './wallet/reducer'
import { updateVersion } from './global/actions'

const PERSISTED_KEYS: string[] = ['dropper', 'cart', 'wallet', 'application']

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    application,
    dropper,
    cart,
    venly,
    wallet,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }).concat(save({ states: PERSISTED_KEYS, debounce: 1000 })),
  preloadedState: load({ states: PERSISTED_KEYS }),
})

store.dispatch(updateVersion())
setupListeners(store.dispatch)

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
