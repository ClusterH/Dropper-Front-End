import { BigNumber } from '@ethersproject/bignumber'
import { utils, ethers } from 'ethers'
import { Contract } from 'ethcall'
import { SupportedChainId } from '../constants/chains'
import { AWS_BASE_URI, IPFS_BASE_URI } from '../constants/momentsURIs'
import { getDropperAddress } from './addressHelpers'
import { fetchEventLogs, getLatestBlockNumber, getMultiCall } from './callHelpers'
import { getSimpleRPCProvider } from './simpleRPCProvider'
import DROPPER_ABI from '../abis/dropper.json'
import { TRANSFER_BATCH_FILTER } from '../constants/blockNumber'
import { setIsLoading, setLatestBlockNumber, setMomentList } from '../state/dropper/reducer'
import { AppDispatch } from '../state'

export const getMomentId = (momentID: BigNumber) => {
  const hexString = utils.hexlify(momentID)
  const length = utils.hexDataLength(hexString)
  const prefix = utils.hexDataSlice(hexString, 0, length / 2 + 1)
  const sufix = utils.hexDataSlice(hexString, length / 2 - 1)
  const id = parseInt(sufix).toString()
  const momentId = `${prefix}${'0'.repeat(length - 2)}`
  return { id, momentId }
}

export const momentGenerator = (momentList: any, momentIDs: BigNumber[]) => {
  return momentIDs.map(async (item, index) => {
    const { id, momentId } = getMomentId(item)
    const metadata = await (await fetch(`${IPFS_BASE_URI}${momentList[index][0]}`)).json()
    const name = metadata.name
    const description = metadata.description
    const imageUrl = metadata.image
    const animationUrl = metadata.animation_url
    const collection = metadata.attributes[0].value
    const rarity = metadata.attributes[1].value
    const title = metadata.attributes[2].value
    const genre = metadata.attributes[3].value
    const platform = metadata.attributes[4].value
    const twitter = metadata.attributes[5].value
    const awsImageUrl = `${AWS_BASE_URI}${rarity}/${name}.png`
    const awsAnimationUrl = `${AWS_BASE_URI}${rarity}/${name}.mp4`
    const totalMintedMoments = momentList[index][1].toString()
    return {
      id,
      momentId,
      name,
      description,
      imageUrl,
      animationUrl,
      collection,
      rarity,
      title,
      genre,
      platform,
      twitter,
      awsImageUrl,
      awsAnimationUrl,
      totalMintedMoments,
    }
  })
}

export const fetchMomentList = async (
  account: string,
  contract: Contract,
  chainId: SupportedChainId,
  dispatch: AppDispatch,
  fromBlock: number | undefined
) => {
  const provider = getSimpleRPCProvider(chainId)
  const ens = new ethers.Contract(getDropperAddress(chainId), DROPPER_ABI, provider)
  const latestBlockNumber = await getLatestBlockNumber(getSimpleRPCProvider(chainId!))
  dispatch(setLatestBlockNumber(latestBlockNumber))

  const filterOption = { ...TRANSFER_BATCH_FILTER[chainId] }
  const eventFilter = {
    ...filterOption.eventFilter,
    topics: [...filterOption.eventFilter.topics, ethers.utils.hexZeroPad(account, 32)],
  }
  const filter = { ...filterOption, eventFilter }
  const limit = 2000
  const startBlockNumber = fromBlock ?? filter.fromBlock

  for (let i = latestBlockNumber; i > startBlockNumber; i -= limit) {
    const eventLogs = await fetchEventLogs(
      ens,
      filter.eventFilter,
      i - limit > startBlockNumber ? i - limit + 1 : startBlockNumber + 1,
      i
    )
    if (eventLogs && eventLogs.length > 0) {
      const momentIDs: Array<BigNumber> = []

      eventLogs.map((item: any) => momentIDs.push(...item.args?.ids))

      const _calls = momentIDs.map((id) => {
        const { momentId } = getMomentId(id)
        return contract.getMoment(momentId)
      })
      const response = await getMultiCall(_calls, chainId!)

      const moments = await Promise.all(momentGenerator(response, momentIDs))
      dispatch(setMomentList(moments))
      dispatch(setIsLoading(false))
    }
  }
  dispatch(setIsLoading(false))
}
