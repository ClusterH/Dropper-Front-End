import { DROPPER_CONTRACT_ADDRESSES } from '../constants/addresses'
import { useContract } from './useContract'
import ABI from '../abis/dropper.json'

export const useGetDropperContract = () => {
  return useContract(DROPPER_CONTRACT_ADDRESSES, ABI, true)
}
