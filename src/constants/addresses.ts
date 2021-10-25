import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

export const DROPPER_CONTRACT_ADDRESSES: AddressMap = {
  [SupportedChainId.MATIC]: '0x1378EfffDF1D56566CD87c3367bF041faA841AeA',
  [SupportedChainId.MATIC_TESTNET]: '0xa9A8948e4878D977520336A17fC192E8f1A57bA0',
}

export const COLLECTION_CONTRACT_ADDRESSES: AddressMap = {
  [SupportedChainId.MATIC]: '0x9dD1dC7d8d85864Bfb313Cf4B35AFC556D02bAF2',
  [SupportedChainId.MATIC_TESTNET]: '0xf3e0524520a789E455D0B15814dCe7E733E8e2bC',
}

export const USDC_TOKEN_ADDRESSES: AddressMap = {
  [SupportedChainId.MATIC]: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  [SupportedChainId.MATIC_TESTNET]: '0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e',
}
