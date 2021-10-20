import { BigNumber } from '@ethersproject/bignumber'
import { utils } from 'ethers'
import { TMomentItem } from '../types'

export const momentGenerator = (momentIDs: BigNumber[], momentURIs: string[]) => {
  const moments: TMomentItem[] = momentURIs.map((uri, index) => {
    const testId = utils.hexlify(momentIDs[index])
    const length = utils.hexDataLength(testId)
    const prefix = utils.hexDataSlice(testId, 0, 1)
    const sufix = utils.hexDataSlice(testId, length / 2)
    const id = parseInt(sufix).toString()
    const updateURI = uri.replaceAll('+', ' ')
    const tempSplit = uri.split('.com/')[1].split('/')
    const rarity = tempSplit[0]
    const name = tempSplit[1].replaceAll('+', ' ').replace('.mp4', '')
    const image = updateURI.replace('.mp4', '.png')

    return { uri: updateURI, id, rarity, name, image }
  })

  return moments
}
