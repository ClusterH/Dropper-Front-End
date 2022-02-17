import { useCallback } from 'react'
import { AppState } from '../../state'
import { useAppDispatch, useAppSelector } from '../hooks'
import { ApplicationModal, setOpenModal } from './reducer'

export function useModalOpen(modal: ApplicationModal): boolean {
  const openModal = useAppSelector((state: AppState) => state.application.openModal)
  return openModal === modal
}

export function useToggleModal(modal: ApplicationModal): () => void {
  const open = useModalOpen(modal)
  const dispatch = useAppDispatch()

  return useCallback(() => dispatch(setOpenModal(open ? null : modal)), [dispatch, modal, open])
}

export function useWalletModalToggle(): () => void {
  return useToggleModal(ApplicationModal.WALLET)
}

export function useWyreReservationModalToggle(): () => void {
  return useToggleModal(ApplicationModal.WYRE_RESERVATION_FORM)
}

export function useMoonPayModalToggle(): () => void {
  return useToggleModal(ApplicationModal.MOONPAY)
}

export function useMoonPayNFTModalToggle(): () => void {
  return useToggleModal(ApplicationModal.MOONPAY_NFT)
}
