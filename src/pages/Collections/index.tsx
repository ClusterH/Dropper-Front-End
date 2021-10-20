import React from 'react'
import OnlineImages from '../../components/Icons/onlineImages'
import { useCollectionContext } from '../../contexts/CollectionContext'
import { PageWrapper } from '../../styles/globalStyles'
import { CollectionVideo } from './CollectionVideo'
import { PackList } from './PackList'

const Collections: React.FC = () => {
  const { creatorId } = useCollectionContext()

  return (
    <PageWrapper>
      <OnlineImages url={'https://dropper.s3.ca-central-1.amazonaws.com/clix-banner.png'}></OnlineImages>
      <CollectionVideo />
      <PackList />
    </PageWrapper>
  )
}

export default Collections
