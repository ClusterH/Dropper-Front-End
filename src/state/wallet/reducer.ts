import { createSlice } from '@reduxjs/toolkit'
import { BigNumber } from 'ethers'
import { packList } from '../../constants/dummy'
import { TPackItem } from '../../types'

interface IWalletState {
  walletAddress: string
  chainId: number | undefined
  isWalletConnected: 'venly' | 'injected' | undefined
  maticBalance: BigNumber
  usdcBalance: BigNumber
}
const initialState: IWalletState = {
  walletAddress: '',
  chainId: undefined,
  isWalletConnected: undefined,
  maticBalance: BigNumber.from(0),
  usdcBalance: BigNumber.from(0),
}

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setWalletAddress(state, action) {
      state.walletAddress = action.payload
    },
    setChainId(state, action) {
      state.chainId = action.payload
    },
    setIsWalletConnected(state, action) {
      state.isWalletConnected = action.payload
    },
    setMaticBalance(state, action) {
      state.maticBalance = action.payload
    },
    setUSDCBalance(state, action) {
      state.usdcBalance = action.payload
    },
  },
})

export const { setWalletAddress, setChainId, setIsWalletConnected, setMaticBalance, setUSDCBalance } = walletSlice.actions
export default walletSlice.reducer
