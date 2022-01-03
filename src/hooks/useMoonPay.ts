import crypto from 'crypto'
import { useCallback, useMemo } from 'react'
import { toast } from 'react-toastify'
import { useModalOpen, useMoonPayModalToggle } from '../state/application/hook'
import { ApplicationModal } from '../state/application/reducer'
import { useChainId, useIsWalletConnected, useWalletAddress } from './useWallet'

export const useMoonPay = () => {
  const moonPayModalOpen = useModalOpen(ApplicationModal.MOONPAY)
  const isWalletConnected = useIsWalletConnected()
  const walletAddress = useWalletAddress()
  const chainId = useChainId()
  const toggleMoonPayModal = useMoonPayModalToggle()

  const MOONPAY_API_KEY = useMemo(
    () => (chainId === 137 ? process.env.REACT_APP_MOONPAY_API_KEY : process.env.REACT_APP_MOONPAY_API_KEY_TEST),
    [chainId]
  )
  const MOONPAY_SECRET_KEY = useMemo(
    () => (chainId === 137 ? process.env.REACT_APP_MOONPAY_SECRET_KEY : process.env.REACT_APP_MOONPAY_SECRET_KEY_TEST),
    [chainId]
  )

  const BASE_URL = useMemo(() => (chainId === 137 ? 'https://buy.moonpay.com' : 'https://buy-staging.moonpay.com'), [chainId])
  const MoonPayURL_Temp = useMemo(
    () =>
      `${BASE_URL}?apiKey=${MOONPAY_API_KEY}&defaultCurrencyCode=ETH&currencyCode=ETH&walletAddress=${walletAddress}&colorCode=%23ff0069&showWalletAddressForm=true`,
    [BASE_URL, MOONPAY_API_KEY, walletAddress]
  )

  const signature = useMemo(
    () => crypto.createHmac('sha256', MOONPAY_SECRET_KEY!).update(new URL(MoonPayURL_Temp).search).digest('base64'),
    [MOONPAY_SECRET_KEY, MoonPayURL_Temp]
  )
  const moonPayURL = useMemo(() => `${MoonPayURL_Temp}&signature=${encodeURIComponent(signature)}`, [MoonPayURL_Temp, signature])

  const handleMoonPayClick = useCallback(() => {
    if (!isWalletConnected || walletAddress.length === 0) {
      toast.error('Please check your Venly Wallet Connection First!', { toastId: 'Not Connected-3' })
      return
    }
    toggleMoonPayModal()
  }, [isWalletConnected, toggleMoonPayModal, walletAddress.length])

  return { moonPayModalOpen, moonPayURL, toggleMoonPayModal, handleMoonPayClick }
}
