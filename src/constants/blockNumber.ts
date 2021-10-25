import { EventFilter } from 'ethers'
import { getDropperAddress } from '../utils/addressHelpers'
import { SupportedChainId } from './chains'

type BlockNumberMap = { [chainId: number]: number }

export const START_BLOCK_NUMBER: BlockNumberMap = {
  [SupportedChainId.MATIC]: 20465396,
  [SupportedChainId.MATIC_TESTNET]: 20468373,
}

type TEventFilter = { fromBlock: number | string; toBlock: number | string; eventFilter: EventFilter }
export type EventFilterMap = { [chainId: number]: TEventFilter }

export const TRANSFER_BATCH_FILTER = {
  [SupportedChainId.MATIC]: {
    fromBlock: 20501900,
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
    fromBlock: 20510039,
    toBlock: 'latest',
    eventFilter: {
      address: getDropperAddress(SupportedChainId.MATIC_TESTNET),
      topics: [
        '0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb',
        '0x000000000000000000000000f3e0524520a789e455d0b15814dce7e733e8e2bc',
        '0x0000000000000000000000000000000000000000000000000000000000000000',
      ],
    },
  },
}
