import React from 'react'
import styled from 'styled-components'
import { ContainerRow } from '../../styles/globalStyles'
import Web3Status from '../Web3Status'

const WalletConnectorContainer = styled(ContainerRow)`
  padding: 0.5rem 1rem;
  box-shadow: 0px 3px 10px var(--secondary-opacity);
  border: solid;
  border-color: var(--secondary);
  border-width: 1px;
  border-radius: 12px;
`

const WalletConnector: React.FC = () => {
  return (
    <Web3Status />
    // <WalletConnectorContainer justifyContent={'flex-end'} rowWidth={'fit-content'}>
    //   Connect Wallet
    // </WalletConnectorContainer>
  )
}

export default WalletConnector
