import { useCallback, useMemo } from 'react'
import { packList } from '../constants/dummy'
import { buyPacks, openPacks, getPackBalance, approve, isApprovedForAll } from '../utils/callHelpers'
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

export const useGetPackBalance = () => {
  const collectionContract = useGetCollectionContract()
  const { account } = useActiveWeb3React()

  const packBalances = useMemo(async () => {
    if (!account || collectionContract === null) return []
    //handle multi calls at once as manually if in case transactions are not so much
    const _calls = packList.map((_p) => {
      return getPackBalance(collectionContract, account, _p.id)
    })

    const response = await Promise.all(_calls).then((value) => {
      return value
    })

    return packList.map((pack, index) => ({
      ...pack,
      balance: response[index].toString(),
    }))
  }, [account, collectionContract])

  return packBalances
}

export const useOpenPackWithApprove = (packId: number, quantity = 1) => {
  const collectionContract = useGetCollectionContract()
  const { account } = useActiveWeb3React()
  const dropperContract = useGetDropperContract()

  const handleOpenPack = useCallback(
    async (packId: number, quantity: number) => {
      if (!account || dropperContract === null || collectionContract === null) return undefined
      const isApproved = await isApprovedForAll(dropperContract, collectionContract, account)
      console.log('handle Approve==>>', isApproved)
      if (!isApproved) {
        const status = await approve(dropperContract, collectionContract, account)
        if (status) {
          try {
            const res = await openPacks(collectionContract, packId, quantity, account)
            console.info(res)
          } catch (e) {
            console.info(e)
          }
        }
      } else {
        const txHash = await openPacks(collectionContract, packId, quantity, account)
        console.info(txHash)
      }
    },
    [account, collectionContract, dropperContract]
  )
  return { onOpenPack: handleOpenPack }
}
