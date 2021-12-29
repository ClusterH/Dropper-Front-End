import { EventFilter } from 'ethers'
import { getDropperAddress } from '../utils/addressHelpers'
import { SupportedChainId } from './chains'

type BlockNumberMap = { [chainId: number]: number }

export const START_BLOCK_NUMBER: BlockNumberMap = {
  [SupportedChainId.MATIC]: 21185397,
  [SupportedChainId.MATIC_TESTNET]: 21108276,
}

type TEventFilter = { fromBlock: number | string; toBlock: number | string; eventFilter: EventFilter }
export type EventFilterMap = { [chainId: number]: TEventFilter }

export const TRANSFER_BATCH_FILTER: any = {
  [SupportedChainId.MATIC]: {
    fromBlock: 21185397,
    toBlock: 'latest',
    eventFilter: {
      address: getDropperAddress(SupportedChainId.MATIC),
      topics: [
        '0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb',
        '0x000000000000000000000000e1b5b33e463d199dd81e5f785f4746e1d63ef655',
        '0x0000000000000000000000000000000000000000000000000000000000000000',
      ],
    },
  },
  [SupportedChainId.MATIC_TESTNET]: {
    fromBlock: 22969114, // 20668896,
    toBlock: 'latest',
    eventFilter: {
      address: getDropperAddress(SupportedChainId.MATIC_TESTNET),
      topics: [
        '0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb',
        '0x000000000000000000000000eeb78956a61542e9ed8ec90d9912453dafb41ccd',
        '0x0000000000000000000000000000000000000000000000000000000000000000',
      ],
    },
  },
  [SupportedChainId.RINKEBY_TESTNET]: {
    fromBlock: 9628237, // 20668896,
    toBlock: 'latest',
    eventFilter: {
      address: getDropperAddress(SupportedChainId.RINKEBY_TESTNET),
      topics: [
        '0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb',
        '0x0000000000000000000000008c51d6227086affad0e0a7d6f3442d461c5da72a',
        '0x0000000000000000000000000000000000000000000000000000000000000000',
      ],
    },
  },
}
