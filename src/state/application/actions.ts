import { createAction } from '@reduxjs/toolkit'

export enum ApplicationModal {
  WALLET,
  SETTINGS,
}

export const updateBlockNumber = createAction<{ chainId: number; blockNumber: number }>('application/updateBlockNumber')
export const setOpenModal = createAction<ApplicationModal | null>('application/setOpenModal')
export const removePopup = createAction<{ key: string }>('application/removePopup')
