import { Contract } from '@ethersproject/contracts'
import JSBI from 'jsbi'

export const isApprovedForAll = async (dropperContract: Contract, collectionContract: Contract, account: string) => {
  return dropperContract.isApprovedForAll(account, collectionContract.address)
}

export const approve = async (dropperContract: Contract, collectionContract: Contract, account: string) => {
  const txHash = await dropperContract.setApprovalForAll(collectionContract.address, true)
  const receipt = await txHash.wait()
  return receipt.status
}
// It is hard coded to get Pack price
const payableAmount = (packId: number) => {
  if (packId === 1) return '0x16345785D8A0000'
  else if (packId === 2) return '0x2C68AF0BB140000'
  else if (packId === 3) return '0x429D069189E0000'
}

export const buyPacks = async (contract: Contract, packId: number, quantity = 1) => {
  const txHash = await contract.buyPacks(packId, quantity, { value: payableAmount(packId) })
  const receipt = await txHash.wait()

  return receipt.status
}

export const getPackBalance = async (contract: Contract, account: string, packId: number) => {
  const txHash = await contract._balanceOf(account, packId)
  return txHash
}

export const openPacks = async (contract: Contract, packId: number, quantity = 1, account: string) => {
  const txHash = await contract.openPacks(packId, quantity, { from: account })
  const receipt = await txHash.wait()

  return receipt.status
}
