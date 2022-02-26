import { useCallback, useMemo } from 'react'
import { toast } from 'react-toastify'
import { AppState } from '../state'
import { useModalOpen, useMoonPayModalToggle, useMoonPayNFTModalToggle } from '../state/application/hook'
import { ApplicationModal } from '../state/application/reducer'
import { setMoonPayNFTURL } from '../state/cart/reducer'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import { getMoonPayNFTWidgetURL, getMoonPayUSDCWidgetURL } from '../utils/moonpayHelpers'
import { useChainId, useIsWalletConnected, useWalletAddress } from './useWallet'

export const useMoonPayNFTURL = () => {
  return useAppSelector((state: AppState) => state.cart.moonPayNFTURL)
}

export const useMoonPay = () => {
  const moonPayModalOpen = useModalOpen(ApplicationModal.MOONPAY)
  const isWalletConnected = useIsWalletConnected()
  const walletAddress = useWalletAddress()
  const chainId = useChainId()
  const toggleMoonPayModal = useMoonPayModalToggle()

  const moonPayUSDCURL = useMemo(() => getMoonPayUSDCWidgetURL(chainId!, walletAddress), [chainId, walletAddress])

  const handleMoonPayClick = useCallback(() => {
    if (!isWalletConnected || walletAddress.length === 0) {
      toast.error('Please check your Wallet Connection First!', { toastId: 'Not Connected-3' })
      return
    }
    toggleMoonPayModal()
  }, [isWalletConnected, toggleMoonPayModal, walletAddress.length])

  return { moonPayModalOpen, moonPayUSDCURL, toggleMoonPayModal, handleMoonPayClick }
}

export const useMoonPayNFT = () => {
  const moonPayNFTModalOpen = useModalOpen(ApplicationModal.MOONPAY_NFT)
  const isWalletConnected = useIsWalletConnected()
  const walletAddress = useWalletAddress()
  const chainId = useChainId()
  const toggleMoonPayNFTModal = useMoonPayNFTModalToggle()
  const dispatch = useAppDispatch()

  const handleMoonPayNFTClick = useCallback(
    (tokenId: number, cartQuantity?: number) => {
      if (!isWalletConnected || walletAddress.length === 0) {
        toast.error('Please check your Wallet Connection First!', { toastId: 'Not Connected-3' })
        return
      }
      const moonPayNFTURL = getMoonPayNFTWidgetURL(chainId!, tokenId, walletAddress, cartQuantity || 0)
      dispatch(setMoonPayNFTURL(moonPayNFTURL))

      toggleMoonPayNFTModal()
    },
    [chainId, dispatch, isWalletConnected, toggleMoonPayNFTModal, walletAddress]
  )

  return { moonPayNFTModalOpen, toggleMoonPayNFTModal, handleMoonPayNFTClick }
}
