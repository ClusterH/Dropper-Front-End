import { useCallback } from 'react'
import { approve, isApprovedForAll } from '../utils/callHelpers'
import { isSupportedNetwork } from '../utils/validateChainID'
import { useGetCollectionContract, useGetDropperContract } from './useContract'
import { useEthers } from '@usedapp/core'

//Keep this hook if need to call approve only
export const useDropperApprove = () => {
  const { account, chainId } = useEthers()
  const dropperContract = useGetDropperContract()
  const collectionContract = useGetCollectionContract()

  const handleApprove = useCallback(async () => {
    try {
      if (!account || isSupportedNetwork(chainId) === false || dropperContract === null || collectionContract === null) return undefined
      const isApproved = await isApprovedForAll(dropperContract, collectionContract, account)

      if (isApproved) return true
      const tx = await approve(dropperContract, collectionContract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, chainId, collectionContract, dropperContract])

  return { onApprove: handleApprove }
}
