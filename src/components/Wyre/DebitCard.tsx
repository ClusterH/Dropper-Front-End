import React from 'react'
import styled from 'styled-components'
import { useWyreReservationModalToggle } from '../../state/application/hook'
import { size } from '../../styles/globalStyles'

const WyreWrapper = styled.div`
  color: var(--primary-text);
  font-size: 1.3rem;
  margin: 0 0.5rem;
  &:hover {
    color: var(--secondary);
    cursor: pointer;
  }
  @media screen and (max-width: ${size.tablet}) {
    font-size: 2rem;
    margin: 24px 0 10px 0;
  }
`

export const WyreDebitCard: React.FC = () => {
  const toggleWyreModal = useWyreReservationModalToggle()

  return <WyreWrapper onClick={toggleWyreModal}>Buy Crypto</WyreWrapper>
}
