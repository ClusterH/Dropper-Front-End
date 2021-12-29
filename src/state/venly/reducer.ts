import { createSlice } from '@reduxjs/toolkit'
import { VenlyConnect } from '@venly/connect'

interface IVenlyState {
  venlyAccount: {
    id: string
    address: string
  }
  venlyConnect: VenlyConnect | undefined
  isVenly: boolean
}
const initialState: IVenlyState = {
  venlyAccount: {
    id: '',
    address: '',
  },
  venlyConnect: undefined,
  isVenly: false,
}

const venlySlice = createSlice({
  name: 'venly',
  initialState,
  reducers: {
    setVenlyAccount(state, action) {
      state.venlyAccount = { ...action.payload }
    },
    setVenlyConnect(state, action) {
      state.venlyConnect = action.payload
    },
    setIsVenly(state, action) {
      state.isVenly = action.payload
    },
    resetVenlyState: () => initialState,
  },
})

export const { setVenlyAccount, setVenlyConnect, setIsVenly, resetVenlyState } = venlySlice.actions
export default venlySlice.reducer
