import { useCallback } from 'react'
import BigNumber from 'bignumber.js'
import { approve, buyPacks, isApprovedForAll, openPacks, allowance, approveUSDC } from '../utils/callHelpers'
import { useGetCollectionContract, useGetDropperContract, useGetUSDCTokenContract } from './useContract'
import { useActiveWeb3React } from './useWeb3'

export const useBuyPack = (packId: number, quantity = 1) => {
  const { account } = useActiveWeb3React()
  const collectionContract = useGetCollectionContract()
  const usdcTokenContract = useGetUSDCTokenContract()

  const handleBuyPack = useCallback(
    async (packId: number, quantity: number) => {
      const allowanceAmount = await allowance(usdcTokenContract!, collectionContract!, account!)
      if (Number(allowanceAmount.toString()) === 0) {
        const status = await approveUSDC(usdcTokenContract!, collectionContract!, account!)
        if (status) {
          try {
            const res = await buyPacks(collectionContract!, packId, quantity)
            console.info(res)
            return res
          } catch (e) {
            console.info(e)
            return false
          }
        } else return false
      } else {
        try {
          const res = await buyPacks(collectionContract!, packId, quantity)
          console.info(res)
          return res
        } catch (e) {
          console.info(e)
          return false
        }
      }
    },
    [account, collectionContract, usdcTokenContract]
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
