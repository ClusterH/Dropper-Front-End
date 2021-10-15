import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.RINKEBY]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}

export const DROPPER_CONTRACT_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0xB1f350CFb31B79E64020B399484e73890EbE8543',
  [SupportedChainId.RINKEBY]: '0xB1f350CFb31B79E64020B399484e73890EbE8543',
}

export const COLLECTION_CONTRACT_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x0c6F25c8935427086C9670F550F95e8d6Df68bbA',
  [SupportedChainId.RINKEBY]: '0x0c6F25c8935427086C9670F550F95e8d6Df68bbA',
}
