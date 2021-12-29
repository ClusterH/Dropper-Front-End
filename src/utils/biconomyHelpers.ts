import { JsonRpcSigner } from '@ethersproject/providers'
import { SecretType, VenlyConnect, SignerResult } from '@venly/connect'
import { Biconomy } from '@biconomy/mexa'
import { toBuffer } from 'ethereumjs-util'
import { BigNumber, Contract, ethers } from 'ethers'
import COLLECTION_ABI from '../abis/collection.json'
import DROPPER_ABI from '../abis/dropper.json'
import USDC_ABI from '../abis/usdc.json'
import { SupportedChainId } from '../constants/chains'
import { getCollectionAddress, getDropperAddress, getUSDCAddress } from './addressHelpers'
import { getSimpleRPCProvider } from './simpleRPCProvider'
import { ContractInterfaces } from '../state/application/reducer'

export const BICONOMY_CONFIG: {
  [chainId in number]: { apiKey: string | undefined }
} = {
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

export const getAPIKey = (chainId: number = 80001) => {
  return BICONOMY_CONFIG[chainId].apiKey
}

export const getSignature = async (hexData: string, signer: JsonRpcSigner) => {
  const flatSig = await signer.signMessage(ethers.utils.arrayify(ethers.utils.keccak256(hexData)))
  const splitSig = ethers.utils.splitSignature(flatSig)
  return splitSig
}

export const getBiconomy = async (chainId: number, userAddress: string) => {
  const jsonRpcProvider = getSimpleRPCProvider(chainId)
  const biconomy = new Biconomy(jsonRpcProvider, {
    apiKey: getAPIKey(chainId),
    debug: true,
  })

  let collectionContract: Contract
  let dropperContract: Contract
  let usdcTokenContract: Contract

  return new Promise<ContractInterfaces>(async (resolve, reject) => {
    await biconomy
      .onEvent(biconomy.READY, async () => {
        console.info('biconomy ready')
        const collectionContractInterface = new ethers.utils.Interface(COLLECTION_ABI)
        const dropperContractInterface = new ethers.utils.Interface(DROPPER_ABI)
        const usdcInterface = new ethers.utils.Interface(USDC_ABI)
        collectionContract = new ethers.Contract(
          getCollectionAddress(chainId),
          collectionContractInterface,
          biconomy.getSignerByAddress(userAddress)
        )

        dropperContract = new ethers.Contract(
          getDropperAddress(chainId),
          dropperContractInterface,
          biconomy.getSignerByAddress(userAddress)
        )

        usdcTokenContract = new ethers.Contract(getUSDCAddress(chainId), usdcInterface, biconomy.getSignerByAddress(userAddress))
        resolve({ collectionContract, dropperContract, usdcTokenContract })
      })
      .onEvent(biconomy.ERROR, (error: any, message: string) => {
        console.log(message)
        console.log(error)
      })
  })
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

const getMetaTransactionEIP712SignConfig = (
  chainId: number,
  userAddress: string,
  domainName: string,
  contractAddress: string,
  functionSignature: string,
  nonce: BigNumber,
  isVenly?: boolean
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
    name: domainName,
    version: '1',
    verifyingContract: contractAddress,
    salt: ethers.utils.hexZeroPad(ethers.BigNumber.from(chainId).toHexString(), 32),
  }

  const message = {
    nonce: nonce.toNumber(),
    from: userAddress,
    functionSignature,
  }

  const dataToSignObj = {
    types: {
      EIP712Domain: domainType,
      MetaTransaction: metaTransactionType,
    },
    domain: domainData,
    primaryType: 'MetaTransaction',
    message: message,
  }

  const dataToSign = isVenly ? dataToSignObj : JSON.stringify(dataToSignObj)

  return dataToSign
}

const executeMetaTransaction = async (userAddress: string, contract: Contract, functionSignature: string, r: any, s: string, v: number) => {
  try {
    const tx = await contract.executeMetaTransaction(userAddress, functionSignature, r, s, v, { gasLimit: 1000000 })
    const receipt = await tx.wait()
    return receipt.status
  } catch (error) {
    console.log(error)
  }
}

export const approveUSDCMeta = async (userAddress: string, walletProvider: any, chainId: number, contract: any) => {
  const contractInterface = new ethers.utils.Interface(USDC_ABI)
  const nonce = await contract.nonces(userAddress)
  const spender = getCollectionAddress(chainId)
  const MAX_INT = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
  const functionSignature = contractInterface.encodeFunctionData('approve', [spender, MAX_INT])

  const dataToSign = getMetaTransactionEIP712SignConfig(
    chainId,
    userAddress,
    'USD Coin (PoS)',
    getUSDCAddress(chainId),
    functionSignature,
    nonce
  )

  const signature = await walletProvider.send('eth_signTypedData_v3', [userAddress, dataToSign])
  const { r, s, v } = getSignatureParameters(signature)
  return await executeMetaTransaction(userAddress, contract, functionSignature, r, s, v)
}

export const buyPackMeta = async (
  userAddress: string,
  walletProvider: any,
  chainId: number,
  packId: number,
  quantity: number,
  contract: any
) => {
  const contractInterface = new ethers.utils.Interface(COLLECTION_ABI)
  console.log('buyPackMeta===>>>', contract)
  let nonce: BigNumber = ethers.BigNumber.from(0)
  try {
    nonce = await contract.getNonce(userAddress)
  } catch (error) {
    console.log(error)
  }
  // const nonce = await contract.getNonce(userAddress)
  const functionSignature = contractInterface.encodeFunctionData('buyPacks', [packId, quantity])
  console.log('buyPackMeta===>>>', contract)

  const dataToSign = getMetaTransactionEIP712SignConfig(
    chainId,
    userAddress,
    'CollectionBiconomy',
    getCollectionAddress(chainId),
    functionSignature,
    nonce
  )
  console.log(functionSignature)
  const signature = await walletProvider.send('eth_signTypedData_v3', [userAddress, dataToSign])
  console.log(signature)
  const { r, s, v } = getSignatureParameters(signature)

  return await executeMetaTransaction(userAddress, contract, functionSignature, r, s, v)
}

export const openPackMeta = async (userAddress: string, walletProvider: any, chainId: number, packId: number, contract: any) => {
  const contractInterface = new ethers.utils.Interface(COLLECTION_ABI)
  const nonce = await contract.getNonce(userAddress)
  const functionSignature = contractInterface.encodeFunctionData('openPacks', [packId])

  const dataToSign = getMetaTransactionEIP712SignConfig(
    chainId,
    userAddress,
    'CollectionBiconomy',
    getCollectionAddress(chainId),
    functionSignature,
    nonce
  )
  const signature = await walletProvider.send('eth_signTypedData_v3', [userAddress, dataToSign])
  const { r, s, v } = getSignatureParameters(signature)

  return await executeMetaTransaction(userAddress, contract, functionSignature, r, s, v)
}

export const approveUSDCMetaVenly = async (
  venlyAccount: { id: string; address: string },
  venlyConnect: VenlyConnect,
  chainId: number,
  contract: any
) => {
  const contractInterface = new ethers.utils.Interface(USDC_ABI)
  const nonce = await contract.nonces(venlyAccount.address)
  const spender = getCollectionAddress(chainId)
  const MAX_INT = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
  const functionSignature = contractInterface.encodeFunctionData('approve', [spender, MAX_INT])

  const dataToSign = getMetaTransactionEIP712SignConfig(
    chainId,
    venlyAccount.address,
    'USD Coin (PoS)',
    getUSDCAddress(chainId),
    functionSignature,
    nonce
  )
  const signer = venlyConnect.createSigner()

  try {
    const signatureResult = await signer.signEip712({
      walletId: venlyAccount.id,
      secretType: SecretType.MATIC,
      data: dataToSign,
    })

    const { r, s, v } = signatureResult.result

    return await executeMetaTransaction(venlyAccount.address, contract, functionSignature, r, s, parseInt(v.slice(2), 16))
  } catch (error) {
    console.log(error)
  }
}

export const buyPackMetaVenly = async (
  venlyAccount: { id: string; address: string },
  venlyConnect: VenlyConnect,
  chainId: number,
  packId: number,
  quantity: number,
  contract: any
) => {
  const contractInterface = new ethers.utils.Interface(COLLECTION_ABI)
  const nonce = await contract.getNonce(venlyAccount.address)
  const functionSignature = contractInterface.encodeFunctionData('buyPacks', [packId, quantity])

  const dataToSign = getMetaTransactionEIP712SignConfig(
    chainId,
    venlyAccount.address,
    'CollectionBiconomy',
    getCollectionAddress(chainId),
    functionSignature,
    nonce,
    true
  )

  const signer = venlyConnect.createSigner()

  try {
    const signatureResult = await signer.signEip712({
      walletId: venlyAccount.id,
      secretType: SecretType.MATIC,
      data: dataToSign,
    })

    const { r, s, v } = signatureResult.result

    return await executeMetaTransaction(venlyAccount.address, contract, functionSignature, r, s, parseInt(v.slice(2), 16))
  } catch (error) {
    console.log(error)
  }
}

export const openPackMetaVenly = async (
  venlyAccount: { id: string; address: string },
  venlyConnect: VenlyConnect,
  chainId: number,
  packId: number,
  contract: any
) => {
  const contractInterface = new ethers.utils.Interface(COLLECTION_ABI)
  const nonce = await contract.getNonce(venlyAccount.address)
  const functionSignature = contractInterface.encodeFunctionData('openPacks', [packId])

  const dataToSign = getMetaTransactionEIP712SignConfig(
    chainId,
    venlyAccount.address,
    'CollectionBiconomy',
    getCollectionAddress(chainId),
    functionSignature,
    nonce,
    true
  )

  const signer = venlyConnect.createSigner()

  try {
    const signatureResult = await signer.signEip712({
      walletId: venlyAccount.id,
      secretType: SecretType.MATIC,
      data: dataToSign,
    })

    const { r, s, v } = signatureResult.result

    return await executeMetaTransaction(venlyAccount.address, contract, functionSignature, r, s, parseInt(v.slice(2), 16))
  } catch (error) {
    console.log(error)
  }
}
