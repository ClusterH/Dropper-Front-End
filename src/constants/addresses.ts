import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

export const DROPPER_CONTRACT_ADDRESSES: AddressMap = {
  [SupportedChainId.MATIC]: '0x6e2Ad9f6dCf6F85b6cC1A5c7238fBE327640FB31',
  [SupportedChainId.MATIC_TESTNET]: '0x36737300d17090de9c3A431bC5fe4b7C47ACB401',
  [SupportedChainId.RINKEBY_TESTNET]: '0x1CECdB185e26bE53ae0Da331cb53E6fBeCc2e2b7',
}

export const COLLECTION_CONTRACT_ADDRESSES: AddressMap = {
  [SupportedChainId.MATIC]: '0xA02f0FA7eb52fba2e6aD47A4F0B759E0E34F4b61',
  [SupportedChainId.MATIC_TESTNET]: '0xEeB78956A61542e9eD8ec90D9912453dAfB41cCD',
  [SupportedChainId.RINKEBY_TESTNET]: '0x05B51E2749d68e8a31df327c5ca51Df061227523',
}

export const USDC_TOKEN_ADDRESSES: AddressMap = {
  [SupportedChainId.MATIC]: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  [SupportedChainId.MATIC_TESTNET]: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  [SupportedChainId.RINKEBY_TESTNET]: '0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b',
}

export const MULTICALL_CONTRACT_ADDRESSES: AddressMap = {
  [SupportedChainId.MATIC]: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
  [SupportedChainId.MATIC_TESTNET]: '0x01Be6F002893b7bed5baE00b10EC2094AcfFC64c',
  [SupportedChainId.RINKEBY_TESTNET]: '0x01Be6F002893b7bed5baE00b10EC2094AcfFC64c',
}

// Verifying Dropper
// Pass - Verified: https://mumbai.polygonscan.com/address/0xed4157DB2FeD63058afc654169898741f2e43A9B#code
// Verifying Collection
// Pass - Verified: https://mumbai.polygonscan.com/address/0x8C51D6227086affAd0E0a7D6f3442d461C5dA72A#code

// Verifying Dropper
// Pass - Verified: https://rinkeby.etherscan.io/address/0x1CECdB185e26bE53ae0Da331cb53E6fBeCc2e2b7#code
// Verifying Collection
// Pass - Verified: https://rinkeby.etherscan.io/address/0x05B51E2749d68e8a31df327c5ca51Df061227523#code

// Verifying Dropper
// Already Verified: https://mumbai.polygonscan.com/address/0x9d380E4c08eB32Eeb80e8000D0b61ec3f0b11278#code
// Verifying Collection
// Pass - Verified: https://mumbai.polygonscan.com/address/0xC09Eb88A4Dc9259986f89f0ba61D407F5b9efC9c#code
