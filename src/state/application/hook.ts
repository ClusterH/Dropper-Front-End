import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useActiveWeb3React } from '../../hooks/useWeb3'
import { AppDispatch, AppState } from '../../state'
import { ApplicationModal, setOpenModal } from './actions'

export function useBlockNumber(): number | undefined {
  const { chainId } = useActiveWeb3React()
  return useSelector((state: AppState) => state.application.blockNumber[chainId ?? -1])
}

export function useModalOpen(modal: ApplicationModal): boolean {
  const openModal = useSelector((state: AppState) => state.application.openModal)
  return openModal === modal
}

export function useToggleModal(modal: ApplicationModal): () => void {
  modal = modal ? modal : ApplicationModal.WALLET
  const open = useModalOpen(modal)
  const dispatch = useDispatch<AppDispatch>()

  return useCallback(() => {
    return dispatch(setOpenModal(open ? null : modal))
  }, [dispatch, modal, open])
}

export function useWalletModalToggle(): () => void {
  return useToggleModal(ApplicationModal.WALLET)
}
