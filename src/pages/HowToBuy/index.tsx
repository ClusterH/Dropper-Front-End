import React, { useCallback, useState } from 'react'
import { isMobile, isTablet } from 'react-device-detect'
import styled from 'styled-components'
import Banner from '../../components/Banners'
import MainButton from '../../components/Buttons/MainButton'
import { SUPPORTED_WALLETS } from '../../constants/wallet'
import { ComponentWrapper, ContainerRow, ImageContainer, PageWrapper } from '../../styles/globalStyles'
import MetamaskContent from './MetamaskContent'
import VenlyContent from './VenlyContent'

const ButtonWrapper = styled(MainButton)<{ isActive: boolean }>`
  padding: ${isMobile || isTablet ? '2.4vmax 2.8vmax' : '2vmax 2.4vmax'};
  font-size: 2.1vmax;
  font-weight: bold;
  width: ${isMobile || isTablet ? '42%' : '420px'};
  background: ${({ isActive }) => (isActive ? 'var(--light-primary)' : 'var(--secondary)')};
  color: ${({ isActive }) => (isActive ? 'var(--secondary)' : 'var(--primary-text)')};
`
const HowToBuy: React.FC = () => {
  const [selectedWallet, setSelectedWallet] = useState<'Metamask' | 'Venly'>('Metamask')

  const handleSwitchWallet = useCallback((wallet: 'Metamask' | 'Venly') => setSelectedWallet(wallet), [])
  return (
    <PageWrapper>
      <Banner mainTitle={'How to Buy'} subTitle={'Droppers'} />
      <ComponentWrapper margin={isMobile ? '0' : '50px 0 0'} padding={'24px'}>
        <ContainerRow justifyContent="space-evenly" margin="50px 0">
          <ButtonWrapper onClick={() => handleSwitchWallet('Metamask')} borderRadius="100px" isActive={selectedWallet === 'Metamask'}>
            <ImageContainer width="1.8vmax" src={SUPPORTED_WALLETS.METAMASK.iconURL} borderRadius="none" />
            &nbsp;{'Metamask'}
          </ButtonWrapper>
          <ButtonWrapper onClick={() => handleSwitchWallet('Venly')} borderRadius="100px" isActive={selectedWallet === 'Venly'}>
            <ImageContainer width="2.2vmax" src={SUPPORTED_WALLETS.VENLY.iconURL} borderRadius="none" />
            &nbsp;{'Venly'}
          </ButtonWrapper>
        </ContainerRow>
        {selectedWallet === 'Metamask' ? <MetamaskContent /> : <VenlyContent />}
      </ComponentWrapper>
    </PageWrapper>
  )
}

export default HowToBuy
