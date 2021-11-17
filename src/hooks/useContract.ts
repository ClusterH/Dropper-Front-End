import { Contract as MultiCallContract } from 'ethcall'
import { Contract } from 'ethers'
import { useMemo } from 'react'
import COLLECTION_ABI from '../abis/collection.json'
import DROPPER_ABI from '../abis/dropper.json'
import USDC_ABI from '../abis/usdc.json'
import MULTICALL_ABI from '../abis/multicall.json'
import EIP_2612_ABI from '../abis/eip_2612.json'
import {
  COLLECTION_CONTRACT_ADDRESSES,
  DROPPER_CONTRACT_ADDRESSES,
  MULTICALL_CONTRACT_ADDRESSES,
  USDC_TOKEN_ADDRESSES,
} from '../constants/addresses'
import { getContract, getMultiCallContract } from '../utils'
import { isSupportedNetwork } from '../utils/validateChainID'
import { useActiveWeb3React } from './useWeb3'

// returns null on errors
export function useContract<T extends Contract = Contract>(
  addressOrAddressMap: string | { [chainId: number]: string } | undefined,
  ABI: any,
  withSignerIfPossible = true
): T | null {
  const { library, account, chainId } = useActiveWeb3React()

  return useMemo(() => {
    if (!addressOrAddressMap || !ABI || !library || isSupportedNetwork(chainId) === false) return null
    let address: string | undefined
    if (typeof addressOrAddressMap === 'string') address = addressOrAddressMap
    else address = addressOrAddressMap[chainId!]
    if (!address) return null
    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
    } catch (error: any) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [addressOrAddressMap, ABI, library, chainId, withSignerIfPossible, account]) as T
}

export const useGetDropperContract = () => {
  return useContract(DROPPER_CONTRACT_ADDRESSES, DROPPER_ABI, true)
}

export const useGetCollectionContract = () => {
  return useContract(COLLECTION_CONTRACT_ADDRESSES, COLLECTION_ABI, true)
}

export const useGetUSDCTokenContract = () => {
  return useContract(USDC_TOKEN_ADDRESSES, USDC_ABI, false)
}

export const useGetMultiCallContract = () => {
  return useContract(MULTICALL_CONTRACT_ADDRESSES, MULTICALL_ABI, true)
}

export const useEIP2612Contract = (tokenAddress?: string): Contract | null => {
  return useContract(tokenAddress, EIP_2612_ABI, true)
}

/** ethcall multicall Contracts */
export function useMultiCallContract<T extends MultiCallContract = MultiCallContract>(
  addressOrAddressMap: string | { [chainId: number]: string } | undefined,
  ABI: any
): T | null {
  const { library, chainId } = useActiveWeb3React()

  return useMemo(() => {
    if (!addressOrAddressMap || !ABI || !library || isSupportedNetwork(chainId) === false) return null
    let address: string | undefined
    if (typeof addressOrAddressMap === 'string') address = addressOrAddressMap
    else address = addressOrAddressMap[chainId!]
    if (!address) return null
    try {
      return getMultiCallContract(address, ABI)
    } catch (error: any) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [addressOrAddressMap, ABI, library, chainId]) as T
}

export const useGetDropperMultiCallContract = () => {
  return useMultiCallContract(DROPPER_CONTRACT_ADDRESSES, DROPPER_ABI)
}

export const useGetCollectionMultiCallContract = () => {
  return useMultiCallContract(COLLECTION_CONTRACT_ADDRESSES, COLLECTION_ABI)
}
