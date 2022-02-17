import React from 'react'
import { isMobile } from 'react-device-detect'
import BEAR_DROP_IMG from '../../assets/images/bears-drop.jpg'
import CLIX_DROP_IMG from '../../assets/images/clix-drop.jpg'
import OPS_DROP_IMG from '../../assets/images/ops-drop.jpg'
import Banner from '../../components/Banners'
import { ComponentWrapper, PageWrapper } from '../../styles/globalStyles'
import DropItem from './DropItem'

const UpcomingDrops: React.FC = () => {
  return (
    <PageWrapper>
      <Banner mainTitle={'Upcoming'} subTitle={'Drops'} />
      <ComponentWrapper margin={isMobile ? '0' : '50px 0 0'} padding={'24px'}>
        <DropItem img={CLIX_DROP_IMG} isCount={false} date={''} />
        <DropItem img={OPS_DROP_IMG} isCount={true} date={'03/31/2022'} />
        <DropItem img={BEAR_DROP_IMG} isCount={true} date={'03/10/2022'} />
      </ComponentWrapper>
    </PageWrapper>
  )
}

export default UpcomingDrops
