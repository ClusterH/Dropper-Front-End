import React from 'react'
import styled from 'styled-components/macro'
import { useMoonPayNFT, useMoonPayNFTURL } from '../../hooks/useMoonPay'
import { ContainerColumn, TextCustom } from '../../styles/globalStyles'
import Modal from '../Modals/Modal'

const IFrameContainer = styled.iframe`
  form {
    padding: 0 !important;
    margin: 0 !important;
  }
`

const MoonPayNFTModal: React.FC = () => {
  const { moonPayNFTModalOpen, toggleMoonPayNFTModal } = useMoonPayNFT()
  const moonPayNFTURL = useMoonPayNFTURL()

  return (
    <Modal
      isOpen={moonPayNFTModalOpen}
      onDismiss={toggleMoonPayNFTModal}
      width={'65vh'}
      minHeight={65}
      maxHeight={90}
      backColor="rgba(247,247,247)"
    >
      <ContainerColumn justifyContent="flex-start">
        <ContainerColumn padding="24px 24px 0">
          <TextCustom color="var(--dark-secondary)" fontSize="18px" fontWeight={700} lineHeight={1.8}>
            {'MoonPay'}
          </TextCustom>
          <TextCustom color="var(--secondary-text)" fontSize="14px" fontWeight={500}>
            {'You can Buy NFTs with MoonPay directly.'}
          </TextCustom>
        </ContainerColumn>

        <IFrameContainer
          allow="accelerometer; autoplay; camera; gyroscope; payment"
          frameBorder="0"
          height="100%"
          src={`${moonPayNFTURL}`}
          width="100%"
        >
          <p>Your browser does not support iframes.</p>
        </IFrameContainer>
      </ContainerColumn>
    </Modal>
  )
}

export default MoonPayNFTModal
