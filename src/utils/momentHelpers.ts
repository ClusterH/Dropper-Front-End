import { BigNumber } from '@ethersproject/bignumber'
import { utils } from 'ethers'
import { AWS_BASE_URI, IPFS_BASE_URI } from '../constants/momentsURIs'

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
