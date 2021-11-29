import {
  COLLECTION_CONTRACT_ADDRESSES,
  DROPPER_CONTRACT_ADDRESSES,
  MULTICALL_CONTRACT_ADDRESSES,
  USDC_TOKEN_ADDRESSES,
} from '../constants/addresses'

export const getDropperAddress = (chainId: number) => {
  return DROPPER_CONTRACT_ADDRESSES[chainId]
}

export const getCollectionAddress = (chainId: number) => {
  return COLLECTION_CONTRACT_ADDRESSES[chainId]
}

export const getUSDCAddress = (chainId: number) => {
  return USDC_TOKEN_ADDRESSES[chainId]
}

export const getMulticallAddress = (chainId: number) => {
  return MULTICALL_CONTRACT_ADDRESSES[chainId]
}
