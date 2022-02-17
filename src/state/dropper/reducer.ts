import { createSlice } from '@reduxjs/toolkit'
import { IDropperState } from '../../types'

const initialState: IDropperState = {
  latestBlockNumber: 0,
  userPackList: [],
  userMomentList: [],
  isUSDCApproved: false,
  isLoading: false,
}

const dropperSlice = createSlice({
  name: 'dropper',
  initialState,
  reducers: {
    setLatestBlockNumber(state, action) {
      state.latestBlockNumber = action.payload
    },
    setPackList(state, action) {
      state.userPackList = action.payload
    },
    setMomentList(state, action) {
      if (action.payload === null || !action.payload.moments) state.userMomentList = []
      else if (action.payload.txHash) state.userMomentList = [...action.payload, ...state.userMomentList!]
      else state.userMomentList = action.payload.moments
    },
    setIsUSDCApproved(state, action) {
      state.isUSDCApproved = action.payload
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload
    },
  },
})

export const { setLatestBlockNumber, setPackList, setMomentList, setIsUSDCApproved, setIsLoading } = dropperSlice.actions
export default dropperSlice.reducer
