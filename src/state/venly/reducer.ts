import { createSlice } from '@reduxjs/toolkit'

interface IVenlyState {
  venlyAccount: {
    id: string
    address: string
  }
}
const initialState: IVenlyState = {
  venlyAccount: {
    id: '',
    address: '',
  },
}

const venlySlice = createSlice({
  name: 'venly',
  initialState,
  reducers: {
    setVenlyAccount(state, action) {
      state.venlyAccount = { ...action.payload }
    },
  },
})

export const { setVenlyAccount } = venlySlice.actions
export default venlySlice.reducer
