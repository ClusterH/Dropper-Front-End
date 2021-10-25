import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'

export const BIG_ZERO = new BigNumber(0)

export const ethersToSerializedBigNumber = (ethersBn: ethers.BigNumber): SerializedBigNumber =>
  ethersToBigNumber(ethersBn).toJSON()

export const ethersToBigNumber = (ethersBn: ethers.BigNumber): BigNumber => new BigNumber(ethersBn.toString())
