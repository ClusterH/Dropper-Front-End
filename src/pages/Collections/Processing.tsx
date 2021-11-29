import React from 'react'
import PropagateLoader from 'react-spinners/PropagateLoader'
import styled from 'styled-components'
import { VideoContainer } from '../../components/VideoContainer'
import { ContainerRow, TextCustom } from '../../styles/globalStyles'

const LoaderWrapper = styled.div`
  position: fixed;
  top: 120px;
  left: 0;
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 1);
  z-index: 1;
`
export const ProcessingLoader: React.FC<{ animationUrl?: string }> = ({ animationUrl }) => {
  return (
    <LoaderWrapper>
      <VideoContainer
        width={'60%'}
        height={'calc(100vh - 300px)'}
        url={animationUrl ? animationUrl : 'https://dropper.s3.ca-central-1.amazonaws.com/processing.mp4'}
        posterUrl={'https://dropper.s3.ca-central-1.amazonaws.com/clix-pack2.png'}
        isAutoPlay={true}
      ></VideoContainer>
      <ContainerRow justifyContent={'center'}>
        <TextCustom>Processing your transaction... This can take a few minutes</TextCustom>
      </ContainerRow>
      <ContainerRow justifyContent={'center'}>
        <PropagateLoader color={'#ff0069'} size={'32px'} />
      </ContainerRow>
    </LoaderWrapper>
  )
}
