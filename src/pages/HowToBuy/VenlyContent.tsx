import React from 'react'
import { isMobile, isTablet } from 'react-device-detect'
import VENLY_STEP_IMG1 from '../../assets/images/venly-step-1.jpg'
import VENLY_STEP_IMG2 from '../../assets/images/venly-step-2.jpg'
import VENLY_STEP_IMG3 from '../../assets/images/venly-step-3.jpg'
import { ComponentWrapper, ContainerColumn, ContainerRow, ImageContainer, TextCustom } from '../../styles/globalStyles'

const VenlyContent: React.FC = () => {
  return (
    <ComponentWrapper>
      <ContainerColumn margin="50px 0">
        <ContainerColumn alignItems="flex-start">
          <TextCustom color={'var(--secondary)'} fontSize={isMobile || isTablet ? '2.6vmax' : '1.6vmax'} fontWeight={700} lineHeight={3}>
            {'How to get started with Venly?'}
          </TextCustom>
          <ContainerRow justifyContent="flex-start" alignItems="flex-start">
            <TextCustom fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'} fontWeight={700}>
              {'Step1:'}&nbsp;
            </TextCustom>
            <TextCustom fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'} fontWeight={400} textAlign={'start'}>
              {'Select Venly as your Wallet'}
            </TextCustom>
          </ContainerRow>
        </ContainerColumn>
        <ImageContainer
          src={VENLY_STEP_IMG1}
          borderRadius={isMobile || isTablet ? '8px' : '30px'}
          width="60%"
          objectFit={'contain'}
          maxHeight="500px"
          margin="60px 0"
        />
        <ContainerColumn alignItems="flex-start">
          <ContainerRow justifyContent="flex-start" alignItems="flex-start">
            <TextCustom fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'} fontWeight={700}>
              {'Step2:'}&nbsp;
            </TextCustom>
            <TextCustom fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'} fontWeight={400} textAlign={'start'}>
              {
                'Select a Google, Facebook, or Twitter account to create an account with. Or Register your account by adding your email and a password.'
              }
            </TextCustom>
          </ContainerRow>
        </ContainerColumn>
        <ImageContainer
          src={VENLY_STEP_IMG2}
          borderRadius={isMobile || isTablet ? '8px' : '30px'}
          width="60%"
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
              {'Confirm your email.'}
            </TextCustom>
          </ContainerRow>
        </ContainerColumn>
        <ImageContainer
          src={VENLY_STEP_IMG3}
          borderRadius={isMobile || isTablet ? '8px' : '30px'}
          width="60%"
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
              {'Grant Dropper access privileges.'}
            </TextCustom>
          </ContainerRow>
        </ContainerColumn>
        <ImageContainer
          src={VENLY_STEP_IMG3}
          borderRadius={isMobile || isTablet ? '8px' : '30px'}
          width="60%"
          objectFit={'contain'}
          maxHeight="500px"
          margin="60px 0"
        />
        <ContainerColumn alignItems="flex-start">
          <ContainerRow justifyContent="flex-start" alignItems="flex-start">
            <TextCustom fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'} fontWeight={700}>
              {'Step5:'}&nbsp;
            </TextCustom>
            <TextCustom fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'} fontWeight={400} textAlign={'start'}>
              {
                'Set a master pin. This is like the pin on your debit card, you will need it every time you want to transact using your Venly wallet.'
              }
            </TextCustom>
          </ContainerRow>
        </ContainerColumn>
        <ImageContainer
          src={VENLY_STEP_IMG3}
          borderRadius={isMobile || isTablet ? '8px' : '30px'}
          width="60%"
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
              {'You’ve done it! You have successfully created your Venly account.'}
            </TextCustom>
          </ContainerColumn>
        ) : (
          <ContainerRow justifyContent="center">
            <TextCustom fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'} color="var(--secondary)" lineHeight={3}>
              {'Success!'}
            </TextCustom>
            <TextCustom fontSize={isMobile || isTablet ? '2.4vmax' : '1.4vmax'} color="var(--secondary)" fontWeight={400} lineHeight={3}>
              {'You’ve done it! You have successfully created your Venly account.'}
            </TextCustom>
          </ContainerRow>
        )}
      </ContainerColumn>
    </ComponentWrapper>
  )
}

export default VenlyContent
