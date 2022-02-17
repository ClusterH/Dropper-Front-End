import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import DROPPER_LOGO_URL from '../assets/images/dropper-small-shaddow.png'
import { SupportedChainId } from '../constants/chains'
import { NetworkConnector } from './NetworkConnector'

const ALCHEMY_KEY = process.env.REACT_APP_ALCHEMY_KEY
const ALCHEMY_KEY_TEST = process.env.REACT_APP_ALCHEMY_KEY_TEST
const WALLETCONNECT_BRIDGE_URL = 'https://uniswap.bridge.walletconnect.org'

export const NETWORK_URLS: {
  [chainId in number]: string
} = {
  [SupportedChainId.MATIC]: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`,
  [SupportedChainId.MATIC_TESTNET]: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_KEY_TEST}`,
  [SupportedChainId.RINKEBY_TESTNET]: `https://polygon-mumbai.g.alchemy.com/v2/qMgMczZuXG71yJy9a16t3UrvNTFMQk8d`,
}

const SUPPORTED_CHAIN_IDS: SupportedChainId[] = [SupportedChainId.MATIC, SupportedChainId.MATIC_TESTNET, SupportedChainId.RINKEBY_TESTNET]

export const network = new NetworkConnector({
  urls: NETWORK_URLS,
  defaultChainId: 80001,
})

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
