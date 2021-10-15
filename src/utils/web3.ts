import { Contract } from '@ethersproject/contracts'
import { toast } from 'react-toastify'
import { UnsupportedChainIdError } from '@web3-react/core'
import Web3 from 'web3'
import { NETWORK_URLS } from '../connectors'

const payableAmount = (packId: number) => {
  if (packId === 1) return '0x16345785D8A0000'
  else if (packId === 2) return '0x2C68AF0BB140000'
  else if (packId === 3) return '0x429D069189E0000'
}

export const buyPacks = async (contract: Contract, parkId: number, quantity = 1) => {
  const txHash = await contract.buyPacks(parkId, quantity, { value: payableAmount(parkId) })
  const receipt = await txHash.wait()

  return receipt.status
}
