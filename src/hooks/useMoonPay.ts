import crypto from 'crypto'
import { useCallback } from 'react'
import { toast } from 'react-toastify'
import { useModalOpen, useMoonPayModalToggle } from '../state/application/hook'
import { ApplicationModal } from '../state/application/reducer'
import { useVenlyAccount } from './useVenly'
import { useEthers } from '@usedapp/core'

export const useMoonPay = () => {
  const { chainId } = useEthers()
  const moonPayModalOpen = useModalOpen(ApplicationModal.MOONPAY)
  const venlyAccount = useVenlyAccount()
  const toggleMoonPayModal = useMoonPayModalToggle()

  const MOONPAY_API_KEY = chainId === 137 ? process.env.REACT_APP_MOONPAY_API_KEY : process.env.REACT_APP_MOONPAY_API_KEY_TEST
  const MOONPAY_SECRET_KEY = chainId === 137 ? process.env.REACT_APP_MOONPAY_SECRET_KEY : process.env.REACT_APP_MOONPAY_SECRET_KEY_TEST

  const BASE_URL = chainId === 137 ? 'https://buy.moonpay.com' : 'https://buy-staging.moonpay.com'
  const MoonPayURL_Temp = `${BASE_URL}?apiKey=${MOONPAY_API_KEY}&defaultCurrencyCode=ETH&currencyCode=ETH&walletAddress=${venlyAccount.address}&colorCode=%23ff0069&showWalletAddressForm=true`

  const signature = crypto.createHmac('sha256', MOONPAY_SECRET_KEY!).update(new URL(MoonPayURL_Temp).search).digest('base64')
  const moonPayURL = `${MoonPayURL_Temp}&signature=${encodeURIComponent(signature)}`

  const handleMoonPayClick = useCallback(() => {
    if (!venlyAccount.address || venlyAccount.address.length === 0) {
      toast.error('Please check your Venly Wallet Connection First!', { toastId: 'Not Connected-3' })
      return
    }
    toggleMoonPayModal()
  }, [toggleMoonPayModal, venlyAccount])

  return { moonPayModalOpen, moonPayURL, toggleMoonPayModal, handleMoonPayClick }
}
