import React from 'react'
import { isMobile } from 'react-device-detect'
import ETHEREUM_LOGO from '../../assets/images/ethereum_logo.svg'
import POLYGON_LOGO from '../../assets/images/polygon_logo.svg'
import SOLANA_LOGO from '../../assets/images/solana_logo.svg'
import Banner from '../../components/Banners'
import { ComponentWrapper, ContainerColumn, ContainerRow, ImageContainer, PageWrapper, TextCustom } from '../../styles/globalStyles'

const HowItWorkOld: React.FC = () => {
  return (
    <PageWrapper>
      <Banner
        mainTitle={'Top Collections'}
        subTitle={'dropper'}
        summary={'a non-fungible toket (NFT) is a unit of data stored on a digital ledger.'}
      />
      <ComponentWrapper margin={isMobile ? '0' : '50px 0 0'} padding={'24px'}>
        <ContainerColumn alignItems="flex-start">
          <ContainerRow alignItems="flex-start" justifyContent="flex-start" margin="0 0 40px 0">
            <TextCustom fontSize={isMobile ? '2.2vmax' : '1.4vmax'} fontWeight={500} textAlign="start">
              {'1.'}
            </TextCustom>
            <TextCustom fontSize={isMobile ? '2.2vmax' : '1.4vmax'} fontWeight={500} textAlign="start">
              {'Create an Account on Dropper.'}
            </TextCustom>
          </ContainerRow>
          <ContainerRow alignItems="flex-start" justifyContent="flex-start" margin="0 0 40px 0">
            <TextCustom fontSize={isMobile ? '2.2vmax' : '1.4vmax'} fontWeight={500} textAlign="start">
              {'2.'}
            </TextCustom>
            <TextCustom fontSize={isMobile ? '2.2vmax' : '1.4vmax'} fontWeight={500} textAlign="start">
              {'Create your collection with media, metadata and art.'}
            </TextCustom>
          </ContainerRow>
          <ContainerRow alignItems="flex-start" justifyContent="flex-start" margin="0 0 40px 0">
            <TextCustom fontSize={isMobile ? '2.2vmax' : '1.4vmax'} fontWeight={500} textAlign="start">
              {'3.'}
            </TextCustom>
            <TextCustom fontSize={isMobile ? '2.2vmax' : '1.4vmax'} fontWeight={500} textAlign="start">
              {'Select the network to launch your project on.'}
            </TextCustom>
          </ContainerRow>
          <ContainerRow justifyContent="space-evenly">
            <ImageContainer src={ETHEREUM_LOGO} width="24%" borderRadius="none" />
            <ImageContainer src={POLYGON_LOGO} width="24%" borderRadius="none" />
            <ImageContainer src={SOLANA_LOGO} width="24%" borderRadius="none" />
          </ContainerRow>
          <ContainerRow alignItems="flex-start" justifyContent="flex-start" margin="40px 0">
            <TextCustom fontSize={isMobile ? '2.2vmax' : '1.4vmax'} fontWeight={500} textAlign="start">
              {'4.'}
            </TextCustom>
            <TextCustom fontSize={isMobile ? '2.2vmax' : '1.4vmax'} fontWeight={500} textAlign="start">
              {'Upload media.'}
            </TextCustom>
          </ContainerRow>
          <ContainerRow alignItems="flex-start" justifyContent="flex-start" margin="0 0 40px 0">
            <TextCustom fontSize={isMobile ? '2.2vmax' : '1.4vmax'} fontWeight={500} textAlign="start">
              {'5.'}
            </TextCustom>
            <TextCustom fontSize={isMobile ? '2.2vmax' : '1.4vmax'} fontWeight={500} textAlign="start">
              {'Configure Your Collection.'}
            </TextCustom>
          </ContainerRow>
          <ContainerRow alignItems="flex-start" justifyContent="flex-start" margin="0 0 40px 0">
            <TextCustom fontSize={isMobile ? '2.2vmax' : '1.4vmax'} fontWeight={500} textAlign="start">
              {'6.'}
            </TextCustom>
            <TextCustom fontSize={isMobile ? '2.2vmax' : '1.4vmax'} fontWeight={500} textAlign="start">
              {'Confirm revenue and royalty split between founding members.'}
            </TextCustom>
          </ContainerRow>
          <ContainerRow alignItems="flex-start" justifyContent="flex-start" margin="0 0 40px 0">
            <TextCustom fontSize={isMobile ? '2.2vmax' : '1.4vmax'} fontWeight={500} textAlign="start">
              {'7.'}
            </TextCustom>
            <TextCustom fontSize={isMobile ? '2.2vmax' : '1.4vmax'} fontWeight={500} textAlign="start">
              {'Launch your project on Dropper and embed to your website.'}
            </TextCustom>
          </ContainerRow>
        </ContainerColumn>
      </ComponentWrapper>
    </PageWrapper>
  )
}

export default HowItWorkOld
