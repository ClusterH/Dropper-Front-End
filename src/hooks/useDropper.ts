import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { packList } from '../constants/dummy'
import { AppState } from '../state'
import { setIsLoading, setPackList } from '../state/dropper/reducer'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import { getPackUserBalance } from '../utils/callHelpers'
import { getAllMomentList } from '../utils/momentHelpers'
import { useGetContracts } from './useContract'
import { useVenlyAccount } from './useVenly'
import { useChainId, useIsWalletConnected, useWalletAddress } from './useWallet'

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
  const isWalletConnected = useIsWalletConnected()
  const walletAddress = useWalletAddress()
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
        return getPackUserBalance(dropperContract, walletAddress, _p.id)
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
  }, [dispatch, dropperContract, isWalletConnected, walletAddress])
}

export const useGetMomentList = () => {
  const isWalletConnected = useIsWalletConnected()
  const walletAddress = useWalletAddress()
  const chainId = useChainId()
  const venlyAccount = useVenlyAccount()
  const { dropperContract } = useGetContracts()

  const dispatch = useAppDispatch()

  useEffect(() => {
    const getMomentList = async () => {
      if (isWalletConnected === undefined || !chainId || !dropperContract) {
        return []
      }
      dispatch(setIsLoading(true))
      getAllMomentList(walletAddress, dropperContract, chainId, dispatch)
      // fetchMomentList(
      //   account,
      //   dropperMultiCallContract,
      //   chainId!,
      //   dispatch,
      //   momentList && momentList.length > 0 ? latest : undefined
      // )
    }
    getMomentList()
  }, [chainId, dispatch, dropperContract, isWalletConnected, venlyAccount.address, walletAddress])
}
