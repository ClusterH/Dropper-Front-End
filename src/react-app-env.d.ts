/// <reference types="react-scripts" />
declare module '@metamask/jazzicon' {
  export default function (diameter: number, seed: number): HTMLElement
}

declare module '@biconomy/mexa'

interface Window {
  ethereum?: {
    isMetaMask?: true
    request: (...args: any[]) => Promise<void>
    on?: (...args: any[]) => void
    removeListener?: (...args: any[]) => void
  }
  web3?: Record<string, unknown>
  Biconomy: any
}

type SerializedBigNumber = string
