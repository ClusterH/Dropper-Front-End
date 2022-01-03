import { AbstractConnector } from '@web3-react/abstract-connector'
import INJECTED_ICON_URL from '../assets/images/arrow-right.svg'
import COINBASE_ICON_URL from '../assets/images/coinbaseWalletIcon.svg'
import METAMASK_ICON_URL from '../assets/images/metamask.png'
import WALLETCONNECT_ICON_URL from '../assets/images/walletConnectIcon.svg'
import VENLY_ICON_URL from '../assets/images/venly-icon.svg'
import { injected, walletconnect, walletlink } from '../connectors'

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconURL: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconURL: METAMASK_ICON_URL,
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D',
  },
  VENLY: {
    name: 'Venly Wallet',
    iconURL: VENLY_ICON_URL,
    description: 'Venly Wallet',
    href: null,
    color: '#010101',
  },
}
