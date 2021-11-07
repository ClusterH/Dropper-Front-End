import { Contract, ethers } from 'ethers'
import { Call } from '../types'
import MULTICALL_ABI from '../abis/multicall.json'
import { getMulticallAddress } from './addressHelpers'
import { getSimpleRPCProvider } from './simpleRPCProvider'
import { getProviderOrSigner } from '.'

const multicall = async <T = any>(calls: Call[], ABI: any, library: any, account: string): Promise<T> => {
  try {
    // const provider = getSimpleRPCProvider(80001)
    const multi = new ethers.Contract(getMulticallAddress(80001), MULTICALL_ABI, getProviderOrSigner(library, account))
    // const multi = getMulticallContract()
    const itf = new ethers.utils.Interface(ABI)

    const calldata = calls.map((call) => [call.address.toLowerCase(), itf.encodeFunctionData(call.name, call.params)])
    const { returnData } = await multi.aggregate(calldata)

    const res = returnData.map((call: any, i: number) => itf.decodeFunctionResult(calls[i].name, call))

    return res
  } catch (error: any) {
    throw new Error(error)
  }
}

export default multicall
