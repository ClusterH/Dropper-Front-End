import { useEthers } from '@usedapp/core'
import { AbstractConnector } from '@web3-react/abstract-connector'
import React, { useCallback, useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components/macro'
import MetamaskIcon from '../../assets/images/metamask.png'
import { ReactComponent as Close } from '../../assets/images/x.svg'
import { injected } from '../../connectors'
import { SUPPORTED_WALLETS } from '../../constants/wallet'
import { useIsWalletConnected, useWalletAddress } from '../../hooks/useWallet'
import { useModalOpen, useWalletModalToggle } from '../../state/application/hook'
import { ApplicationModal } from '../../state/application/reducer'
import { useAppDispatch } from '../../state/hooks'
import { setChainId, setIsWalletConnected, setWalletAddress } from '../../state/wallet/reducer'
import { setupNetwork } from '../../utils/wallet'
import Modal from '../Modals/Modal'
import Option from './Option'
import VenlyWalletOption from './VenlyWalletOption'

const CloseIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 14px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`
const CloseColor = styled(Close)`
  path {
    stroke: #b2b9d2;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0;
  padding: 0;
  width: 100%;
`
const HeaderRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 1rem 1rem;
  font-weight: 500;
  color: ${(props) => (props.color === 'blue' ? 'var(--secondary)' : 'inherit')};
`
const ContentWrapper = styled.div`
  background-color: var(--primary);
  padding: 0 1rem 1rem 1rem;
`
const UpperSection = styled.div`
  position: relative;

  h5 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
  }

  h5:last-child {
    margin-bottom: 0px;
  }

  h4 {
    margin-top: 0;
    font-weight: 500;
  }
`
const OptionGrid = styled.div`
  display: grid;
  grid-gap: 10px;
`
const HoverText = styled.div`
  text-decoration: none;
  color: #ffffff;
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`

const WalletModal: React.FC = () => {
  // important that these are destructed from the account-specific web3-react context
  const { account, chainId, activate } = useEthers()
  const walletModalOpen = useModalOpen(ApplicationModal.WALLET)
  const walletAddress = useWalletAddress()
  const toggleWalletModal = useWalletModalToggle()
  const isWalletConnected = useIsWalletConnected()

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (account && chainId && isWalletConnected === 'injected') {
      dispatch(setChainId(chainId))
      dispatch(setWalletAddress(account))
    }
    if (walletModalOpen) {
      toggleWalletModal()
    }
  }, [account, chainId, dispatch, isWalletConnected])

  const tryActivation = useCallback(
    async (connector: AbstractConnector | undefined) => {
      if (account && chainId) {
        dispatch(setChainId(chainId))
        dispatch(setWalletAddress(account))
        dispatch(setIsWalletConnected('injected'))
        toggleWalletModal()
        return
      }

      connector &&
        activate(connector, undefined, true)
          .then((res) => {
            if (walletModalOpen) toggleWalletModal()
          })
          .catch(async (error) => {
            if (error instanceof Error) {
              const hasSetup = await setupNetwork()
              if (hasSetup) {
                activate(connector).then((res) => {
                  if (walletModalOpen) toggleWalletModal()
                })
              }
            }
          })
    },
    [account, chainId, activate, dispatch]
  )

  // get wallets user can switch too, depending on device/browser
  function getOptions() {
    const isMetamask = window.ethereum && window.ethereum.isMetaMask
    return Object.keys(SUPPORTED_WALLETS).map((key) => {
      const option = SUPPORTED_WALLETS[key]
      if (option.name === 'Venly Wallet') {
        return <VenlyWalletOption key={key} />
      }
      // check for mobile options
      if (isMobile) {
        return null
      }

      // overwrite injected when needed
      if (option.connector === injected) {
        // don't show injected if there's no injected provider
        if (!(window.web3 || window.ethereum)) {
          return (
            <Option
              id={`connect-${key}`}
              key={key}
              color={'#E8831D'}
              header={'Install Metamask'}
              subheader={null}
              link={'https://metamask.io/'}
              icon={MetamaskIcon}
            />
          )
        }
        // don't return metamask if injected provider isn't metamask
        else if (option.name === 'MetaMask' && !isMetamask) {
          return null
        }
      }

      // return rest of options
      return (
        !isMobile &&
        !option.mobileOnly && (
          <Option
            id={`connect-${key}`}
            onClick={() => {
              tryActivation(option.connector)
            }}
            key={key}
            active={isWalletConnected === 'injected'}
            color={option.color}
            link={option.href}
            header={option.name}
            subheader={null} //use option.descriptio to bring back multi-line
            icon={option.iconURL}
          />
        )
      )
    })
  }

  function getModalContent() {
    return (
      <UpperSection>
        <CloseIcon onClick={toggleWalletModal}>
          <CloseColor />
        </CloseIcon>
        <HeaderRow>
          <HoverText>
            {isWalletConnected === 'venly' && walletAddress.length > 0
              ? 'Connected with Venly'
              : isWalletConnected === 'injected' && walletAddress.length > 0
              ? 'Connected with Injected Wallet'
              : 'Connect to a wallet'}
          </HoverText>
        </HeaderRow>
        <ContentWrapper>
          <OptionGrid>{getOptions()}</OptionGrid>
        </ContentWrapper>
      </UpperSection>
    )
  }

  return (
    <Modal isOpen={walletModalOpen} onDismiss={toggleWalletModal} minHeight={false} maxHeight={90}>
      <Wrapper>{getModalContent()}</Wrapper>
    </Modal>
  )
}

export default WalletModal
