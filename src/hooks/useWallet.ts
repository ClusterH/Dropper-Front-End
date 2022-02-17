import { useEffect } from 'react'
import { AppState } from '../state'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import { setMaticBalance, setUSDCBalance } from '../state/wallet/reducer'
import { getMaticBalanace, getUSDCBalance } from '../utils/callHelpers'
import { getSimpleRPCProvider } from '../utils/simpleRPCProvider'
import { useGetContracts } from './useContract'

export const useWalletAddress = () => {
  return useAppSelector((state: AppState) => state.wallet.walletAddress)
}
export const useChainId = () => {
  return useAppSelector((state: AppState) => state.wallet.chainId)
}
export const useIsWalletConnected = () => {
  return useAppSelector((state: AppState) => state.wallet.isWalletConnected)
}
export const useMaticBalance = () => {
  return useAppSelector((state: AppState) => state.wallet.maticBalance)
}
export const useUSDCBalance = () => {
  return useAppSelector((state: AppState) => state.wallet.usdcBalance)
}

export const useGetWalletBalance = () => {
  const isWalletConnected = useIsWalletConnected()
  const walletAddress = useWalletAddress()
  const chainId = useChainId()

  const { usdcTokenContract } = useGetContracts()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const handleGetBalance = () => {
      if (isWalletConnected === undefined || walletAddress.length === 0 || !chainId || !usdcTokenContract) {
        return
      }

      const provider = getSimpleRPCProvider(chainId)
      getMaticBalanace(provider, walletAddress)
        .then((maticBalance) => {
          dispatch(setMaticBalance(maticBalance))
        })
        .catch((err) => {
          console.log(err)
        })
      getUSDCBalance(usdcTokenContract!, walletAddress)
        .then((usdcBalance) => {
          dispatch(setUSDCBalance(usdcBalance))
        })
        .catch((err) => {
          console.log(err)
        })
    }

    handleGetBalance()
  }, [chainId, dispatch, isWalletConnected, usdcTokenContract, walletAddress])
}
