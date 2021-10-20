import { BigNumber } from '@ethersproject/bignumber'
import { fetchJson } from '@ethersproject/web'
import { utils } from 'ethers'
import { TMomentItem } from '../types'
import { IPFS_BASE_URI, AWS_BASE_URI } from '../constants/momentsURIs'

export const momentGenerator = (momentIDs: BigNumber[], momentURIs: string[]) => {
  console.log(momentIDs, momentURIs)
  const moments = momentURIs.map(async (uri, index) => {
    const metadata = await (await fetch(uri)).json()

    const hexString = utils.hexlify(momentIDs[index])
    const length = utils.hexDataLength(hexString)
    const sufix = utils.hexDataSlice(hexString, length / 2)

    const id = parseInt(sufix).toString()
    const name = metadata.name
    const description = metadata.description
    const imageUrl = metadata.image
    const animationUrl = metadata.animation_url
    const rarity = imageUrl.replace(IPFS_BASE_URI, '').split('/')[1]
    const awsImageUrl = `${AWS_BASE_URI}${rarity}/${name}.png`
    const awsAnimationUrl = `${AWS_BASE_URI}${rarity}/${name}.mp4`

    return { id, name, description, imageUrl, animationUrl, rarity, awsImageUrl, awsAnimationUrl }
  })

  return moments
}
