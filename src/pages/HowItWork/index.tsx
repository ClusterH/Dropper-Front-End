import React from 'react'
import { isMobile } from 'react-device-detect'
import ETHEREUM_LOGO from '../../assets/images/ethereum_logo.svg'
import POLYGON_LOGO from '../../assets/images/polygon_logo.svg'
import SOLANA_LOGO from '../../assets/images/solana_logo.svg'
import Banner from '../../components/Banners'
import { ComponentWrapper, ContainerColumn, ContainerRow, ImageContainer, PageWrapper, TextCustom } from '../../styles/globalStyles'

const HowItWork: React.FC = () => {
  return (
    <PageWrapper>
      <Banner
        mainTitle={'Top Collections'}
        subTitle={'dropper'}
        summary={'a non-fungible toket (NFT) is a unit of data stored on a digital ledger.'}
      />
      <ComponentWrapper margin={isMobile ? '0' : '50px 0 0'} padding={'24px'}>
        <ContainerColumn alignItems="flex-start">
          <TextCustom fontSize="26px" fontWeight={500} margin="0 0 40px 0">
            {'1. Create an Account on Dropper.'}
          </TextCustom>
          <TextCustom fontSize="26px" fontWeight={500} margin="0 0 40px 0">
            {'2. Create your collection with media, metadata and art.'}
          </TextCustom>
          <TextCustom fontSize="26px" fontWeight={500} margin="0 0 40px 0">
            {'3. Select the network to launch your project on.'}
          </TextCustom>
          <ContainerRow justifyContent="space-evenly">
            <ImageContainer src={ETHEREUM_LOGO} width="24%" borderRadius="none" />
            <ImageContainer src={POLYGON_LOGO} width="24%" borderRadius="none" />
            <ImageContainer src={SOLANA_LOGO} width="24%" borderRadius="none" />
          </ContainerRow>
          <TextCustom fontSize="26px" fontWeight={500} margin="40px 0">
            {'4. Upload media.'}
          </TextCustom>
          <TextCustom fontSize="26px" fontWeight={500} margin="0 0 40px 0">
            {'5. Configure Your Collection.'}
          </TextCustom>
          <TextCustom fontSize="26px" fontWeight={500} margin="0 0 40px 0">
            {'6. Confirm revenue and royalty split between founding members.'}
          </TextCustom>
          <TextCustom fontSize="26px" fontWeight={500} margin="0 0 40px 0">
            {'7. Launch your project on Dropper and embed to your website.'}
          </TextCustom>
        </ContainerColumn>
      </ComponentWrapper>
    </PageWrapper>
  )
}

export default HowItWork
