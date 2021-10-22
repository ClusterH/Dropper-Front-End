import { SupportedChainId } from '../constants/chains'

export const isSupportedNetwork = (chainId: number | undefined) => {
  if (chainId === undefined) return false
  if (Object.values(SupportedChainId).includes(chainId)) return true
  return false
}
