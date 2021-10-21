import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

export const DROPPER_CONTRACT_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0xB1f350CFb31B79E64020B399484e73890EbE8543',
  [SupportedChainId.RINKEBY]: '0x89CC86f41FdFd57a7F37C0931d3e248ef03482DD',
  [SupportedChainId.MATIC]: '',
  [SupportedChainId.MATIC_TESTNET]: '0x9aB84Aece7b5bF65Bb0FCA22f56b7C875c739D93',
}

export const COLLECTION_CONTRACT_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x0c6F25c8935427086C9670F550F95e8d6Df68bbA',
  [SupportedChainId.RINKEBY]: '0x556c483C922D7CE7b91fEEBbd16A170CbA06FF62',
  [SupportedChainId.MATIC]: '',
  [SupportedChainId.MATIC_TESTNET]: '0xF0588f87670d59D60f9eD31CAB49dccA21BbaA56',
}

export const USDC_TOKEN_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  [SupportedChainId.RINKEBY]: '0xeb8f08a975ab53e34d8a0330e0d34de942c95926 ',
  [SupportedChainId.MATIC]: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  [SupportedChainId.MATIC_TESTNET]: '0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e',
}
