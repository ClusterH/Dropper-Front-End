import { createSlice } from '@reduxjs/toolkit'
import { packList } from '../../constants/dummy'
import { TPackItem } from '../../types'

interface ICartState {
  userCartList: TPackItem[]
  moonPayNFTURL: string
}
const initialState: ICartState = {
  userCartList: packList,
  moonPayNFTURL: '',
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setUserCartList(state, action) {
      if (action.payload === undefined) {
        state.userCartList = [...packList]
      } else {
        // Sanity check on 1 quantity.
        const { packId, cartQuantity }: { packId: number; cartQuantity: number } = action.payload
        const tempCart = [...state.userCartList.map((item) => ({ ...item, cartQuantity: 0 }))]
        tempCart[packId - 1] = { ...tempCart[packId - 1], cartQuantity }
        state.userCartList = tempCart
      }
    },
    setMoonPayNFTURL(state, action) {
      state.moonPayNFTURL = action.payload
    },
  },
})

export const { setUserCartList, setMoonPayNFTURL } = cartSlice.actions
export default cartSlice.reducer
