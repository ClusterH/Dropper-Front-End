import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { save, load } from 'redux-localstorage-simple'

import application from './application/reducer'
import dropper from './dropper/reducer'
import { updateVersion } from './global/actions'

const PERSISTED_KEYS: string[] = ['dropper']

const store = configureStore({
  reducer: {
    application,
    dropper,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }).concat(save({ states: PERSISTED_KEYS, debounce: 1000 })),
  preloadedState: load({ states: PERSISTED_KEYS }),
})

store.dispatch(updateVersion())
setupListeners(store.dispatch)

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
