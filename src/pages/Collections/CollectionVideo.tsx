import React from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import { VideoContainer } from '../../components/VideoContainer'
import { ComponentWrapper } from '../../styles/globalStyles'

const CollectionVideoWrapper = styled(ComponentWrapper)`
  display: flex;
  justify-content: center;
  margin: 5% 0;
`
export const CollectionVideo: React.FC = () => {
  return (
    <CollectionVideoWrapper>
      <VideoContainer
        width={isMobile ? '50%' : '80%'}
        url={'https://dropper.s3.ca-central-1.amazonaws.com/Clix+NFT+Announce+Video+(2).mp4'}
        posterUrl={'https://dropper.s3.ca-central-1.amazonaws.com/announcement-poster.jpg'}
      />
    </CollectionVideoWrapper>
  )
}
