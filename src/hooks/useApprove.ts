import { useCallback } from 'react'
import { approve, isApprovedForAll } from '../utils/callHelpers'
import { useGetCollectionContract, useGetDropperContract } from './useContract'
import { useActiveWeb3React } from './useWeb3'

//Keep this hook if need to call approve only
export const useDropperApprove = () => {
  const { account } = useActiveWeb3React()
  const dropperContract = useGetDropperContract()
  const collectionContract = useGetCollectionContract()

  const handleApprove = useCallback(async () => {
    try {
      if (!account || dropperContract === null || collectionContract === null) return undefined
      const isApproved = await isApprovedForAll(dropperContract, collectionContract, account)

      if (isApproved) return true
      const tx = await approve(dropperContract, collectionContract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, collectionContract, dropperContract])

  return { onApprove: handleApprove }
}
