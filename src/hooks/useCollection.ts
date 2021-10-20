import { useCallback, useMemo } from 'react'
import { packList } from '../constants/dummy'
import { approve, buyPacks, getPackBalance, isApprovedForAll, openPacks } from '../utils/callHelpers'
import { useGetCollectionContract, useGetDropperContract } from './useContract'
import { useActiveWeb3React } from './useWeb3'

export const useBuyPack = (packId: number, quantity = 1) => {
  const collectionContract = useGetCollectionContract()

  const handleBuyPack = useCallback(
    async (packId: number, quantity: number) => {
      const txHash = await buyPacks(collectionContract!, packId, quantity)
      console.info(txHash)
    },
    [collectionContract]
  )
  return { onBuyPack: handleBuyPack }
}

export const useOpenPackWithApprove = (packId: number, quantity = 1) => {
  const { account } = useActiveWeb3React()
  const collectionContract = useGetCollectionContract()
  const dropperContract = useGetDropperContract()

  const handleOpenPack = useCallback(
    async (packId: number, quantity: number) => {
      if (!account || dropperContract === null || collectionContract === null) return undefined
      const isApproved = await isApprovedForAll(dropperContract, collectionContract, account)
      if (!isApproved) {
        const status = await approve(dropperContract, collectionContract, account)
        if (status) {
          try {
            const res = await openPacks(collectionContract, packId, quantity, account)
            return res
          } catch (e) {
            console.info(e)
          }
        }
      } else {
        const res = await openPacks(collectionContract, packId, quantity, account)
        return res
      }
    },
    [account, collectionContract, dropperContract]
  )
  return { onOpenPack: handleOpenPack }
}
