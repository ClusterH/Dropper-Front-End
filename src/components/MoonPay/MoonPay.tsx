import React from 'react'
import styled from 'styled-components'
import { useMoonPay } from '../../hooks/useMoonPay'
import { size } from '../../styles/globalStyles'

const MoonPayWrapper = styled.div`
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

const MoonPay: React.FC = () => {
  const { handleMoonPayClick } = useMoonPay()

  return <MoonPayWrapper onClick={handleMoonPayClick}>Buy Crypto</MoonPayWrapper>
}

export default MoonPay
