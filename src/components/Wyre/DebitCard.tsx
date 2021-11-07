import React from 'react'
import styled from 'styled-components'
import { useWyreReservationModalToggle } from '../../state/application/hook'

const WyreWrapper = styled.div`
  color: var(--primary-text);
  font-size: 1.3rem;
  margin: 0 0.5rem;
  &:hover {
    color: var(--secondary);
    cursor: pointer;
  }
`

export const WyreDebitCard: React.FC = () => {
  const toggleWyreModal = useWyreReservationModalToggle()

  return <WyreWrapper onClick={toggleWyreModal}>Buy Crypto</WyreWrapper>
}
