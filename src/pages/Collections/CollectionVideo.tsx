import React from 'react'
import styled from 'styled-components'
import { ComponentWrapper, ContainerRow, PageWrapper, TextCustom, TextTitle } from '../../styles/globalStyles'
import { VideoContainer } from '../../components/VideoContainer'

const CollectionVideoWrapper = styled(ComponentWrapper)`
  margin-top: -300px;
  text-align: center;
`
export const CollectionVideo: React.FC = () => {
  return (
    <CollectionVideoWrapper>
      <VideoContainer
        url={'https://dropper.s3.ca-central-1.amazonaws.com/Clix+NFT+Announce+Video+(2).mp4'}
        posterUrl={'https://dropper.s3.ca-central-1.amazonaws.com/announcement-poster.jpg'}
      />
    </CollectionVideoWrapper>
  )
}
