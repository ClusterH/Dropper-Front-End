import { CONTRACT_ADDRESSES } from '../constants/addresses'
import { SupportedChainId } from '../constants/chains'

export const getDropperAddress = () => {
  return CONTRACT_ADDRESSES.dropper[SupportedChainId.RINKEBY]
}

export const getCollectionAddress = () => {
  return CONTRACT_ADDRESSES.collection[SupportedChainId.RINKEBY]
}
