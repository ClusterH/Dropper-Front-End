import { useMemo } from 'react'
import { useMomentContext } from '../contexts/MomentContext'
import { getMomentIds, getTokenURI } from '../utils/callHelpers'
import { momentGenerator } from '../utils/momentHelpers'
import { useGetDropperContract } from './useContract'
import { useActiveWeb3React } from './useWeb3'

export const useGetMomentList = () => {
  const { account } = useActiveWeb3React()
  const dropperContract = useGetDropperContract()
  const { setMoments } = useMomentContext()

  const moments = useMemo(async () => {
    const momentIDs = await getMomentIds(dropperContract!, account!)
    const _calls = momentIDs.map((_id) => {
      return getTokenURI(dropperContract!, _id.toString())
    })

    const momentURIs = await Promise.all(_calls).then((value) => {
      return value
    })
    const moments = momentGenerator(momentIDs, momentURIs)
    return moments
  }, [account, dropperContract])

  moments.then((m) => setMoments(m))
}
