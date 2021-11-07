import { EventFilter } from 'ethers'
import { getDropperAddress } from '../utils/addressHelpers'
import { SupportedChainId } from './chains'

type BlockNumberMap = { [chainId: number]: number }

export const START_BLOCK_NUMBER: BlockNumberMap = {
  [SupportedChainId.MATIC]: 21033839,
  [SupportedChainId.MATIC_TESTNET]: 21108276,
}

type TEventFilter = { fromBlock: number | string; toBlock: number | string; eventFilter: EventFilter }
export type EventFilterMap = { [chainId: number]: TEventFilter }

export const TRANSFER_BATCH_FILTER = {
  [SupportedChainId.MATIC]: {
    fromBlock: 21033839,
    toBlock: 'latest',
    eventFilter: {
      address: getDropperAddress(SupportedChainId.MATIC),
      topics: [
        '0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb',
        '0x0000000000000000000000009dd1dc7d8d85864bfb313cf4b35afc556d02baf2',
        '0x0000000000000000000000000000000000000000000000000000000000000000',
      ],
    },
  },
  [SupportedChainId.MATIC_TESTNET]: {
    fromBlock: 21129024, // 20668896,
    toBlock: 'latest',
    eventFilter: {
      address: getDropperAddress(SupportedChainId.MATIC_TESTNET),
      topics: [
        '0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb',
        '0x0000000000000000000000008c51d6227086affad0e0a7d6f3442d461c5da72a',
        '0x0000000000000000000000000000000000000000000000000000000000000000',
      ],
    },
  },
}
