import { useEthers } from '@usedapp/core'
import { useEffect } from 'react'
import { VENLY_CHAIN_ID } from '../constants/chains'
import { setContracts } from '../state/application/reducer'
import { useAppDispatch } from '../state/hooks'
import { getBiconomy } from '../utils/biconomyHelpers'
import { isSupportedNetwork } from '../utils/validateChainID'
import { useVenlyAccount } from './useVenly'
import { useGetWalletConnection } from './useWallet'

export const useInitBiconomy = () => {
  const { account, chainId } = useEthers()
  const venlyAccount = useVenlyAccount()
  const isWalletConnected = useGetWalletConnection()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const initBiconomy = async (chainId: number, userAddress: string) => {
      const { collectionContract, dropperContract, usdcTokenContract } = await getBiconomy(chainId, userAddress)
      dispatch(setContracts({ collectionContract, dropperContract, usdcTokenContract }))
    }

    if (isWalletConnected === 'venly' || (isWalletConnected === 'injected' && isSupportedNetwork(chainId))) {
      initBiconomy(
        isWalletConnected === 'venly' ? VENLY_CHAIN_ID : chainId!,
        isWalletConnected === 'venly' ? venlyAccount.address : account!
      )
    } else {
      console.info('Please check your network connection')
      return
    }
  }, [dispatch, isWalletConnected])
}
