import { useCallback } from 'react'
import ABI from '../abis/collection.json'
import { COLLECTION_CONTRACT_ADDRESSES } from '../constants/addresses'
import { buyPacks } from '../utils/web3'
import { useContract } from './useContract'

export const useGetCollectionContract = () => {
  return useContract(COLLECTION_CONTRACT_ADDRESSES, ABI, true)
}

const useBuyPack = (parkId: number, quantity = 1) => {
  const collectionContract = useGetCollectionContract()

  const handleBuyPack = useCallback(
    async (parkId: number, quantity: number) => {
      const txHash = await buyPacks(collectionContract!, parkId, quantity)
      console.info(txHash)
    },
    [collectionContract]
  )
  return { onBuyPark: handleBuyPack }
}

export default useBuyPack
