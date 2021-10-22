import { useMemo } from 'react'
import { packList } from '../constants/dummy'
import { useMomentContext } from '../contexts/MomentContext'
import { usePackContext } from '../contexts/PackContext'
import { getMomentIds, getTokenURI, getPackUserBalance } from '../utils/callHelpers'
import { momentGenerator } from '../utils/momentHelpers'
import { useGetDropperContract } from './useContract'
import { useActiveWeb3React } from './useWeb3'

export const useGetPackList = () => {
  const { account } = useActiveWeb3React()
  const dropperContract = useGetDropperContract()
  const { setPacks } = usePackContext()

  useMemo(async () => {
    if (!account || dropperContract === null) return []
    //handle multi calls at once as manually if in case transactions are not so much
    const _calls = packList.map(async (_p) => {
      return await getPackUserBalance(dropperContract, account, _p.id)
    })

    const response = await Promise.all(_calls).then((value) => {
      return value
    })

    const packListWithBalance = packList.map((pack, index) => ({
      ...pack,
      balance: response[index].toString(),
    }))
    setPacks(packListWithBalance)
  }, [account, dropperContract, setPacks])
}

export const useGetMomentList = () => {
  const { account, chainId } = useActiveWeb3React()
  const dropperContract = useGetDropperContract()
  const { setMoments } = useMomentContext()

  useMemo(async () => {
    const momentIDs = await getMomentIds(account!, chainId!)
    const _calls = momentIDs.map((_id) => {
      return getTokenURI(dropperContract!, _id.toString())
    })

    const momentURIs = await Promise.all(_calls).then((value) => {
      return value
    })
    const moments = await Promise.all(momentGenerator(dropperContract!, momentIDs, momentURIs))
    setMoments(moments)
  }, [account, chainId, dropperContract, setMoments])
}
