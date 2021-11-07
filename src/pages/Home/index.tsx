import React from 'react'
import { PageWrapper } from '../../styles/globalStyles'
import { Advantage } from './Advantage'
import { ClixDropp } from './ClixDropp'
import { DroppExplain } from './DroppExplain'
import { IntroducingBox } from './IntroducingBox'
import { RememberBox } from './RememberBox'
import { ProductExplain } from './ProductExplain'
import { RoadmapBox } from './RoadmapBox'
import { DroppTokenBox } from './DroppTokenBox'
import { TeamCardBox } from './TeamCardBox'
import { AdvisorsCardBox } from './AdvisorsCardBox'
import { PartnersBox } from './PartnersBox'
import { InvestorsBox } from './InvestorsBox'
import { FAQBox } from './FAQBox'

const Home: React.FC = () => {
  return (
    <PageWrapper>
      <IntroducingBox />
      <RememberBox />
      <ProductExplain />
      <DroppExplain />
      <Advantage />
      <RoadmapBox />
      <DroppTokenBox />
      <TeamCardBox />
      <AdvisorsCardBox />
      <PartnersBox />
      <InvestorsBox />
      <FAQBox />
    </PageWrapper>
  )
}

export default Home
