import React from 'react'
import styled from 'styled-components'
import { ComponentWrapper, TextCustom, ContainerRow, SubText } from '../../styles/globalStyles'
import PartnerCard from '../../components/Cards/partnerCard'
import { isMobile } from 'react-device-detect'
import BORDER_EFFECT_IMG from '../../assets/images/text-border-bottom-effect.svg'
import { partnerList } from '../../constants/dummy'

const ContainerWithoutLeftBorder = styled(ContainerRow)<{ border?: string }>`
  border: ${({ border }) => (border ? border : '5px solid var(--light-navy-blue)')};
  border-right-width: 2px !important;
  border-left: none;
`

const ContainerWithoutRightBorder = styled(ContainerRow)<{ border?: string }>`
  border: ${({ border }) => (border ? border : '5px solid var(--light-navy-blue)')};
  border-left-width: 2px !important;
  border-right: none;
`

export const PartnersBox: React.FC = () => {
  return (
    <ContainerRow width={'100%'} backgroundColor={'var(--dark-navy)'} padding={'0'} margin={'0'} justifyContent={'center'}>
      <ComponentWrapper margin={isMobile ? '10px 0 0' : '50px 0 0'} padding={'24px'}>
        <TextCustom
          fontSize={isMobile ? '2rem' : '3.5rem'}
          fontWeight={600}
          fontFamily={'RubikBold'}
          lineHeight={1.1}
          textAlign={'center'}
          margin={'1% 0 2% 0'}
        >
          Meet Our&nbsp;
          <SubText
            color={'var(--secondary)'}
            fontSize={isMobile ? '2rem' : '3.5rem'}
            fontWeight={600}
            fontFamily={'RubikBold'}
            textAlign={'center'}
            borderImg={BORDER_EFFECT_IMG}
          >
            Partners
          </SubText>
        </TextCustom>
        <ContainerRow margin={'10% 0 10% 0'} gap={'0'} justifyContent={'center'} alignItems={'stretch'}>
          <ContainerWithoutLeftBorder
            margin={'0'}
            padding={'5% 2%'}
            justifyContent={'flex-end'}
            border={'5px solid var(--light-navy-blue)'}
          >
            <PartnerCard
              url={partnerList[0].imgUri}
              imgWidth={isMobile ? '60px' : '137px'}
              imgHeight={isMobile ? '60px' : '137px'}
              text={partnerList[0].name}
              twitter={partnerList[0].twitter}
            />
          </ContainerWithoutLeftBorder>
          <ContainerWithoutRightBorder margin={'0'} padding={'5% 2%'}>
            <PartnerCard
              url={partnerList[1].imgUri}
              imgWidth={isMobile ? '60px' : '137px'}
              imgHeight={isMobile ? '60px' : '137px'}
              text={partnerList[1].name}
              twitter={partnerList[1].twitter}
            />
            {/* <PartnerCard url={PARTNER_PATHIC} imgWidth={'137px'} imgHeight={'137px'} text={'Cryptopathic'} />
            <PartnerCard url={PARTNER_POLYGON} imgWidth={'137px'} imgHeight={'137px'} text={'Polygon'} /> */}
          </ContainerWithoutRightBorder>
        </ContainerRow>
      </ComponentWrapper>
    </ContainerRow>
  )
}
