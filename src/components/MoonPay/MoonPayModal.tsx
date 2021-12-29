import React from 'react'
import styled from 'styled-components/macro'
import { useMoonPay } from '../../hooks/useMoonPay'
import Modal from '../Modals/Modal'

const IFrameContainer = styled.iframe`
  form {
    padding: 0 !important;
    margin: 0 !important;
  }
`

const MoonPayModal: React.FC = () => {
  const { moonPayModalOpen, toggleMoonPayModal, moonPayURL } = useMoonPay()

  return (
    <Modal isOpen={moonPayModalOpen} onDismiss={toggleMoonPayModal} width={'65vh'} minHeight={65} maxHeight={90}>
      <IFrameContainer
        allow="accelerometer; autoplay; camera; gyroscope; payment"
        frameBorder="0"
        height="auto"
        src={`${moonPayURL}`}
        width="100%"
      >
        <p>Your browser does not support iframes.</p>
      </IFrameContainer>
    </Modal>
  )
}

export default MoonPayModal
