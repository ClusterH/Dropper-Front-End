import { useEthers } from '@usedapp/core'
import { ethers } from 'ethers'
import { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { VENLY_CHAIN_ID } from '../constants/chains'
import { AppState } from '../state'
import { setUserCartList } from '../state/cart/reducer'
import { setIsUSDCApproved } from '../state/dropper/reducer'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import { TPackItem } from '../types'
import {
  approveUSDCMeta,
  approveUSDCMetaVenly,
  buyPackMeta,
  buyPackMetaVenly,
  openPackMeta,
  openPackMetaVenly,
} from '../utils/biconomyHelpers'
import { useGetContracts } from './useContract'
import { useGetVenlyConnect, useVenlyAccount } from './useVenly'
import { useGetWalletConnection } from './useWallet'

export const useApprove = () => {
  return useAppSelector((state: AppState) => state.dropper.isUSDCApproved)
}

export const useIsApproved = () => {
  const isWalletConnected = useGetWalletConnection()
  const venlyAccount = useVenlyAccount()
  const { account, chainId } = useEthers()
  const { collectionContract, usdcTokenContract } = useGetContracts()

  const dispatch = useAppDispatch()

  if (isWalletConnected === undefined || !collectionContract || !usdcTokenContract) {
    toast.error('Please check your Wallet Connection First!', { toastId: 'Not Connected' })
    return
  }

  try {
    // const allowanceAmount = await allowance(
    //   usdcTokenContract,
    //   collectionContract,
    //   isWalletConnected === 'venly' ? venlyAccount.address : account!
    // )
    // if (allowanceAmount.lte(0)) {
    dispatch(setIsUSDCApproved(true))
    // } else dispatch(setIsUSDCApproved(true))
  } catch (e) {
    console.error(e)
  }
}

export const useApproveUSDCMeta = () => {
  const isWalletConnected = useGetWalletConnection()
  const venlyAccount = useVenlyAccount()
  const venlyConnect = useGetVenlyConnect()
  const { account, chainId } = useEthers()
  const { collectionContract, usdcTokenContract } = useGetContracts()

  const handleApprove = useCallback(async () => {
    if (isWalletConnected === undefined || !collectionContract || !usdcTokenContract) {
      toast.error('Please check your Wallet Connection First!', { toastId: 'Not Connected-2' })
      setIsUSDCApproved(false)
      return false
    }
    const walletProvider = new ethers.providers.Web3Provider(window.ethereum!)
    try {
      const status =
        isWalletConnected === 'venly'
          ? await approveUSDCMetaVenly(venlyAccount, venlyConnect!, VENLY_CHAIN_ID, usdcTokenContract)
          : await approveUSDCMeta(account!, walletProvider, chainId!, usdcTokenContract)

      if (status) {
        toast.success('Successfully Approved, You can buy the Pack now')
        return true
      } else {
        toast.warn('Approve Failed!')
        return false
      }
    } catch (e: any) {
      toast.error(`Approve Failed! ${e.message}`)
      setIsUSDCApproved(false)
      return false
    }
  }, [account, chainId, collectionContract, usdcTokenContract, isWalletConnected, venlyAccount, venlyConnect])

  return { onApprove: handleApprove }
}

export const useBuyPackMeta = () => {
  const isWalletConnected = useGetWalletConnection()
  const venlyAccount = useVenlyAccount()
  const venlyConnect = useGetVenlyConnect()
  const { account, chainId } = useEthers()
  const { collectionContract, usdcTokenContract } = useGetContracts()

  const handleBuyPack = useCallback(
    async (cartList: TPackItem[], currentTotalPrice: number) => {
      console.log(isWalletConnected, collectionContract)
      if (isWalletConnected === undefined || !collectionContract || !usdcTokenContract) {
        toast.error('Please check your wallet Connection First!')
        return false
      }

      // try {
      //   const usdcBalance: BigNumber = await getUSDCBalance(
      //     usdcTokenContract,
      //     isWalletConnected === 'venly' ? venlyAccount.address : account!
      //   )
      //   if (getBalanceNumber(usdcBalance, 6) < currentTotalPrice) {
      //     toast.error('Insufficient USDC Balance to your wallet')
      //     return false
      //   }
      // } catch (e: any) {
      //   toast.error(e.message)
      //   return false
      // }
      const walletProvider = new ethers.providers.Web3Provider(window.ethereum!)
      try {
        const _calls = cartList.map(async (_p) => {
          if (_p.cartQuantity > 0)
            return isWalletConnected === 'venly'
              ? await buyPackMetaVenly(venlyAccount, venlyConnect!, VENLY_CHAIN_ID, _p.id, _p.cartQuantity, collectionContract)
              : await buyPackMeta(account!, walletProvider, chainId!, _p.id, _p.cartQuantity, collectionContract)
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
    [account, chainId, collectionContract, usdcTokenContract, isWalletConnected, venlyAccount, venlyConnect]
  )
  return { onBuyPackMeta: handleBuyPack }
}

export const useOpenPackMeta = () => {
  const isWalletConnected = useGetWalletConnection()
  const venlyAccount = useVenlyAccount()
  const venlyConnect = useGetVenlyConnect()
  const { account, chainId } = useEthers()
  const { collectionContract } = useGetContracts()

  const handleOpenPack = useCallback(
    async (packId: number) => {
      if (isWalletConnected === undefined) {
        toast.error('Please check your Wallet Connection First!', { toastId: 'Not Connected-4' })
        return
      }

      const walletProvider = new ethers.providers.Web3Provider(window.ethereum!)

      try {
        return isWalletConnected === 'venly'
          ? await openPackMetaVenly(venlyAccount, venlyConnect!, VENLY_CHAIN_ID, packId, collectionContract)
          : await openPackMeta(account!, walletProvider, chainId!, packId, collectionContract)
      } catch (e) {
        console.info(e)
      }
    },
    [account, chainId, collectionContract, isWalletConnected, venlyAccount, venlyConnect]
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

  useIsApproved()

  const isUSDCApproved = useApprove()

  const dispatch = useAppDispatch()
  const cartList = useCartList()
  const { onBuyPackMeta } = useBuyPackMeta()
  const { onApprove } = useApproveUSDCMeta()
  const history = useHistory()
  const { account } = useEthers()

  useEffect(() => {
    const total = cartList.map((pack) => pack.price * pack.cartQuantity).reduce((a, b) => a + b, 0)
    setCurrentTotalPrice(total)
  }, [cartList])

  const BuyPackProcess = async () => {
    try {
      setPendingTx(true)
      const status = await onBuyPackMeta(cartList, currentTotalPrice)
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

  const ApprovingUSDC = async () => {
    try {
      setIsLoading(true)
      const status = await onApprove()
      setIsLoading(false)

      dispatch(setIsUSDCApproved(status))
    } catch (e) {
      setPendingTx(false)
    }
  }

  return { account, cartList, pendingTx, isLoading, currentTotalPrice, isUSDCApproved, BuyPackProcess, ApprovingUSDC }
}
