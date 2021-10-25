import React, { useEffect } from 'react'
import OnlineImages from '../../components/Icons/onlineImages'
import { useCollectionContext } from '../../contexts/CollectionContext'
import { useIsApproved } from '../../hooks/useCollection'
import { PageWrapper } from '../../styles/globalStyles'
import { CollectionVideo } from './CollectionVideo'
import { PackList } from './PackList'

const Collections: React.FC = () => {
  const { creatorId } = useCollectionContext() // We are not use this logic for now since Creator is only Clix
  useIsApproved()

  return (
    <PageWrapper>
      <OnlineImages url={'https://dropper.s3.ca-central-1.amazonaws.com/clix-banner.png'}></OnlineImages>
      <CollectionVideo />
      <PackList />
    </PageWrapper>
  )
}

export default Collections
