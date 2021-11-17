import React from 'react'
import { PageWrapper } from '../../styles/globalStyles'
import { DroppExplain } from './DroppExplain'
import { FAQBox } from './FAQBox'
import { IntroducingBox } from './IntroducingBox'
import { ProductExplain } from './ProductExplain'
import { RememberBox } from './RememberBox'
import { ConnectingFans } from './ConnectingFans'

const Home: React.FC = () => {
  return (
    <PageWrapper>
      <IntroducingBox />
      <RememberBox />
      <ProductExplain />
      <DroppExplain />
      <ConnectingFans />
      <FAQBox />
    </PageWrapper>
  )
}

export default Home
