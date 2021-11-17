import { createSlice } from '@reduxjs/toolkit'
import { packList } from '../../constants/dummy'
import { TPackItem } from '../../types'

interface ICartState {
  userCartList: TPackItem[]
}
const initialState: ICartState = {
  userCartList: packList,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setUserCartList(state, action) {
      if (action.payload === undefined) {
        state.userCartList = [...packList]
      } else {
        const { packId, cartQuantity }: { packId: number; cartQuantity: number } = action.payload
        state.userCartList[packId - 1] = { ...state.userCartList[packId - 1], cartQuantity: cartQuantity }
      }
    },
  },
})

export const { setUserCartList } = cartSlice.actions
export default cartSlice.reducer
