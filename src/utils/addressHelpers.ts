import {
  DROPPER_CONTRACT_ADDRESSES,
  COLLECTION_CONTRACT_ADDRESSES,
  MULTICALL_CONTRACT_ADDRESSES,
} from '../constants/addresses'

export const getDropperAddress = (chainId: number) => {
  return DROPPER_CONTRACT_ADDRESSES[chainId]
}

export const getCollectionAddress = (chainId: number) => {
  return COLLECTION_CONTRACT_ADDRESSES[chainId]
}

export const getMulticallAddress = (chainId: number) => {
  return MULTICALL_CONTRACT_ADDRESSES[chainId]
}
