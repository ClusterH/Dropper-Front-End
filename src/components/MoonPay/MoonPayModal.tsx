import React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as Close } from '../../assets/images/x.svg'
import { useActiveWeb3React } from '../../hooks/useWeb3'
import { useModalOpen, useMoonPayModalToggle } from '../../state/application/hook'
import { ApplicationModal } from '../../state/application/reducer'
import Modal from '../Modals/Modal'

const MoonPayModal: React.FC = () => {
  const { chainId } = useActiveWeb3React()
  const moonPayModalOpen = useModalOpen(ApplicationModal.MOONPAY)
  const toggleMoonPayModal = useMoonPayModalToggle()
  const MOONPAY_API_KEY =
    chainId === 137 ? process.env.REACT_APP_MOONPAY_API_KEY : process.env.REACT_APP_MOONPAY_API_KEY_TEST

  return (
    <Modal isOpen={moonPayModalOpen} onDismiss={toggleMoonPayModal} width={'60vh'} minHeight={60} maxHeight={90}>
      <iframe
        allow="accelerometer; autoplay; camera; gyroscope; payment"
        frameBorder="0"
        height="auto"
        src={`https://buy-staging.moonpay.com?apiKey=${MOONPAY_API_KEY}&defaultCurrencyCode=matic&colorCode=%23ff0069`}
        width="100%"
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </Modal>
  )
}

export default MoonPayModal
