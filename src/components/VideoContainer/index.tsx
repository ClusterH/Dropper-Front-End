import React from 'react'
import styled from 'styled-components'

const VideoWrapper = styled.video<{ width?: string; height?: string; borderRadius?: string; border?: string }>`
  width: ${({ width }) => (width ? width : '80%')};
  height: ${({ height }) => (height ? height : 'auto')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '4px')};
  border: ${({ border }) => (border ? border : 'none')};
`
interface IVideoContainerProps {
  url: string
  posterUrl?: string
  width?: string
  height?: string
  borderRadius?: string
  border?: string
}
export const VideoContainer: React.FC<IVideoContainerProps> = ({
  url,
  posterUrl,
  width,
  height,
  borderRadius,
  border,
}) => {
  return (
    <VideoWrapper
      loop
      autoPlay
      playsInline
      controls
      poster={posterUrl}
      width={width}
      height={height}
      borderRadius={borderRadius}
      border={border}
      preload={'metadata'}
    >
      <source src={url} type="video/mp4" />
    </VideoWrapper>
  )
}
