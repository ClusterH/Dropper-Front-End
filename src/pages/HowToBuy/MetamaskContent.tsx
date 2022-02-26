import React from 'react'
import { isMobile, isTablet } from 'react-device-detect'
import METAMASK_STEP_IMG1 from '../../assets/images/metamask-step-1.png'
import METAMASK_STEP_IMG2 from '../../assets/images/metamask-step-2.png'
import METAMASK_STEP_IMG3 from '../../assets/images/metamask-step-3.png'
import { ExternalLink } from '../../styles/components'
import { ComponentWrapper, ContainerColumn, ContainerRow, ImageContainer, TextCustom } from '../../styles/globalStyles'

const MetamaskContent: React.FC = () => {
  return (
    <ComponentWrapper>
      <ContainerColumn margin="50px 0">
        <ContainerColumn alignItems="flex-start">
          <TextCustom color={'var(--secondary)'} fontSize={isMobile || isTablet ? '2.6vmax' : '1.6vmax'} fontWeight={700} lineHeight={3}>
            {'How to get started with MetaMask?'}
          </TextCustom>
          <ContainerRow justifyContent="flex-start" alignItems="flex-start">
            <TextCustom fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'} fontWeight={700}>
              {'Step1:'}&nbsp;
            </TextCustom>
            <TextCustom fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'} fontWeight={400} textAlign={'start'}>
              {'Install MetaMask in your browser'}&nbsp;
              <ExternalLink href={'https://metamask.io/download.html'}>{'https://metamask.io/download.html'}</ExternalLink>
            </TextCustom>
          </ContainerRow>
          <ContainerRow justifyContent="flex-start" alignItems="flex-start">
            <TextCustom fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'} fontWeight={700}>
              {'Step2:'}&nbsp;
            </TextCustom>
            <TextCustom fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'} fontWeight={400} textAlign={'start'}>
              {'Create an account in MetaMask on the “Create a wallet” button.'}
            </TextCustom>
          </ContainerRow>
        </ContainerColumn>
        <ImageContainer
          src={METAMASK_STEP_IMG1}
          borderRadius={isMobile || isTablet ? '8px' : '30px'}
          width="42%"
          objectFit={'contain'}
          maxHeight="500px"
          margin="60px 0"
        />
        <ContainerColumn alignItems="flex-start">
          <ContainerRow justifyContent="flex-start" alignItems="flex-start">
            <TextCustom fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'} fontWeight={700}>
              {'Step3:'}&nbsp;
            </TextCustom>
            <TextCustom fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'} fontWeight={400} textAlign={'start'}>
              {'Create a Password of at least 8 characters and then click on “Create”.'}
            </TextCustom>
          </ContainerRow>
          <ContainerRow justifyContent="flex-start" alignItems="flex-start">
            <TextCustom fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'} color="var(--secondary)" fontWeight={700}>
              {'IMPORTANT:'}&nbsp;
            </TextCustom>
            <TextCustom
              fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'}
              color="var(--secondary)"
              fontWeight={400}
              textAlign={'start'}
            >
              {'Back up and write down your password on a piece of paper.'}
            </TextCustom>
          </ContainerRow>
        </ContainerColumn>
        <ImageContainer
          src={METAMASK_STEP_IMG2}
          borderRadius={isMobile || isTablet ? '8px' : '30px'}
          width="42%"
          objectFit={'contain'}
          maxHeight="500px"
          margin="60px 0"
        />
        <ContainerColumn alignItems="flex-start">
          <ContainerRow justifyContent="flex-start" alignItems="flex-start">
            <TextCustom fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'} fontWeight={700}>
              {'Step4:'}&nbsp;
            </TextCustom>
            <TextCustom fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'} fontWeight={400} textAlign={'start'}>
              {'Select each phrase in order to make sure it is correct then click “Confirm”.'}
            </TextCustom>
          </ContainerRow>
          <ContainerRow justifyContent="flex-start" alignItems="flex-start">
            <TextCustom fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'} color="var(--secondary)" fontWeight={700}>
              {'IMPORTANT:'}&nbsp;
            </TextCustom>
            <TextCustom
              fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'}
              color="var(--secondary)"
              fontWeight={400}
              textAlign={'start'}
            >
              {'Write down your Secret Backup Phrase on a piece of paper and store it in a secure location.'}
            </TextCustom>
          </ContainerRow>
        </ContainerColumn>
        <ImageContainer
          src={METAMASK_STEP_IMG3}
          borderRadius={isMobile || isTablet ? '8px' : '30px'}
          width="42%"
          objectFit={'contain'}
          maxHeight="500px"
          margin="60px 0"
        />
        {isMobile || isTablet ? (
          <ContainerColumn justifyContent="center">
            <TextCustom fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'} color="var(--secondary)" lineHeight={3}>
              {'Success!'}
            </TextCustom>
            <TextCustom fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'} color="var(--secondary)" fontWeight={400} lineHeight={3}>
              {'You’ve done it! You have successfully created your MetaMask account.'}
            </TextCustom>
          </ContainerColumn>
        ) : (
          <ContainerRow justifyContent="center">
            <TextCustom fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'} color="var(--secondary)" lineHeight={3}>
              {'Success!'}
            </TextCustom>
            <TextCustom fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'} color="var(--secondary)" fontWeight={400} lineHeight={3}>
              {'You’ve done it! You have successfully created your MetaMask account.'}
            </TextCustom>
          </ContainerRow>
        )}
      </ContainerColumn>
    </ComponentWrapper>
  )
}

export default MetamaskContent
