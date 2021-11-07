import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { SupportedChainId } from '../constants/chains'
import getLibrary from '../utils/getLibrary'
import { NetworkConnector } from './NetworkConnector'
import DROPPER_LOGO_URL from '../assets/images/dropper-small-shaddow.png'

const INFURA_KEY = process.env.REACT_APP_INFURA_KEY
const WALLETCONNECT_BRIDGE_URL = 'https://uniswap.bridge.walletconnect.org'

if (typeof INFURA_KEY === 'undefined') {
  throw new Error(`REACT_APP_INFURA_KEY must be a defined environment variable`)
}

export const NETWORK_URLS: {
  [chainId in SupportedChainId]: string
} = {
  [SupportedChainId.MATIC]: `https://polygon-mainnet.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.MATIC_TESTNET]: `https://polygon-mumbai.infura.io/v3/${INFURA_KEY}`,
  // [SupportedChainId.MATIC_TESTNET]: `https://speedy-nodes-nyc.moralis.io/9640ff4c41285b3f8833ee7d/polygon/mumbai`,
}

const SUPPORTED_CHAIN_IDS: SupportedChainId[] = [SupportedChainId.MATIC, SupportedChainId.MATIC_TESTNET]

export const network = new NetworkConnector({
  urls: NETWORK_URLS,
  defaultChainId: 137,
})

let networkLibrary: Web3Provider | undefined
export function getNetworkLibrary(): Web3Provider {
  return (networkLibrary = networkLibrary ?? getLibrary(network.provider))
}

export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
})

export const walletconnect = new WalletConnectConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
  rpc: NETWORK_URLS,
  bridge: WALLETCONNECT_BRIDGE_URL,
  qrcode: true,
  pollingInterval: 15000,
})

// mainnet only
export const walletlink = new WalletLinkConnector({
  url: NETWORK_URLS[137],
  appName: 'Dropper',
  appLogoUrl: DROPPER_LOGO_URL,
})
