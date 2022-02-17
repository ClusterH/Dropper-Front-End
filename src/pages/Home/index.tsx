import React from 'react'
import { PageWrapper } from '../../styles/globalStyles'
import { DroppExplain } from './DroppExplain'
import { FAQBox } from './FAQBox'
import { IntroducingBox } from './IntroducingBox'
import { ProductExplain } from './ProductExplain'
import { RememberBox } from './RememberBox'
import { ConnectingFans } from './ConnectingFans'
import CreatorAdvertise from './CreatorAdvertise'

const Home: React.FC = () => {
  return (
    <PageWrapper>
      <IntroducingBox />
      <DroppExplain />
      <RememberBox />
      <CreatorAdvertise />
      {/* <ProductExplain />
      <ConnectingFans />
      <FAQBox /> */}
    </PageWrapper>
  )
}

export default Home
