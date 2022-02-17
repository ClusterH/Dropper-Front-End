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
    fromBlock: 25043480,
    toBlock: 'latest',
    eventFilter: {
      address: getDropperAddress(SupportedChainId.MATIC),
      topics: [
        '0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb',
        '0x000000000000000000000000a02f0fa7eb52fba2e6ad47a4f0b759e0e34f4b61',
        '0x0000000000000000000000000000000000000000000000000000000000000000',
      ],
    },
  },
  [SupportedChainId.MATIC_TESTNET]: {
    fromBlock: 25028908, // 20668896,
    toBlock: 'latest',
    eventFilter: {
      address: getDropperAddress(SupportedChainId.MATIC_TESTNET),
      topics: [
        '0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb',
        '0x000000000000000000000000bb5f05d7f060c905c8f4ee6e70527132d4c21a71',
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
