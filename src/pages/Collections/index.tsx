import React from 'react'
import OnlineImages from '../../components/Icons/onlineImages'
import { VideoContainer } from '../../components/VideoContainer'
import { ComponentWrapper, ContainerRow, PageWrapper } from '../../styles/globalStyles'
import styled from 'styled-components'

const VideoWrapper = styled(ComponentWrapper)`
  position: fixed;
  top: 300px;
`

const Collections: React.FC = () => {
  return (
    <PageWrapper>
      <OnlineImages url={'https://dropper.s3.ca-central-1.amazonaws.com/clix-banner.png'}></OnlineImages>
      <VideoWrapper>
        <ContainerRow justifyContent={'center'}>
          <VideoContainer
            url={'https://dropper.s3.ca-central-1.amazonaws.com/Clix+NFT+Announce+Video+(2).mp4'}
            posterUrl={'https://dropper.s3.ca-central-1.amazonaws.com/announcement-poster.jpg'}
          />
        </ContainerRow>
      </VideoWrapper>
    </PageWrapper>
  )
}

export default Collections
