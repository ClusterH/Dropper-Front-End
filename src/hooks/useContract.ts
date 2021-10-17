import { Contract } from '@ethersproject/contracts'
import { useMemo } from 'react'
import COLLECTION_ABI from '../abis/collection.json'
import DROPPER_ABI from '../abis/dropper.json'
import ENS_PUBLIC_RESOLVER_ABI from '../abis/ens-public-resolver.json'
import ENS_ABI from '../abis/ens-registrar.json'
import {
  COLLECTION_CONTRACT_ADDRESSES,
  DROPPER_CONTRACT_ADDRESSES,
  ENS_REGISTRAR_ADDRESSES,
} from '../constants/addresses'
import { getContract } from '../utils'
import { useActiveWeb3React } from './useWeb3'

// returns null on errors
export function useContract<T extends Contract = Contract>(
  addressOrAddressMap: string | { [chainId: number]: string } | undefined,
  ABI: any,
  withSignerIfPossible = true
): T | null {
  const { library, account, chainId } = useActiveWeb3React()

  return useMemo(() => {
    if (!addressOrAddressMap || !ABI || !library || !chainId) return null
    let address: string | undefined
    if (typeof addressOrAddressMap === 'string') address = addressOrAddressMap
    else address = addressOrAddressMap[chainId]
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

export function useENSRegistrarContract(withSignerIfPossible?: boolean) {
  return useContract(ENS_REGISTRAR_ADDRESSES, ENS_ABI, withSignerIfPossible)
}

export function useENSResolverContract(address: string | undefined, withSignerIfPossible?: boolean): Contract | null {
  return useContract(address, ENS_PUBLIC_RESOLVER_ABI, withSignerIfPossible)
}
