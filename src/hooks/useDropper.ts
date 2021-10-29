import { useCallback, useEffect, useMemo } from 'react'
import { packList } from '../constants/dummy'
import { useMomentContext } from '../contexts/MomentContext'
import { usePackContext } from '../contexts/PackContext'
import { AppState } from '../state'
import { setMomentList, setPackList } from '../state/dropper/reducer'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import { getMomentIds, getTokenURI, getPackUserBalance } from '../utils/callHelpers'
import { momentGenerator } from '../utils/momentHelpers'
import { isSupportedNetwork } from '../utils/validateChainID'
import { useGetDropperContract } from './useContract'
import { useActiveWeb3React } from './useWeb3'

export const usePackList = () => {
  return useAppSelector((state: AppState) => state.dropper.userPackList)
}

export const useMomentList = () => {
  return useAppSelector((state: AppState) => state.dropper.userMomentList)
}

export const useGetPackList = () => {
  console.log('getPackList===>>>')
  const { account, chainId } = useActiveWeb3React()
  const dropperContract = useGetDropperContract()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchPackBalance = async () => {
      console.log('getPackList===>>>')

      if (!account || dropperContract === null || isSupportedNetwork(chainId) === false) return []
      //handle multi calls at once as manually if in case transactions are not so much
      const _calls = packList.map(async (_p) => {
        return await getPackUserBalance(dropperContract, account, _p.id)
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
  }, [account, chainId, dispatch, dropperContract])
}

export const useGetMomentList = () => {
  const { account, chainId } = useActiveWeb3React()
  const dropperContract = useGetDropperContract()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchMomentList = async () => {
      if (!account || isSupportedNetwork(chainId) === false) return []
      const momentIDs = await getMomentIds(account!, chainId!)
      const _calls = momentIDs.map((_id) => {
        return getTokenURI(dropperContract!, _id)
      })

      const momentURIs = await Promise.all(_calls).then((value) => {
        return value
      })
      const moments = await Promise.all(momentGenerator(dropperContract!, momentIDs, momentURIs))
      dispatch(setMomentList(moments))
    }
    fetchMomentList()
  }, [account, chainId, dispatch, dropperContract])
}
