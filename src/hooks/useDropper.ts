import { useEffect } from 'react'
import { packList } from '../constants/dummy'
import { AppState } from '../state'
import { setMomentList, setPackList } from '../state/dropper/reducer'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import { getDropperAddress } from '../utils/addressHelpers'
import { getMomentIds, getMultiCall } from '../utils/callHelpers'
import { getMomentId, momentGenerator } from '../utils/momentHelpers'
import multicall from '../utils/multicall'
import { isSupportedNetwork } from '../utils/validateChainID'
import { useGetDropperContract, useGetDropperMultiCallContract, useGetMultiCallContract } from './useContract'
import { useActiveWeb3React } from './useWeb3'
import DROPPER_ABI from '../abis/dropper.json'

export const usePackList = () => {
  return useAppSelector((state: AppState) => state.dropper.userPackList)
}

export const useMomentList = () => {
  return useAppSelector((state: AppState) => state.dropper.userMomentList)
}

export const useGetPackList = () => {
  const { account, chainId } = useActiveWeb3React()
  const dropperContract = useGetDropperContract()
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
  const multicallContract = useGetMultiCallContract()

  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchMomentList = async () => {
      if (!account || dropperMultiCallContract === null || isSupportedNetwork(chainId) === false) return []
      const momentIDs = await getMomentIds(account!, chainId!)
      const _calls = momentIDs.map((item) => {
        const { momentId } = getMomentId(item)
        return dropperMultiCallContract.getMoment(momentId)
      })
      const response = await getMultiCall(_calls, chainId!)

      const moments = await Promise.all(momentGenerator(response, momentIDs))
      dispatch(setMomentList(moments))
    }
    fetchMomentList()
  }, [account, chainId, dispatch, dropperMultiCallContract, library, multicallContract])
}
