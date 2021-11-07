import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

export const DROPPER_CONTRACT_ADDRESSES: AddressMap = {
  [SupportedChainId.MATIC]: '0x9d35b676A80C44702c77A3e49F10E257Fc64B9eF',
  [SupportedChainId.MATIC_TESTNET]: '0xed4157DB2FeD63058afc654169898741f2e43A9B',
}

export const COLLECTION_CONTRACT_ADDRESSES: AddressMap = {
  [SupportedChainId.MATIC]: '0x6F24a254b7D303E9833bD25f0388Cd2b16b52a4E',
  [SupportedChainId.MATIC_TESTNET]: '0x8C51D6227086affAd0E0a7D6f3442d461C5dA72A',
}

export const USDC_TOKEN_ADDRESSES: AddressMap = {
  [SupportedChainId.MATIC]: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  [SupportedChainId.MATIC_TESTNET]: '0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e',
}

export const MULTICALL_CONTRACT_ADDRESSES: AddressMap = {
  [SupportedChainId.MATIC]: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
  [SupportedChainId.MATIC_TESTNET]: '0x01Be6F002893b7bed5baE00b10EC2094AcfFC64c',
}

// Verifying Dropper
// Pass - Verified: https://mumbai.polygonscan.com/address/0xed4157DB2FeD63058afc654169898741f2e43A9B#code
// Verifying Collection
// Pass - Verified: https://mumbai.polygonscan.com/address/0x8C51D6227086affAd0E0a7D6f3442d461C5dA72A#code
