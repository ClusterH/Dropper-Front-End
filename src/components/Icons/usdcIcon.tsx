import React from 'react'
import styled from 'styled-components'
import USDC_IMG from '../../assets/images/usdc.svg'

const USDCIconContainer = styled.img`
  border-radius: 50%;
  width: 24px;
  margin-left: 12px;
}
`

const USDCIcon: React.FC = () => {
  return <USDCIconContainer src={USDC_IMG} />
}

export default USDCIcon
