import { useEffect, useMemo } from 'react'
import { getAPIKey } from '../utils/biconomyHelpers'
import { getSimpleRPCProvider } from '../utils/simpleRPCProvider'
import { isSupportedNetwork } from '../utils/validateChainID'
import { useGetCollectionContract } from './useContract'
import { useActiveWeb3React } from './useWeb3'
import { Biconomy } from '@biconomy/mexa'
import { ethers } from 'ethers'
import { getCollectionAddress, getUSDCAddress } from '../utils/addressHelpers'
import COLLECTION_ABI from '../abis/collection.json'
import USDC_ABI from '../abis/usdc.json'

export const useInitBiconomy = () => {
  const { account, chainId } = useActiveWeb3React()

  return useMemo(() => {
    if (typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask && isSupportedNetwork(chainId)) {
      const jsonRpcProvider = getSimpleRPCProvider(chainId!)

      const biconomy = new Biconomy(jsonRpcProvider, {
        walletProvider: window.ethereum,
        apiKey: getAPIKey(chainId!),
        debug: true,
      })

      const contractInterface = new ethers.utils.Interface(COLLECTION_ABI)
      const usdcInterface = new ethers.utils.Interface(USDC_ABI)

      const contract = new ethers.Contract(
        getCollectionAddress(chainId!),
        contractInterface,
        biconomy.getSignerByAddress(account)
      )

      const usdcTokenContract = new ethers.Contract(
        getUSDCAddress(chainId!),
        usdcInterface,
        biconomy.getSignerByAddress(account)
      )

      biconomy
        .onEvent(biconomy.READY, async () => {
          console.info('biconomy ready')
        })
        .onEvent(biconomy.ERROR, (error: any, message: string) => {
          console.log(message)
          console.log(error)
        })
      return { contract, usdcTokenContract }
    } else {
      console.info('Please check your network connection')
      return { contract: undefined, usdcTokenContract: undefined }
    }
  }, [account, chainId])
}
