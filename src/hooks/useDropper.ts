import { useEffect } from 'react'
import { packList } from '../constants/dummy'
import { AppState } from '../state'
import { setIsLoading, setPackList } from '../state/dropper/reducer'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import { getMultiCall } from '../utils/callHelpers'
import { fetchMomentList } from '../utils/momentHelpers'
import { isSupportedNetwork } from '../utils/validateChainID'
import { useGetDropperMultiCallContract } from './useContract'
import { useActiveWeb3React } from './useWeb3'

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
  const { account, chainId } = useActiveWeb3React()
  const dropperMultiCallContract = useGetDropperMultiCallContract()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchPackBalance = async () => {
      if (!account || dropperMultiCallContract === null || isSupportedNetwork(chainId) === false) return []
      //handle multi calls at once as manually if in case transactions are not so much
      const _calls = packList.map((_p) => {
        return dropperMultiCallContract.balanceOf(account, _p.id)
      })

      const response = await getMultiCall(_calls, chainId!)

      const packListWithBalance = packList
        .map((pack, index) => ({
          ...pack,
          balance: response[index].toString(),
        }))
        .filter((pack) => Number(pack.balance) > 0)

      dispatch(setPackList(packListWithBalance))
    }

    fetchPackBalance()
  }, [account, chainId, dispatch, dropperMultiCallContract])
}

export const useGetMomentList = () => {
  const { account, chainId, library } = useActiveWeb3React()
  const dropperMultiCallContract = useGetDropperMultiCallContract()
  const momentList = useMomentList()
  const latest = useLatestBlockNumber()

  const dispatch = useAppDispatch()

  useEffect(() => {
    const getMomentList = async () => {
      if (!account || dropperMultiCallContract === null || isSupportedNetwork(chainId) === false) return []
      if (!momentList || momentList.length === 0) dispatch(setIsLoading(true))
      fetchMomentList(
        account,
        dropperMultiCallContract,
        chainId!,
        dispatch,
        momentList && momentList.length > 0 ? latest : undefined
      )
    }
    getMomentList()
  }, [account, chainId, dispatch, dropperMultiCallContract, library])
}
