import { ethers } from 'ethers'

export const getPaddedHexStrFromBN = (bn: ethers.BigNumber) => {
  const hexStr = ethers.utils.hexlify(bn)
  return ethers.utils.hexZeroPad(hexStr, 32)
}

export const getHexStrFromStr = (str: string) => {
  const strBytes = ethers.utils.toUtf8Bytes(str)
  return ethers.utils.hexlify(strBytes)
}
