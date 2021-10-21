// import { Contract } from '@ethersproject/contracts'
import { AddressZero } from '@ethersproject/constants'
import { BigNumber } from '@ethersproject/bignumber'
import { Contract, ethers } from 'ethers'
import { SupportedChainId } from '../constants/chains'
import { getDropperAddress } from './addressHelpers'
import DROPPER_ABI from '../abis/dropper.json'
import { NETWORK_URLS } from '../connectors'
import { ZERO_ADDRESS } from '../constants/misc'

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
  if (packId === 1) return '0x989680'
  //0x16345785D8A0000
  else if (packId === 2) return '0x1312D00'
  //0x2C68AF0BB140000
  else if (packId === 3) return '0x1C9C380' //0x429D069189E0000
}

export const buyPacks = async (contract: Contract, packId: number, quantity = 1) => {
  const txHash = await contract.buyPacks(packId, quantity, { value: payableAmount(packId) })
  const receipt = await txHash.wait()

  return receipt.status
}

export const getPackBalance = async (contract: Contract, account: string, packId: number) => {
  const txHash = await contract.balanceOf(account, packId)
  return txHash
}

export const openPacks = async (contract: Contract, packId: number, quantity = 1, account: string) => {
  const txHash = await contract.openPacks(packId, quantity, { from: account })
  const receipt = await txHash.wait()

  return receipt.status
}

export const getMomentIds = async (account: string, chainId: SupportedChainId) => {
  const provider = new ethers.providers.JsonRpcProvider(NETWORK_URLS[chainId])
  const ens = new ethers.Contract(getDropperAddress(chainId), DROPPER_ABI, provider)

  const events = await ens.queryFilter({ address: getDropperAddress(chainId) }, 0, 'latest')
  const filteredEvents = events.filter(
    (item: any) => item.event === 'TransferBatch' && item.args?.from === AddressZero && item.args?.to === account
  )
  const ids: Array<BigNumber> = []
  filteredEvents.map((item: any) => ids.push(...item.args?.ids))

  return ids
}

export const getTokenURI = async (contract: Contract, momentId: string) => {
  const tokenURI = await contract.uri(momentId)
  return tokenURI.toString()
}
