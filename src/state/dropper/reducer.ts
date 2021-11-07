import { createSlice } from '@reduxjs/toolkit'
import { IDropperState } from '../../types'

const initialState: IDropperState = {
  userPackList: [],
  userMomentList: [],
  isUSDCApproved: false,
}

const dropperSlice = createSlice({
  name: 'dropper',
  initialState,
  reducers: {
    setPackList(state, action) {
      state.userPackList = action.payload
    },
    setMomentList(state, action) {
      state.userMomentList = action.payload
    },
    setIsUSDCApproved(state, action) {
      state.isUSDCApproved = action.payload
    },
  },
})

export const { setPackList, setMomentList, setIsUSDCApproved } = dropperSlice.actions
export default dropperSlice.reducer
