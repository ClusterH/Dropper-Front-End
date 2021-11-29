import React from 'react'
import Banner from '../../components/Banners'
import { useInitBiconomy } from '../../hooks/useBiconomy'
import { useIsApproved } from '../../hooks/useCollection'
import { PageWrapper } from '../../styles/globalStyles'
import { CollectionCommon } from './CollectionCommon'
import { CollectionEpic } from './CollectionEpic'
import { CollectionMythic } from './CollectionMythic'
import { CollectionRare } from './CollectionRare'
import { CollectionUnCommon } from './CollectionUnCommon'
import { CollectionVideo } from './CollectionVideo'
import { CreatorBox } from './CreatorBox'
import { PackList } from './PackList'

const Collections: React.FC = () => {
  useIsApproved()
  // useInitBiconomy()

  return (
    <PageWrapper>
      <Banner
        mainTitle={'Fortnite Star'}
        subTitle={'Clix'}
        summary={'Get his first NFTs here, exclusively on Dropper'}
        isClix
      />
      <CollectionVideo />
      <PackList />
      {/* <CountdownBox /> */}
      <CollectionCommon />
      <CollectionUnCommon />
      <CollectionRare />
      <CollectionEpic />
      <CollectionMythic />
      <CreatorBox />
    </PageWrapper>
  )
}

export default Collections
