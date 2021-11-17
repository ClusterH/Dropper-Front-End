import React from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import BORDER_EFFECT_IMG from '../../assets/images/text-border-bottom-effect.svg'
import PartnerCard from '../../components/Cards/partnerCard'
import { investorList } from '../../constants/dummy'
import { ComponentWrapper, ContainerRow, SubText, TextCustom } from '../../styles/globalStyles'

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

export const InvestorsBox: React.FC = () => {
  return (
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
          Investors
        </SubText>
      </TextCustom>
      <ContainerRow margin={'10% 0 0 0'} gap={'0'} justifyContent={'center'} alignItems={'stretch'}>
        <ContainerWithoutLeftBorder margin={'0'} padding={'5% 2%'} flexWrap={isMobile ? 'wrap' : 'normal'}>
          <PartnerCard
            url={investorList[0].imgUri}
            imgWidth={isMobile ? '60px' : '137px'}
            imgHeight={isMobile ? '60px' : '137px'}
            text={investorList[0].name}
            twitter={investorList[0].twitterLink}
            website={investorList[0].websiteLink}
          />
          <PartnerCard
            url={investorList[1].imgUri}
            imgWidth={isMobile ? '60px' : '137px'}
            imgHeight={isMobile ? '60px' : '137px'}
            text={investorList[1].name}
            twitter={investorList[1].twitterLink}
            website={investorList[1].websiteLink}
          />
        </ContainerWithoutLeftBorder>
        <ContainerWithoutRightBorder margin={'0'} padding={'5% 2%'} flexWrap={isMobile ? 'wrap' : 'normal'}>
          <PartnerCard
            url={investorList[2].imgUri}
            imgWidth={isMobile ? '60px' : '137px'}
            imgHeight={isMobile ? '60px' : '137px'}
            text={investorList[2].name}
            twitter={investorList[2].twitterLink}
            website={investorList[2].websiteLink}
          />
          <PartnerCard
            url={investorList[3].imgUri}
            imgWidth={isMobile ? '60px' : '137px'}
            imgHeight={isMobile ? '60px' : '137px'}
            text={investorList[3].name}
            twitter={investorList[3].twitterLink}
            website={investorList[3].websiteLink}
          />
        </ContainerWithoutRightBorder>
      </ContainerRow>
    </ComponentWrapper>
  )
}
