import React from 'react'
import { FiActivity } from 'react-icons/fi'
import { useEthers, useEtherBalance, useTokenBalance } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import styled from 'styled-components'
import { NetworkContextName } from '../../constants/misc'
import { useWalletModalToggle } from '../../state/application/hook'
import { shortenAddress } from '../../utils'
import WalletModal from '../WalletModal'
import { getUSDCAddress } from '../../utils/addressHelpers'
import { isSupportedNetwork } from '../../utils/validateChainID'
import { ContainerRow } from '../../styles/globalStyles'
import { useIsVenly, useVenlyAccount, useVenlyConnection } from '../../hooks/useVenly'
import { useBalance, useGetWalletBalance, useGetWalletConnection } from '../../hooks/useWallet'
import { VENLY_CHAIN_ID } from '../../constants/chains'
const Web3StatusGeneric = styled.div`
  display: inline-block;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary);
  padding: 0.5rem 1rem;
  box-shadow: 0px 3px 10px var(--secondary-opacity);
  border: 1px solid var(--secondary);
  border-radius: 12px;
  text-decoration: none;
  transition: 0.3s;
  :hover {
    color: var(--secondary);
    border-color: transparent;
    background: var(--primary);
  }
`
const Web3StatusError = styled(Web3StatusGeneric)`
  background-color: var(--secondary);
  border: 1px solid #fd4040;
  color: #ffffff;
  font-weight: 500;
  :hover,
  :focus {
    background: var(--light-primary);
    color: var(--secondary);
  }
`
const Web3StatusConnect = styled(Web3StatusGeneric)``
const Web3StatusWrapper = styled(ContainerRow)`
  border: 2px solid var(--secondary);
  border-radius: 16px;
  background-color: var(--light-navy-blue);
  padding-left: 12px;
`
const Web3StatusConnected = styled(Web3StatusGeneric)<{ pending?: boolean }>`
  background-color: ${({ pending }) => (pending ? '#0093fc' : 'var(--secondary)')};
  color: #ffffff;
  font-weight: 500;
`
const Text = styled.p`
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1rem;
  width: fit-content;
  font-weight: 600;
`
const NetworkIcon = styled(FiActivity)`
  margin-left: 0.25rem;
  margin-right: 0.5rem;
  width: 16px;
  height: 16px;
`
const Web3StatusInner: React.FC = () => {
  const { account, chainId, error } = useEthers()
  const toggleWalletModal = useWalletModalToggle()
  const isWalletConnected = useGetWalletConnection()
  const venlyAccount = useVenlyAccount()

  const { maticBalance, usdcBalance } = useBalance()
  console.log('wallets===>>>', isWalletConnected, venlyAccount, chainId)
  // const maticBalance = useEtherBalance(
  //   isWalletConnected === 'venly' ? venlyAccount.address : isWalletConnected === 'injected' ? account : false
  // )
  // const usdcBalance = useTokenBalance(
  //   isWalletConnected === undefined ? undefined : getUSDCAddress(isWalletConnected === 'venly' ? VENLY_CHAIN_ID : chainId!),
  //   isWalletConnected === undefined ? undefined : isWalletConnected === 'venly' ? venlyAccount.address : account
  // )
  console.log(venlyAccount, isWalletConnected, parseFloat(formatEther(maticBalance)).toFixed(3), usdcBalance)

  if (isWalletConnected === undefined) {
    return (
      <Web3StatusConnect id="connect-wallet" onClick={toggleWalletModal}>
        <Text>{'Connect Wallet'}</Text>
      </Web3StatusConnect>
    )
  } else if (isWalletConnected === 'injected' && account && !isSupportedNetwork(chainId)) {
    return (
      <Web3StatusError onClick={toggleWalletModal}>
        <NetworkIcon />
        <Text>{'Wrong Network!'}</Text>
      </Web3StatusError>
    )
  } else if (isWalletConnected === 'venly' || (account && isSupportedNetwork(chainId))) {
    return (
      <Web3StatusWrapper>
        <Text>
          {maticBalance && parseFloat(formatEther(maticBalance)).toFixed(3)} MATIC /{' '}
          {usdcBalance && parseFloat(formatEther(usdcBalance)).toFixed(3)} USDC
        </Text>
        <Web3StatusConnected id="web3-status-connected" onClick={toggleWalletModal}>
          <Text>{shortenAddress(isWalletConnected === 'venly' ? venlyAccount.address : account!)}</Text>
        </Web3StatusConnected>
      </Web3StatusWrapper>
    )
  } else {
    console.log(error)
    return (
      <Web3StatusError onClick={toggleWalletModal}>
        <NetworkIcon />
        <Text>{'Error'}</Text>
      </Web3StatusError>
    )
  }
}

const WalletConnector: React.FC = () => {
  const { active } = useEthers()
  const isVenly = useIsVenly()
  useVenlyConnection()

  // if (!isVenly && !active) {
  //   return null
  // }

  return (
    <>
      <Web3StatusInner />
      <WalletModal />
    </>
  )
}

export default WalletConnector
