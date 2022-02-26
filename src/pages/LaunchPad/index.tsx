import React from 'react'
import { PageWrapper } from '../../styles/globalStyles'
import { LanchPadHeader } from './Header'
import { LaunchIntoduceContainer } from './MainContent'

const HowItWork: React.FC = () => {
  return (
    <PageWrapper>
      <LanchPadHeader />
      <LaunchIntoduceContainer />
    </PageWrapper>
  )
}

export default HowItWork
