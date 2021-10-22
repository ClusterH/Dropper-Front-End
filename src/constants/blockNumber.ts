import { EventFilter } from 'ethers'
import { getDropperAddress } from '../utils/addressHelpers'
import { SupportedChainId } from './chains'

type BlockNumberMap = { [chainId: number]: number }

export const START_BLOCK_NUMBER: BlockNumberMap = {
  // [SupportedChainId.MAINNET]: 0,
  [SupportedChainId.RINKEBY]: 0,
  [SupportedChainId.MATIC]: 20465396,
  [SupportedChainId.MATIC_TESTNET]: 20468373,
}

type TEventFilter = { fromBlock: number | string; toBlock: number | string; eventFilter: EventFilter }
export type EventFilterMap = { [chainId: number]: TEventFilter }

export const TRANSFER_BATCH_FILTER = {
  [SupportedChainId.MAINNET]: {
    fromBlock: 0,
    toBlock: 'latest',
    eventFilter: {
      address: '0xB1f350CFb31B79E64020B399484e73890EbE8543',
      topics: [
        '0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb',
        '0x0000000000000000000000006778f6dd63f7a355bd8d6aa933934fae214aa615',
        '0x0000000000000000000000000000000000000000000000000000000000000000',
      ],
    },
  },
  [SupportedChainId.RINKEBY]: {
    fromBlock: 9497947,
    toBlock: 'latest',
    eventFilter: {
      address: getDropperAddress(SupportedChainId.RINKEBY),
      topics: [
        '0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb',
        '0x000000000000000000000000556c483c922d7ce7b91feebbd16a170cba06ff62',
        '0x0000000000000000000000000000000000000000000000000000000000000000',
      ],
    },
  },
  [SupportedChainId.MATIC]: {
    fromBlock: 20465396,
    toBlock: 'latest',
    eventFilter: {
      address: getDropperAddress(SupportedChainId.MATIC),
      topics: [
        '0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb',
        '0x0000000000000000000000006778f6dd63f7a355bd8d6aa933934fae214aa615',
        '0x0000000000000000000000000000000000000000000000000000000000000000',
      ],
    },
  },
  [SupportedChainId.MATIC_TESTNET]: {
    fromBlock: 20468373,
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
