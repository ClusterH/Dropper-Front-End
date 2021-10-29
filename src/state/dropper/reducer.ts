import { createSlice } from '@reduxjs/toolkit'
import { DropperState } from '../../types'

const initialState: DropperState = {
  userPackList: [],
  userMomentList: [],
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
  },
})

export const { setPackList, setMomentList } = dropperSlice.actions
export default dropperSlice.reducer
