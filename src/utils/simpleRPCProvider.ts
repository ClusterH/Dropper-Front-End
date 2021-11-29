import { ethers } from 'ethers'
import { NETWORK_URLS } from '../connectors'
import { SupportedChainId } from '../constants/chains'

export const getSimpleRPCProvider = (chainId: SupportedChainId) => {
  return new ethers.providers.JsonRpcProvider(NETWORK_URLS[chainId])
}
