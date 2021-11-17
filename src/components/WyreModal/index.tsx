import React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as Close } from '../../assets/images/x.svg'
import { useForm } from '../../hooks/useForm'
import { useActiveWeb3React } from '../../hooks/useWeb3'
import { useWyreDebitCard } from '../../hooks/useWyre'
import { useModalOpen, useWyreReservationModalToggle } from '../../state/application/hook'
import { ApplicationModal } from '../../state/application/reducer'
import {
  ComponentWrapper,
  ContainerColumn,
  ContainerRow,
  InputWrapper,
  TextDescription,
  TextMain,
} from '../../styles/globalStyles'
import { TWyreForm } from '../../types'
import { MainButton } from '../Buttons/MainButton'
import Modal from '../Modals/Modal'

const CloseIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 14px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`
const CloseColor = styled(Close)`
  path {
    stroke: #b2b9d2;
  }
`

const WyreReservationModal = () => {
  const { account } = useActiveWeb3React()
  const wyreModalOpen = useModalOpen(ApplicationModal.WYRE_RESERVATION_FORM)
  const toggleWyreModal = useWyreReservationModalToggle()
  const { onWyreDebitCard } = useWyreDebitCard()
  const {
    handleSubmit,
    handleChange,
    data: formInfo,
    errors,
  } = useForm<TWyreForm>({
    validations: {
      amount: {
        custom: {
          isValid: (value) => Number(value) > 0,
          message: 'Amount should be mucher than zero.',
        },
      },
      firstName: {
        pattern: {
          value: '^[A-Za-z]*$',
          message: "You're not allowed to use special characters or numbers in your name.",
        },
      },
      lastName: {
        pattern: {
          value: '^[A-Za-z]*$',
          message: "You're not allowed to use special characters or numbers in your name.",
        },
      },
      email: {
        pattern: {
          value: '',
          message: 'Wrong Email format',
        },
      },
    },
    onSubmit: () => {
      if (!account) return
      onWyreDebitCard({ ...formInfo, account })
    },
  })

  return (
    <Modal isOpen={wyreModalOpen} onDismiss={toggleWyreModal} minHeight={false} maxHeight={90}>
      <form onSubmit={handleSubmit}>
        <ComponentWrapper padding={'24px'}>
          <CloseIcon onClick={toggleWyreModal}>
            <CloseColor />
          </CloseIcon>
          <TextMain>Fiat To MUSDC</TextMain>
          <ContainerColumn>
            <ContainerColumn alignItems={'start'} margin={'12px 0 0'}>
              <TextDescription>{'Amount*'}</TextDescription>
              <InputWrapper
                placeholder="$0.0"
                value={formInfo.amount || ''}
                onChange={handleChange('amount')}
                required
              />
            </ContainerColumn>
            <ContainerColumn alignItems={'start'} margin={'12px 0 0'}>
              <TextDescription>{'Account*'}</TextDescription>
              <InputWrapper value={account!} disabled placeholder="Please Connect your wallet" />
            </ContainerColumn>
            <ContainerRow margin={'12px 0 0'}>
              <ContainerColumn alignItems={'start'}>
                <TextDescription>{'First Name*'}</TextDescription>
                <InputWrapper
                  placeholder="First Name"
                  value={formInfo.firstName || ''}
                  onChange={handleChange('firstName')}
                  required
                />
              </ContainerColumn>
              <ContainerColumn alignItems={'start'}>
                <TextDescription>{'Last Name*'}</TextDescription>
                <InputWrapper
                  placeholder="Last Name"
                  value={formInfo.lastName || ''}
                  onChange={handleChange('lastName')}
                  required
                />
              </ContainerColumn>
            </ContainerRow>
            <ContainerColumn alignItems={'start'} margin={'12px 0 0'}>
              <TextDescription>{'Email*'}</TextDescription>
              <InputWrapper
                placeholder="xxx@xxx.com"
                value={formInfo.email || ''}
                onChange={handleChange('email')}
                required
              />
            </ContainerColumn>
            <MainButton type="submit" margin={'24px 0 0'} borderRadius={'4px'} disabled={!account}>
              Complete on Wyre
            </MainButton>
          </ContainerColumn>
        </ComponentWrapper>
      </form>
    </Modal>
  )
}

export default WyreReservationModal
