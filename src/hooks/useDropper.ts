import { useEthers } from '@usedapp/core'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { VENLY_CHAIN_ID } from '../constants/chains'
import { packList } from '../constants/dummy'
import { AppState } from '../state'
import { setIsLoading, setPackList } from '../state/dropper/reducer'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import { getPackUserBalance } from '../utils/callHelpers'
import { getAllMomentList } from '../utils/momentHelpers'
import { useGetContracts } from './useContract'
import { useVenlyAccount } from './useVenly'
import { useGetWalletConnection } from './useWallet'

export const useLatestBlockNumber = () => {
  return useAppSelector((state: AppState) => state.dropper.latestBlockNumber)
}

export const useLoading = () => {
  return useAppSelector((state: AppState) => state.dropper.isLoading)
}

export const usePackList = () => {
  return useAppSelector((state: AppState) => state.dropper.userPackList)
}

export const useMomentList = () => {
  return useAppSelector((state: AppState) => state.dropper.userMomentList)
}

export const useGetPackList = () => {
  const isWalletConnected = useGetWalletConnection()
  const venlyAccount = useVenlyAccount()
  const { account, chainId } = useEthers()
  const { dropperContract } = useGetContracts()

  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchPackBalance = async () => {
      if (isWalletConnected === undefined || !dropperContract) {
        toast.error('Please check your wallet Connection First!', { toastId: 'Not Connected-5' })
        dispatch(setPackList([]))
        return []
      }
      //handle multi calls at once as manually if in case transactions are not so much
      const _calls = packList.map((_p) => {
        return getPackUserBalance(dropperContract, isWalletConnected === 'venly' ? venlyAccount.address : account!, _p.id)
      })

      const response = await Promise.all(_calls).then((value) => {
        return value
      })

      const packListWithBalance = packList
        .map((pack, index) => ({
          ...pack,
          balance: response[index].toString(),
        }))
        .filter((pack) => Number(pack.balance) > 0)

      dispatch(setPackList(packListWithBalance))
    }

    fetchPackBalance()
  }, [account, dispatch, dropperContract, isWalletConnected, venlyAccount.address])
}

export const useGetMomentList = () => {
  const isWalletConnected = useGetWalletConnection()
  const venlyAccount = useVenlyAccount()
  const { account, chainId } = useEthers()
  const { dropperContract } = useGetContracts()

  const dispatch = useAppDispatch()

  useEffect(() => {
    const getMomentList = async () => {
      if (isWalletConnected === undefined || !dropperContract) {
        return []
      }
      dispatch(setIsLoading(true))
      getAllMomentList(
        isWalletConnected === 'venly' ? venlyAccount.address : account!,
        dropperContract!,
        isWalletConnected === 'venly' ? VENLY_CHAIN_ID : chainId!,
        dispatch
      )
      // fetchMomentList(
      //   account,
      //   dropperMultiCallContract,
      //   chainId!,
      //   dispatch,
      //   momentList && momentList.length > 0 ? latest : undefined
      // )
    }
    getMomentList()
  }, [account, chainId, dispatch, dropperContract, isWalletConnected, venlyAccount.address])
}
