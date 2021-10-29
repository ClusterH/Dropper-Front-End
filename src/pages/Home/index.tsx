import React from 'react'
import { Divider, PageWrapper } from '../../styles/globalStyles'
import { Advantage } from './Advantage'
import { ClixDropp } from './ClixDropp'
import { DroppExplain } from './DroppExplain'
import { IntroducingBox } from './IntroducingBox'

const Home: React.FC = () => {
  return (
    <PageWrapper>
      <IntroducingBox />
      <ClixDropp />
      <DroppExplain />
      <Divider margin={'132px 0 100px'} />
      <Advantage />
    </PageWrapper>
  )
}

export default Home
