import React from 'react'
import { isMobile, isTablet } from 'react-device-detect'
import { BsTwitch, BsTwitter } from 'react-icons/bs'
import BANNER_IMG from '../../assets/images/banner.png'
import { TransparentBtn } from '../../components/Buttons/MainButton'
import { ContainerColumn, ContainerRow, TextCustom } from '../../styles/globalStyles'

const CreatorAdvertise: React.FC = () => {
  return (
    <ContainerColumn
      width={isMobile ? '100%' : '90%'}
      height={isMobile ? '50vw' : 'auto'}
      margin={'50px'}
      padding={'8%'}
      style={{ position: 'relative' }}
      image={BANNER_IMG}
      alignItems={'flex-start'}
    >
      <ContainerColumn alignItems="flex-start" width="40%">
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={'1.4vmax'}
          fontWeight={700}
          fontFamily={'RubikBold'}
          lineHeight={1.2}
          textAlign={'left'}
        >
          {'Enabling creators like Clix to create unqiue NFT experiences for their community. '}
        </TextCustom>
        <ContainerRow width="fit-content" margin={'2% 0'}>
          <BsTwitter size={isMobile || isTablet ? '2.8vmax' : '2.1vmax'} color={'#55ADEE'} />
          <TextCustom fontWeight={400} fontSize={'1.1vmax'}>
            {'2M Followers'}
          </TextCustom>
        </ContainerRow>
        <ContainerRow width="fit-content" margin={'2% 0'}>
          <BsTwitch size={isMobile || isTablet ? '2.8vmax' : '2.1vmax'} color={'#6C2498'} />
          <TextCustom fontWeight={400} fontSize={'1.1vmax'}>
            {'4.5M Followers'}
          </TextCustom>
        </ContainerRow>

        <TransparentBtn
          width={'fit-content'}
          borderRadius={'24px'}
          padding={'1.4vmax 2.4vmax'}
          onClick={() => (window.location.href = '/howtobuy')}
        >
          <TextCustom
            color={'var(--secondary)'}
            fontSize={'1.1vmax'}
            fontWeight={600}
            fontFamily={'RubikBold'}
            lineHeight={1.1}
            textAlign={'center'}
          >
            View Launch Page
          </TextCustom>
        </TransparentBtn>
      </ContainerColumn>
    </ContainerColumn>
  )
}

export default CreatorAdvertise
