import BigNumber from 'bignumber.js'
import { useCallback, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import { packList } from '../constants/dummy'
import { useCollectionContext } from '../contexts/CollectionContext'
import { getProviderOrSigner } from '../utils'
import { BIG_ZERO, getBalanceNumber } from '../utils/bigNumber'
import {
  approve,
  buyPacks,
  isApprovedForAll,
  openPacks,
  allowance,
  approveUSDC,
  getUSDCBalance,
  getMaticBalanace,
  getGasPrice,
} from '../utils/callHelpers'
import { estimateGas } from '../utils/estimateGas'
import { getSimpleRPCProvider } from '../utils/simpleRPCProvider'
import { isSupportedNetwork } from '../utils/validateChainID'
import { useGetCollectionContract, useGetDropperContract, useGetUSDCTokenContract } from './useContract'
import { useActiveWeb3React } from './useWeb3'

export const useAllowanceUSDC = async () => {
  const { account, chainId } = useActiveWeb3React()
  const collectionContract = useGetCollectionContract()
  const usdcTokenContract = useGetUSDCTokenContract()

  const allowanceAmount = await useMemo(async () => {
    if (!account || isSupportedNetwork(chainId) === false || !collectionContract || !usdcTokenContract) {
      return undefined
    } else {
      try {
        const res = await allowance(usdcTokenContract, collectionContract, account)
        return res
      } catch (e) {
        console.error(e)
        return undefined
      }
    }
  }, [account, chainId, collectionContract, usdcTokenContract])

  return allowanceAmount
}

export const useIsApproved = async () => {
  const { setIsUSDCApproved } = useCollectionContext()

  const allowanceAmount = await useAllowanceUSDC()
  console.log(allowanceAmount)
  if (allowanceAmount === undefined) {
    toast.error('Please check your Wallet Connection First!', { toastId: 'Not Connected' })
    setIsUSDCApproved(false)
    return
  } else if (allowanceAmount.lte(0)) {
    toast.info('Please Approve USDC From Your Wallet First!', { toastId: 'UnApprove Warning' })
    setIsUSDCApproved(false)
    return
  } else {
    setIsUSDCApproved(true)
  }
  return
}

export const useApproveUSDC = () => {
  const { account, chainId } = useActiveWeb3React()
  const { setIsUSDCApproved } = useCollectionContext()

  const collectionContract = useGetCollectionContract()
  const usdcTokenContract = useGetUSDCTokenContract()

  const handleApprove = useCallback(async () => {
    if (!account || isSupportedNetwork(chainId) === false || !collectionContract || !usdcTokenContract) {
      toast.error('Please check your Wallet Connection First!', { toastId: 'Not Connected-2' })
      setIsUSDCApproved(false)
      return false
    }

    try {
      const status = await approveUSDC(usdcTokenContract, collectionContract, account)
      if (status) {
        toast.success('Successfully Approved, You can buy the Pack now')
        setIsUSDCApproved(true)
        return true
      } else {
        toast.warn('Approve Failed!')
        setIsUSDCApproved(false)
        return false
      }
    } catch (e: any) {
      toast.error(`Approve Failed! ${e.message}`)
      setIsUSDCApproved(false)
      return false
    }
  }, [account, chainId, collectionContract, setIsUSDCApproved, usdcTokenContract])

  return { onApprove: handleApprove }
}

export const useBuyPack = (packId: number, quantity = 1) => {
  const { account, chainId } = useActiveWeb3React()

  const collectionContract = useGetCollectionContract()
  const usdcTokenContract = useGetUSDCTokenContract()

  const handleBuyPack = useCallback(
    async (packId: number, quantity: number) => {
      if (!account || isSupportedNetwork(chainId) === false || !collectionContract || !usdcTokenContract) {
        toast.error('Please check your wallet Connection First!')
        return false
      }

      try {
        const usdcBalance: BigNumber = await getUSDCBalance(usdcTokenContract, account)
        if (getBalanceNumber(usdcBalance) < packList[packId - 1].price) {
          toast.error('Insufficient USDC Balance to your wallet')
          return false
        }
      } catch (e: any) {
        toast.error(e.message)
        return false
      }

      try {
        // const simpleRPCProvider = getSimpleRPCProvider(chainId!)
        // const maticBalance = await getMaticBalanace(simpleRPCProvider, account)
        // const estimateGasPrice = await estimateGas(collectionContract, 'buyPacks', [packId, 1])
        // console.log(estimateGasPrice)

        // if (Number(maticBalance) < Number(estimateGasPrice.toString())) {
        //   toast.error('Insufficient Matic Balance to make transaction')
        //   return false
        // }

        const res = await buyPacks(collectionContract!, packId, quantity)
        if (res) {
          toast.success('Successfully Bought the Pack')
          return true
        } else {
          toast.error('Buy Pack Failed')
          return false
        }
      } catch (e: any) {
        toast.error(e.message)
        return false
      }
    },
    [account, chainId, collectionContract, usdcTokenContract]
  )
  return { onBuyPack: handleBuyPack }
}

export const useOpenPackWithApprove = (packId: number, quantity = 1) => {
  const { account, chainId } = useActiveWeb3React()
  const collectionContract = useGetCollectionContract()
  const dropperContract = useGetDropperContract()

  const handleOpenPack = useCallback(
    async (packId: number, quantity: number) => {
      if (!account || isSupportedNetwork(chainId) === false || dropperContract === null || collectionContract === null)
        return undefined
      const estimateGasPrice = await estimateGas(collectionContract, 'openPacks', [packId, 1])

      const isApproved = await isApprovedForAll(dropperContract, collectionContract, account)
      if (!isApproved) {
        const status = await approve(dropperContract, collectionContract, account)
        if (status) {
          try {
            const res = await openPacks(collectionContract, packId, quantity, account, estimateGasPrice)
            return res
          } catch (e) {
            console.info(e)
          }
        }
      } else {
        const res = await openPacks(collectionContract, packId, quantity, account, estimateGasPrice)
        return res
      }
    },
    [account, chainId, collectionContract, dropperContract]
  )
  return { onOpenPack: handleOpenPack }
}
