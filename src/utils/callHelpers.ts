import { BigNumber } from '@ethersproject/bignumber'
import { JsonRpcProvider, JsonRpcSigner, Web3Provider } from '@ethersproject/providers'
import { Provider } from 'ethcall'
import { Contract, ethers } from 'ethers'
import DROPPER_ABI from '../abis/dropper.json'
import { NETWORK_URLS } from '../connectors'
import { TRANSFER_BATCH_FILTER } from '../constants/blockNumber'
import { SupportedChainId } from '../constants/chains'
import { getDropperAddress } from './addressHelpers'
import { getSimpleRPCProvider } from './simpleRPCProvider'
import { toast } from 'react-toastify'

export const isApprovedForAll = async (dropperContract: Contract, collectionContract: Contract, account: string) => {
  return dropperContract.isApprovedForAll(account, collectionContract.address)
}

export const approve = async (dropperContract: Contract, collectionContract: Contract, account: string) => {
  const txHash = await dropperContract.setApprovalForAll(collectionContract.address, true)
  const receipt = await txHash.wait()
  return receipt.status
}

export const allowance = async (usdcTokenContract: Contract, collectionContract: Contract, account: string) => {
  const res = await usdcTokenContract.allowance(account, collectionContract.address)
  return res
}

export const approveUSDC = async (usdcTokenContract: Contract, collectionContract: Contract, account: string) => {
  const txHash = await usdcTokenContract.approve(collectionContract.address, ethers.constants.MaxUint256)

  const receipt = await txHash.wait()
  return receipt.status
}

export const getMaticBalanace = async (provider: JsonRpcProvider, account: string) => {
  const maticBalance = await provider.getBalance(account)
  return ethers.utils.formatEther(maticBalance)
}

export const getUSDCBalance = async (usdcTokenContract: Contract, account: string) => {
  const balance = await usdcTokenContract.balanceOf(account)
  return balance
}

export const getGasPrice = async (provider: Web3Provider | JsonRpcSigner) => {
  const feeData = await provider.getFeeData()
  return ethers.utils.formatUnits(feeData.gasPrice!)
}

export const getLatestBlockNumber = async (provider: JsonRpcProvider) => {
  const blockNumber = await provider.getBlockNumber()
  return blockNumber
}

export const getMultiCall = async (calls: any, chainId: number) => {
  const ethCallProvider = new Provider()
  const simpleProvider = getSimpleRPCProvider(chainId)
  await ethCallProvider.init(simpleProvider)
  return await ethCallProvider.all(calls)
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
  const txHash = await contract.buyPacks(packId, quantity, { gasLimit: 600000 })
  const receipt = await txHash.wait()

  if (receipt.status) {
    toast.success(`Successfully Bought the ${quantity} Pack #${packId}`)
  } else toast.error(`Buy Pack #${packId} Failed`)

  return receipt.status
}

export const getPackUserBalance = async (contract: Contract, account: string, packId: number) => {
  const txHash = await contract.balanceOf(account, packId)
  return txHash
}

export const getPack = async (contract: Contract, packId: number) => {
  const txHash = await contract.getPack(packId)
  return txHash
}

export const openPacks = async (contract: Contract, packId: number, account: string, gasPrice: BigNumber) => {
  const txHash = await contract.openPacks(packId, { from: account, gasLimit: gasPrice })
  const receipt = await txHash.wait()

  return receipt.status
}

export const getMomentIds = async (account: string, chainId: SupportedChainId) => {
  const provider = getSimpleRPCProvider(chainId)
  const ens = new ethers.Contract(getDropperAddress(chainId), DROPPER_ABI, provider)
  const filterOption = { ...TRANSFER_BATCH_FILTER[chainId] }
  const eventFilter = {
    ...filterOption.eventFilter,
    topics: [...filterOption.eventFilter.topics, ethers.utils.hexZeroPad(account, 32)],
  }
  const filter = { ...filterOption, eventFilter }
  const events = await ens.queryFilter(filter.eventFilter, filter.fromBlock, filter.toBlock)
  const ids: Array<BigNumber> = []

  events.map((item: any) => ids.push(...item.args?.ids))

  return ids
}

export const getTokenURI = async (contract: Contract, momentId: BigNumber) => {
  const tokenURI = await contract.uri(momentId)
  return tokenURI.toString()
}

export const getMomentsWithId = async (contract: Contract, momentId: string) => {
  const res = await contract.getMoment(momentId)
  return res
}
