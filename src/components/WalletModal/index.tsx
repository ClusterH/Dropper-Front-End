import { AbstractConnector } from '@web3-react/abstract-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { useEthers } from '@usedapp/core'
import React, { useCallback, useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import ReactGA from 'react-ga'
import styled from 'styled-components/macro'
import MetamaskIcon from '../../assets/images/metamask.png'
import { ReactComponent as Close } from '../../assets/images/x.svg'
import { injected } from '../../connectors'
import { SUPPORTED_WALLETS } from '../../constants/wallet'
import usePrevious from '../../hooks/usePrevious'
import { useIsVenly, useVenlyAccount, useVenlyConnect } from '../../hooks/useVenly'
import { useModalOpen, useWalletModalToggle } from '../../state/application/hook'
import { ApplicationModal } from '../../state/application/reducer'
import { setupNetwork } from '../../utils/wallet'
import Modal from '../Modals/Modal'
import Option from './Option'
import VenlyWalletOption from './VenlyWalletOption'
import { useAppDispatch } from '../../state/hooks'
import { setIsVenly } from '../../state/venly/reducer'
import { useGetWalletBalance } from '../../hooks/useWallet'

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
  const { account, connector, activate, error } = useEthers()
  const walletModalOpen = useModalOpen(ApplicationModal.WALLET)
  const toggleWalletModal = useWalletModalToggle()
  const previousAccount = usePrevious(account)
  const isVenly = useIsVenly()
  const venlyAccount = useVenlyAccount()
  const { handleLogOut } = useVenlyConnect()
  const { handleGetBalance } = useGetWalletBalance()

  const dispatch = useAppDispatch()
  // close on connection, when logged out before
  useEffect(() => {
    if (account && !previousAccount && walletModalOpen) {
      toggleWalletModal()
    }
  }, [account, previousAccount, toggleWalletModal, walletModalOpen])

  const tryActivation = useCallback(
    async (connector: AbstractConnector | undefined) => {
      console.log('tryActivation=before==>>>')

      let name = ''
      Object.keys(SUPPORTED_WALLETS).map((key) => {
        if (connector === SUPPORTED_WALLETS[key].connector) {
          return (name = SUPPORTED_WALLETS[key].name)
        }
        return true
      })
      // log selected wallet
      ReactGA.event({
        category: 'Wallet',
        action: 'Change Wallet',
        label: name,
      })

      // if the connector is walletconnect and the user has already tried to connect, manually reset the connector
      if (connector instanceof WalletConnectConnector && connector.walletConnectProvider?.wc?.uri) {
        connector.walletConnectProvider = undefined
      }

      connector &&
        activate(connector, undefined, true)
          .then(() => {
            if (isVenly) handleLogOut()
            dispatch(setIsVenly(false))
            console.log('tryActivation=after==>>>')

            handleGetBalance()
          })
          .catch(async (error) => {
            if (error instanceof Error) {
              const hasSetup = await setupNetwork()
              if (hasSetup) {
                activate(connector)
                if (isVenly) handleLogOut()
                dispatch(setIsVenly(false))
                console.log('tryActivation=error==>>>')

                handleGetBalance()
              }
            }
          })
    },
    [activate, isVenly, handleLogOut, dispatch, handleGetBalance]
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
        if (!window.web3 && !window.ethereum && option.mobile) {
          return (
            <Option
              onClick={() => {
                option.connector !== connector && !option.href && tryActivation(option.connector)
              }}
              id={`connect-${key}`}
              key={key}
              active={option.connector && option.connector === connector}
              color={option.color}
              link={option.href}
              header={option.name}
              subheader={null}
              icon={option.iconURL}
            />
          )
        }
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
              if (option.connector === connector) return
              else if (!option.href) tryActivation(option.connector)
            }}
            key={key}
            active={option.connector === connector}
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
    if (error) {
      return (
        <UpperSection>
          <CloseIcon onClick={toggleWalletModal}>
            <CloseColor />
          </CloseIcon>
          <HeaderRow>{error instanceof Error ? 'Wrong Network' : 'Error connecting'}</HeaderRow>
          <ContentWrapper>
            {error instanceof Error ? <h5>Please connect to the Polygon network.</h5> : 'Error connecting. Try refreshing the page.'}
          </ContentWrapper>
        </UpperSection>
      )
    }
    return (
      <UpperSection>
        <CloseIcon onClick={toggleWalletModal}>
          <CloseColor />
        </CloseIcon>
        <HeaderRow>
          <HoverText>
            {isVenly && venlyAccount.address.length > 0
              ? 'Connected with Venly'
              : account
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
