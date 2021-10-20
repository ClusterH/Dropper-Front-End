import { useMemo } from 'react'
import { packList } from '../constants/dummy'
import { useMomentContext } from '../contexts/MomentContext'
import { getMomentIds, getTokenURI, getPackBalance } from '../utils/callHelpers'
import { momentGenerator } from '../utils/momentHelpers'
import { useGetDropperContract } from './useContract'
import { useActiveWeb3React } from './useWeb3'

export const useGetPackList = () => {
  const dropperContract = useGetDropperContract()
  const { account } = useActiveWeb3React()

  const packListWithBalance = useMemo(async () => {
    if (!account || dropperContract === null) return []
    //handle multi calls at once as manually if in case transactions are not so much
    const _calls = packList.map((_p) => {
      return getPackBalance(dropperContract, account, _p.id)
    })

    const response = await Promise.all(_calls).then((value) => {
      return value
    })

    return packList.map((pack, index) => ({
      ...pack,
      balance: response[index].toString(),
    }))
  }, [account, dropperContract])

  return packListWithBalance
}

export const useGetMomentList = () => {
  const { account } = useActiveWeb3React()
  const dropperContract = useGetDropperContract()
  const { setMoments } = useMomentContext()

  useMemo(async () => {
    const momentIDs = await getMomentIds(dropperContract!, account!)
    const _calls = momentIDs.map((_id) => {
      return getTokenURI(dropperContract!, _id.toString())
    })

    const momentURIs = await Promise.all(_calls).then((value) => {
      return value
    })
    const moments = await Promise.all(momentGenerator(momentIDs, momentURIs))
    setMoments(moments)
  }, [account, dropperContract, setMoments])
}
