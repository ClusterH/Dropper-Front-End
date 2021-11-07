import BigNumber from 'bignumber.js'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import COLLECTION_ABI from '../abis/collection.json'
import { useCollectionContext } from '../contexts/CollectionContext'
import { AppState } from '../state'
import { setUserCartList } from '../state/cart/reducer'
import { setIsUSDCApproved } from '../state/dropper/reducer'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import { TPackItem } from '../types'
import { getCollectionAddress } from '../utils/addressHelpers'
import { getBalanceNumber } from '../utils/bigNumber'
import {
  allowance,
  approve,
  approveUSDC,
  buyPacks,
  getUSDCBalance,
  isApprovedForAll,
  openPacks,
} from '../utils/callHelpers'
import { estimateGas } from '../utils/estimateGas'
import multicall from '../utils/multicall'
import { isSupportedNetwork } from '../utils/validateChainID'
import {
  useGetCollectionContract,
  useGetDropperContract,
  useGetMultiCallContract,
  useGetUSDCTokenContract,
} from './useContract'
import { useActiveWeb3React } from './useWeb3'
import { Biconomy } from '@biconomy/mexa'

export const useApprove = () => {
  return useAppSelector((state: AppState) => state.dropper.isUSDCApproved)
}

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
        return null
      }
    }
  }, [account, chainId, collectionContract, usdcTokenContract])

  return allowanceAmount
}

export const useIsApproved = async () => {
  const { account, chainId } = useActiveWeb3React()
  const collectionContract = useGetCollectionContract()
  const usdcTokenContract = useGetUSDCTokenContract()
  const isApproved = useApprove()
  const dispatch = useAppDispatch()

  if (!account || isSupportedNetwork(chainId) === false || !collectionContract || !usdcTokenContract) {
    toast.error('Please check your Wallet Connection First!', { toastId: 'Not Connected' })
    return
  }

  try {
    const allowanceAmount = await allowance(usdcTokenContract, collectionContract, account)
    if (allowanceAmount.lte(0)) {
      dispatch(setIsUSDCApproved(false))
    } else dispatch(setIsUSDCApproved(true))
  } catch (e) {
    console.error(e)
  }
}

export const useApproveUSDC = () => {
  const { account, chainId } = useActiveWeb3React()
  // const { setIsUSDCApproved } = useCollectionContext()

  const collectionContract = useGetCollectionContract()
  const usdcTokenContract = useGetUSDCTokenContract()
  const dispatch = useAppDispatch()

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
        dispatch(setIsUSDCApproved(true))
        return true
      } else {
        toast.warn('Approve Failed!')
        dispatch(setIsUSDCApproved(false))
        return false
      }
    } catch (e: any) {
      toast.error(`Approve Failed! ${e.message}`)
      setIsUSDCApproved(false)
      return false
    }
  }, [account, chainId, collectionContract, dispatch, usdcTokenContract])

  return { onApprove: handleApprove }
}

export const useBuyPack = () => {
  const { account, chainId, library } = useActiveWeb3React()

  const collectionContract = useGetCollectionContract()
  const usdcTokenContract = useGetUSDCTokenContract()
  const multicallContract = useGetMultiCallContract()

  const handleBuyPack = useCallback(
    async (cartList: TPackItem[], currentTotalPrice: number) => {
      if (
        !account ||
        isSupportedNetwork(chainId) === false ||
        !collectionContract ||
        !usdcTokenContract ||
        !multicallContract
      ) {
        toast.error('Please check your wallet Connection First!')
        return false
      }

      try {
        const usdcBalance: BigNumber = await getUSDCBalance(usdcTokenContract, account)
        if (getBalanceNumber(usdcBalance) < currentTotalPrice) {
          toast.error('Insufficient USDC Balance to your wallet')
          return false
        }
      } catch (e: any) {
        toast.error(e.message)
        return false
      }

      try {
        const _calls = cartList.map(async (_p) => {
          if (_p.cartQuantity > 0) return await buyPacks(collectionContract!, _p.id, _p.cartQuantity)
        })

        const response = await Promise.all(_calls).then((value) => {
          return value
        })

        console.log(response)
        if (response.filter((status) => status).length > 0) {
          return true
        } else {
          return false
        }
      } catch (e: any) {
        toast.error(e.message)
        return false
      }
    },
    [account, chainId, collectionContract, multicallContract, usdcTokenContract]
  )
  return { onBuyPack: handleBuyPack }
}

export const useOpenPackWithApprove = () => {
  const { account, chainId } = useActiveWeb3React()
  const collectionContract = useGetCollectionContract()
  const dropperContract = useGetDropperContract()

  const handleOpenPack = useCallback(
    async (packId: number) => {
      if (!account || isSupportedNetwork(chainId) === false || dropperContract === null || collectionContract === null)
        return undefined
      const estimateGasPrice = await estimateGas(collectionContract, 'openPacks', [packId])

      const isApproved = await isApprovedForAll(dropperContract, collectionContract, account)
      if (!isApproved) {
        const status = await approve(dropperContract, collectionContract, account)
        if (status) {
          try {
            const res = await openPacks(collectionContract, packId, account, estimateGasPrice)
            return res
          } catch (e) {
            console.info(e)
          }
        }
      } else {
        const res = await openPacks(collectionContract, packId, account, estimateGasPrice)
        return res
      }
    },
    [account, chainId, collectionContract, dropperContract]
  )
  return { onOpenPack: handleOpenPack }
}

export const useCartList = () => {
  return useAppSelector((state: AppState) => state.cart.userCartList)
}

export const usePackItem = (packId: number, cartQuantity: number) => {
  const [count, setCount] = useState<number>(cartQuantity)
  const [isCardOver, setIsCardOver] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setUserCartList({ packId, cartQuantity: count }))
  }, [count, dispatch, packId])

  return { count, setCount, isCardOver, setIsCardOver }
}

export const usePackListBox = () => {
  const [pendingTx, setPendingTx] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [currentTotalPrice, setCurrentTotalPrice] = useState<number>(0)

  const isUSDCApproved = useApprove()

  const dispatch = useAppDispatch()
  const cartList = useCartList()
  const { onBuyPack } = useBuyPack()
  const { onApprove } = useApproveUSDC()
  const history = useHistory()
  const { account } = useActiveWeb3React()

  useEffect(() => {
    const total = cartList.map((pack) => pack.price * pack.cartQuantity).reduce((a, b) => a + b, 0)
    setCurrentTotalPrice(total)
  }, [cartList])

  const BuyPackProcess = async () => {
    try {
      setPendingTx(true)
      const status = await onBuyPack(cartList, currentTotalPrice)
      setPendingTx(false)

      if (status) {
        dispatch(setUserCartList(undefined))
        window.localStorage.setItem('selectedTab', JSON.stringify('packs'))
        history.push('/inventory')
      }
    } catch (e) {
      setPendingTx(false)
    }
  }

  const ApprovingUSDC = async () => {
    try {
      setIsLoading(true)
      const status = await onApprove()
      setIsLoading(false)

      if (status) dispatch(setIsUSDCApproved(true))
    } catch (e) {
      setPendingTx(false)
    }
  }

  return { account, cartList, pendingTx, isLoading, currentTotalPrice, isUSDCApproved, BuyPackProcess, ApprovingUSDC }
}
