import React from 'react'
import { useCollectionContext } from '../../contexts/CollectionContext'
import { useIsApproved } from '../../hooks/useCollection'
import Banner from '../../components/Banners'
import { PageWrapper } from '../../styles/globalStyles'
import { CollectionCommon } from './CollectionCommon'
import { CollectionUnCommon } from './CollectionUnCommon'
import { CollectionRare } from './CollectionRare'
import { CollectionEpic } from './CollectionEpic'
import { CollectionVideo } from './CollectionVideo'
import { CountdownBox } from './CountdownBox'
import { CreatorBox } from './CreatorBox'
import { PackList } from './PackList'
import { CollectionMythic } from './CollectionMythic'

const Collections: React.FC = () => {
  const { creatorId } = useCollectionContext() // We are not use this logic for now since Creator is only Clix
  useIsApproved()

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
