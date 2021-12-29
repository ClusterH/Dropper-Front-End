import { useEthers } from '@usedapp/core'
import { useCallback, useEffect, useMemo } from 'react'
import { VENLY_CHAIN_ID } from '../constants/chains'
import { AppState } from '../state'
import { setUserBalance } from '../state/application/reducer'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import { getMaticBalanace, getUSDCBalance } from '../utils/callHelpers'
import { getSimpleRPCProvider } from '../utils/simpleRPCProvider'
import { useGetContracts } from './useContract'
import { useIsVenly, useVenlyAccount } from './useVenly'

export const useBalance = () => {
  return useAppSelector((state: AppState) => state.application.userBalance)
}

export const useGetWalletConnection = () => {
  const isVenly = useIsVenly()
  const venlyAccount = useVenlyAccount()
  const { account, active } = useEthers()

  return useMemo(() => {
    return isVenly && venlyAccount.address.length > 0 ? 'venly' : account && active ? 'injected' : undefined
  }, [account, active, isVenly, venlyAccount])
}

export const useGetWalletBalance = () => {
  const isWalletConnected = useGetWalletConnection()

  const { account, chainId } = useEthers()
  const venlyAccount = useVenlyAccount()
  const { usdcTokenContract } = useGetContracts()
  const userBalance = useBalance()
  const dispatch = useAppDispatch()

  const handleGetBalance = useCallback(() => {
    console.log('handleGetBalance=body==>>>', isWalletConnected)
    if (isWalletConnected === undefined) {
      alert('Network not connected')
      return
    }

    const provider = getSimpleRPCProvider(isWalletConnected === 'venly' ? VENLY_CHAIN_ID : chainId!)
    getMaticBalanace(provider, isWalletConnected === 'venly' ? venlyAccount.address : account!)
      .then((maticBalance) => {
        console.log(maticBalance)
        dispatch(setUserBalance({ ...userBalance, maticBalance }))
      })
      .catch((err) => {
        console.log(err)
      })
    // getUSDCBalance(usdcTokenContract!, isWalletConnected === 'venly' ? venlyAccount.address : account!)
    //   .then((usdcBalance) => {
    //     console.log(usdcBalance)
    //     dispatch(setUserBalance({ ...userBalance, usdcBalance }))
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }, [dispatch, isWalletConnected])

  return { handleGetBalance }
}
