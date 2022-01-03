import { useEffect } from 'react'
import { setContracts } from '../state/application/reducer'
import { useAppDispatch } from '../state/hooks'
import { getBiconomy } from '../utils/biconomyHelpers'
import { isSupportedNetwork } from '../utils/validateChainID'
import { useChainId, useIsWalletConnected, useWalletAddress } from './useWallet'

export const useInitBiconomy = () => {
  const isWalletConnected = useIsWalletConnected()
  const chainId = useChainId()
  const walletAddress = useWalletAddress()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const initBiconomy = async (chainId: number, userAddress: string) => {
      const { collectionContract, dropperContract, usdcTokenContract } = await getBiconomy(chainId, userAddress)
      dispatch(setContracts({ collectionContract, dropperContract, usdcTokenContract }))
    }

    if (isWalletConnected !== undefined && isSupportedNetwork(chainId) && walletAddress.length > 0) {
      initBiconomy(chainId!, walletAddress)
    } else {
      console.info('Please check your network connection')
      return
    }
  }, [chainId, dispatch, isWalletConnected, walletAddress])
}
