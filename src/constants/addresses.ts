import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.ROPSTEN]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.GOERLI]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.RINKEBY]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}

export const CONTRACT_ADDRESSES = {
  dropper: {
    4: '0xB1f350CFb31B79E64020B399484e73890EbE8543',
  },
  collection: {
    4: '0x0c6F25c8935427086C9670F550F95e8d6Df68bbA',
  },
}
