import React from 'react'
import styled from 'styled-components'

const VideoWrapper = styled.video<{ width?: string }>`
  width: ${({ width }) => (width ? width : '80%')};
`
interface IVideoContainerProps {
  url: string
  posterUrl?: string
  width?: string
}
export const VideoContainer: React.FC<IVideoContainerProps> = ({ url, width, posterUrl }) => {
  return (
    <VideoWrapper loop autoPlay playsInline controls poster={posterUrl} width={width}>
      <source src={url} type="video/mp4" />
    </VideoWrapper>
  )
}
