import React from 'react'
import { PageWrapper } from '../../styles/globalStyles'
import { RoadmapBox } from './RoadmapBox'
import { DroppTokenBox } from './DroppTokenBox'
import { TeamCardBox } from './TeamCardBox'
import { AdvisorsCardBox } from './AdvisorsCardBox'
import { InvestorsBox } from './InvestorsBox'
import { PartnersBox } from './PartnersBox'

const AboutUs: React.FC = () => {
  return (
    <PageWrapper>
      <RoadmapBox />
      <DroppTokenBox />
      <TeamCardBox />
      <AdvisorsCardBox />
      <PartnersBox />
      <InvestorsBox />
    </PageWrapper>
  )
}

export default AboutUs
