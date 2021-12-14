import React from 'react'
import styled from 'styled-components'
import { useMoonPayModalToggle } from '../../state/application/hook'
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
  const toogleMoonPayModal = useMoonPayModalToggle()

  return <MoonPayWrapper onClick={toogleMoonPayModal}>Buy Crypto(MoonPay)</MoonPayWrapper>
}

export default MoonPay
