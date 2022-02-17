import Jazzicon from '@metamask/jazzicon'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components/macro'
import { useEthers } from '@usedapp/core'

const StyledIdenticonContainer = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 1.125rem;
  background-color: #565a69;
`

export default function Identicon() {
  const ref = useRef<HTMLDivElement>()
  const { account } = useEthers()

  useEffect(() => {
    if (account && ref.current) {
      ref.current.innerHTML = ''
      ref.current.appendChild(Jazzicon(16, parseInt(account.slice(2, 10), 16)))
    }
  }, [account])

  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
  return <StyledIdenticonContainer ref={ref as any} />
}
