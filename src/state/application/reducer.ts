import { createSlice } from '@reduxjs/toolkit'
import { BigNumber, Contract } from 'ethers'

export enum ApplicationModal {
  WALLET,
  WYRE_RESERVATION_FORM,
  MOONPAY,
  MOONPAY_NFT,
}

export interface ContractInterfaces {
  collectionContract: Contract | undefined
  dropperContract: Contract | undefined
  usdcTokenContract: Contract | undefined
}

export interface IUserBalance {
  maticBalance: BigNumber
  usdcBalance: BigNumber
}

export interface ApplicationState {
  readonly openModal: ApplicationModal | null
  contracts: ContractInterfaces
}

const initialState: ApplicationState = {
  openModal: null,
  contracts: { collectionContract: undefined, dropperContract: undefined, usdcTokenContract: undefined },
}

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setOpenModal(state, action) {
      state.openModal = action.payload
    },
    setContracts(state, action) {
      state.contracts = { ...action.payload }
    },
  },
})

export const { setOpenModal, setContracts } = applicationSlice.actions
export default applicationSlice.reducer
