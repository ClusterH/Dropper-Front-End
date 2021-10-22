import { BigNumber } from '@ethersproject/bignumber'
import { Contract } from '@ethersproject/contracts'
import { utils } from 'ethers'
import { IPFS_BASE_URI, AWS_BASE_URI } from '../constants/momentsURIs'
import { getTotalMinted } from './callHelpers'

export const momentGenerator = (contract: Contract, momentIDs: BigNumber[], momentURIs: string[]) => {
  const moments = momentURIs.map(async (uri, index) => {
    const metadata = await (await fetch(uri)).json()
    const hexString = utils.hexlify(momentIDs[index])
    const length = utils.hexDataLength(hexString)
    const prefix = utils.hexDataSlice(hexString, 0, length / 2 + 1)
    const sufix = utils.hexDataSlice(hexString, length / 2 - 1)
    const id = parseInt(sufix).toString()
    const momentId = `${prefix}${'0'.repeat(length - 2)}`
    const res = await getTotalMinted(contract, momentId)
    const totalMintedMoments = res[1].toString()
    const name = metadata.name
    const description = metadata.description
    const imageUrl = `${IPFS_BASE_URI}${metadata.image.replace('ipfs://', '')}`
    const animationUrl = `${IPFS_BASE_URI}${metadata.animation_url.replace('ipfs://', '')}`
    const rarity = imageUrl.replace(IPFS_BASE_URI, '').split('/')[1]
    const awsImageUrl = `${AWS_BASE_URI}${rarity}/${name}.png`
    const awsAnimationUrl = `${AWS_BASE_URI}${rarity}/${name}.mp4`

    return {
      id,
      momentId,
      name,
      description,
      imageUrl,
      animationUrl,
      rarity,
      awsImageUrl,
      awsAnimationUrl,
      totalMintedMoments,
    }
  })

  return moments
}
