import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AppState } from '../state'
import { setUserCartList } from '../state/cart/reducer'
import { setIsUSDCApproved } from '../state/dropper/reducer'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import { TPackItem } from '../types'
import { approveUSDCMexa, buyPackMeta, openPackMeta } from '../utils/biconomyHelpers'
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
import { isSupportedNetwork } from '../utils/validateChainID'
import { useInitBiconomy } from './useBiconomy'
import {
  useGetCollectionContract,
  useGetDropperContract,
  useGetMultiCallContract,
  useGetUSDCTokenContract,
} from './useContract'
import { useActiveWeb3React } from './useWeb3'

export const useApprove = () => {
  return useAppSelector((state: AppState) => state.dropper.isUSDCApproved)
}

export const useIsApproved = async () => {
  const { account, chainId } = useActiveWeb3React()
  const collectionContract = useGetCollectionContract()
  const usdcTokenContract = useGetUSDCTokenContract()
  const dispatch = useAppDispatch()

  if (!account || isSupportedNetwork(chainId) === false || !collectionContract || !usdcTokenContract) {
    toast.error('Please check your Wallet Connection First!', { toastId: 'Not Connected' })
    return
  }

  try {
    // const allowanceAmount = await allowance(usdcTokenContract, collectionContract, account)
    // if (allowanceAmount.lte(0)) {
    dispatch(setIsUSDCApproved(true))
    //   } else dispatch(setIsUSDCApproved(true))
  } catch (e) {
    console.error(e)
  }
}

export const useApproveUSDC = () => {
  const { account, chainId } = useActiveWeb3React()

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

export const useApproveUSDCMexa = () => {
  const { account, chainId } = useActiveWeb3React()
  const { usdcTokenContract } = useInitBiconomy()

  const handleApprove = useCallback(async () => {
    const walletProvider = new ethers.providers.Web3Provider(window.ethereum!)

    try {
      const status = await approveUSDCMexa(account!, walletProvider, chainId!, usdcTokenContract)
      return status
    } catch (e: any) {
      console.log(e)
      toast.error(e.message)
      return false
    }
  }, [account, chainId])

  return { onApproveMexa: handleApprove }
}

export const useBuyPack = () => {
  const { account, chainId } = useActiveWeb3React()

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
        if (getBalanceNumber(usdcBalance, 6) < currentTotalPrice) {
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

export const useBuyPackMexa = () => {
  const { account, chainId } = useActiveWeb3React()
  const usdcTokenContract = useGetUSDCTokenContract()
  const { contract } = useInitBiconomy()

  const handleBuyPack = useCallback(
    async (cartList: TPackItem[], currentTotalPrice: number) => {
      if (!account && !isSupportedNetwork(chainId)) {
        toast.error('Please check your wallet Connection First!')
        return false
      }

      // try {
      //   const usdcBalance: BigNumber = await getUSDCBalance(usdcTokenContract!, account!)
      //   if (getBalanceNumber(usdcBalance, 6) < currentTotalPrice) {
      //     toast.error('Insufficient USDC Balance to your wallet')
      //     return false
      //   }
      // } catch (e: any) {
      //   toast.error(e.message)
      //   return false
      // }

      const walletProvider = new ethers.providers.Web3Provider(window.ethereum!)
      const walletSigner = walletProvider.getSigner()

      try {
        const _calls = cartList.map(async (_p) => {
          if (_p.cartQuantity > 0)
            return await buyPackMeta(account!, walletSigner, chainId!, _p.id, _p.cartQuantity, contract)
        })

        const response = await Promise.all(_calls).then((value) => {
          return value
        })

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
    [account, chainId]
  )
  return { onBuyPackMexa: handleBuyPack }
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

export const useOpenPackMeta = () => {
  const { account, chainId } = useActiveWeb3React()
  const { contract } = useInitBiconomy()

  const handleOpenPack = useCallback(
    async (packId: number) => {
      if (!account || isSupportedNetwork(chainId) === false || contract === undefined) return undefined

      const walletProvider = new ethers.providers.Web3Provider(window.ethereum!)
      const walletSigner = walletProvider.getSigner()

      try {
        const res = await openPackMeta(account!, walletSigner, chainId!, packId, contract)
        return res
      } catch (e) {
        console.info(e)
      }
    },
    [account, chainId, contract]
  )
  return { onOpenPackMeta: handleOpenPack }
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
  const { onBuyPackMexa } = useBuyPackMexa()
  const { onApprove } = useApproveUSDC()
  const { onApproveMexa } = useApproveUSDCMexa()
  const history = useHistory()
  const { account } = useActiveWeb3React()

  useEffect(() => {
    const total = cartList.map((pack) => pack.price * pack.cartQuantity).reduce((a, b) => a + b, 0)
    setCurrentTotalPrice(total)
  }, [cartList])

  const BuyPackProcess = async (isMexa: boolean) => {
    try {
      setPendingTx(true)
      const status = isMexa
        ? await onBuyPackMexa(cartList, currentTotalPrice)
        : await onBuyPack(cartList, currentTotalPrice)
      setPendingTx(false)

      if (status) {
        dispatch(setUserCartList(undefined))
        window.localStorage.setItem('selectedTab', JSON.stringify('packs'))
        history.push('/inventory')
      }
    } catch (e) {
      console.log(e)
      setPendingTx(false)
    }
  }

  const ApprovingUSDC = async (isMexa: boolean) => {
    try {
      setIsLoading(true)
      const status = isMexa ? await onApproveMexa() : await onApprove()
      setIsLoading(false)

      if (status) dispatch(setIsUSDCApproved(true))
    } catch (e) {
      setPendingTx(false)
    }
  }

  return { account, cartList, pendingTx, isLoading, currentTotalPrice, isUSDCApproved, BuyPackProcess, ApprovingUSDC }
}
