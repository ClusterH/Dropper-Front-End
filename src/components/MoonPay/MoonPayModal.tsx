import React from 'react'
import styled from 'styled-components/macro'
import { useMoonPay } from '../../hooks/useMoonPay'
import { useUSDCBalance } from '../../hooks/useWallet'
import { ContainerColumn, TextCustom } from '../../styles/globalStyles'
import Modal from '../Modals/Modal'

const IFrameContainer = styled.iframe`
  form {
    padding: 0 !important;
    margin: 0 !important;
  }
`

const MoonPayModal: React.FC = () => {
  const { moonPayModalOpen, toggleMoonPayModal, moonPayUSDCURL } = useMoonPay()
  return (
    <Modal
      isOpen={moonPayModalOpen}
      onDismiss={toggleMoonPayModal}
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
            {'Insufficient Amount USDC in your wallet. You can add funds with MoonPay Solution easily'}
          </TextCustom>
        </ContainerColumn>

        <IFrameContainer
          allow="accelerometer; autoplay; camera; gyroscope; payment"
          frameBorder="0"
          height="100%"
          src={`${moonPayUSDCURL}`}
          width="100%"
        >
          <p>Your browser does not support iframes.</p>
        </IFrameContainer>
      </ContainerColumn>
    </Modal>
  )
}

export default MoonPayModal
