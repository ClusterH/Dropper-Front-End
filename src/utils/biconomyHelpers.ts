import { JsonRpcSigner } from '@ethersproject/providers'
import abi from 'ethereumjs-abi'
import { toBuffer } from 'ethereumjs-util'
import { BigNumber, ethers } from 'ethers'
import COLLECTION_ABI from '../abis/collection.json'
import USDC_ABI from '../abis/usdc.json'
import { SupportedChainId } from '../constants/chains'
import { getCollectionAddress, getUSDCAddress } from './addressHelpers'
import { getHexStrFromStr, getPaddedHexStrFromBN } from './hexStringHelpers'

export const BICONOMY_CONFIG = {
  [SupportedChainId.MATIC]: {
    apiKey: process.env.REACT_APP_BICONOMY_API_KEY,
  },
  [SupportedChainId.MATIC_TESTNET]: {
    apiKey: process.env.REACT_APP_BICONOMY_API_KEY_TEST,
  },
  [SupportedChainId.RINKEBY_TESTNET]: {
    apiKey: process.env.REACT_APP_BICONOMY_API_KEY_RINKEBY,
  },
}

export const getAPIKey = (chainId: SupportedChainId) => {
  return BICONOMY_CONFIG[chainId].apiKey
}

export const getSignature = async (hexData: string, signer: JsonRpcSigner) => {
  const flatSig = await signer.signMessage(ethers.utils.arrayify(ethers.utils.keccak256(hexData)))
  const splitSig = ethers.utils.splitSignature(flatSig)
  return splitSig
}

const constructMetaTransactionMessage = (
  nonce: number,
  salt: number,
  functionSignature: any,
  contractAddress: string
) => {
  return abi.soliditySHA3(
    ['uint256', 'address', 'uint256', 'bytes'],
    [nonce, contractAddress, salt, toBuffer(functionSignature)]
  )
}

const getSignatureParameters = (signature: any) => {
  if (!ethers.utils.isHexString(signature)) {
    throw new Error('Given value "'.concat(signature, '" is not a valid hex string.'))
  }
  const r = signature.slice(0, 66)
  const s = '0x'.concat(signature.slice(66, 130))
  const v_temp = '0x'.concat(signature.slice(130, 132))
  let v = ethers.BigNumber.from(v_temp).toNumber()
  if (![27, 28].includes(v)) v += 27
  return {
    r: r,
    s: s,
    v: v,
  }
}

export const buyPackMeta = async (
  userAddress: string,
  walletSigner: any,
  chainId: SupportedChainId,
  packId: number,
  quantity: number,
  contract: any
) => {
  const contractInterface = new ethers.utils.Interface(COLLECTION_ABI)
  const nonce = await contract.getNonce(userAddress)
  const functionSignature = contractInterface.encodeFunctionData('buyPacks', [packId, quantity])
  const messageToSign = constructMetaTransactionMessage(
    nonce.toNumber(),
    chainId,
    functionSignature,
    getCollectionAddress(chainId!)
  )
  const signature = await walletSigner.signMessage(messageToSign)
  const { r, s, v } = getSignatureParameters(signature)

  try {
    const tx = await contract.executeMetaTransaction(userAddress, functionSignature, r, s, v, { gasLimit: 1000000 })
    const receipt = await tx.wait()
    return receipt.status
  } catch (error) {
    console.log(error)
  }
}

export const openPackMeta = async (
  userAddress: string,
  walletSigner: any,
  chainId: SupportedChainId,
  packId: number,
  contract: any
) => {
  const contractInterface = new ethers.utils.Interface(COLLECTION_ABI)
  const nonce = await contract.getNonce(userAddress)
  const functionSignature = contractInterface.encodeFunctionData('openPacks', [packId])
  const messageToSign = constructMetaTransactionMessage(
    nonce.toNumber(),
    chainId,
    functionSignature,
    getCollectionAddress(chainId!)
  )
  const signature = await walletSigner.signMessage(messageToSign)
  const { r, s, v } = getSignatureParameters(signature)

  try {
    const tx = await contract.executeMetaTransaction(userAddress, functionSignature, r, s, v, { gasLimit: 1000000 })
    const receipt = await tx.wait()
    return receipt.status
  } catch (error) {
    console.log(error)
  }
}

export const approveUSDCMexa = async (
  userAddress: string,
  walletProvider: any,
  chainId: SupportedChainId,
  contract: any
) => {
  const domainType = [
    { name: 'name', type: 'string' },
    { name: 'version', type: 'string' },
    { name: 'verifyingContract', type: 'address' },
    { name: 'salt', type: 'bytes32' },
  ]

  const metaTransactionType = [
    { name: 'nonce', type: 'uint256' },
    { name: 'from', type: 'address' },
    { name: 'functionSignature', type: 'bytes' },
  ]

  const domainData = {
    name: 'USD Coin (PoS)',
    version: '1',
    verifyingContract: getUSDCAddress(chainId),
    salt: ethers.utils.hexZeroPad(ethers.BigNumber.from(chainId).toHexString(), 32),
  }

  const contractInterface = new ethers.utils.Interface(USDC_ABI)
  const nonce = await contract.nonces(userAddress)
  const spender = getCollectionAddress(chainId)
  const MAX_INT = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
  const functionSignature = contractInterface.encodeFunctionData('approve', [spender, MAX_INT])
  const message = {
    nonce: nonce.toNumber(),
    from: userAddress,
    functionSignature,
  }

  const dataToSign = JSON.stringify({
    types: {
      EIP712Domain: domainType,
      MetaTransaction: metaTransactionType,
    },
    domain: domainData,
    primaryType: 'MetaTransaction',
    message: message,
  })
  const signature = await walletProvider.send('eth_signTypedData_v3', [userAddress, dataToSign])
  let { r, s, v } = getSignatureParameters(signature)

  try {
    let tx = await contract.executeMetaTransaction(userAddress, functionSignature, r, s, v, { gasLimit: 1000000 })
    const receipt = await tx.wait()
    return receipt.status
  } catch (error) {
    console.log(error)
  }
}
