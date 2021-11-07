import React from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import {
  ComponentWrapper,
  ContainerColumn,
  ContainerRow,
  Divider,
  TextCustom,
  RoundedIconBox,
} from '../../styles/globalStyles'
import { FacebookIcon, LinkedInIcon, RedditIcon, TelegramIcon } from '../Icons'
import Logo from '../Icons/logo'
import QuickLink from '../QuickLink'

const FooterContainer = styled(ContainerColumn)`
  padding: 0.5rem 1rem;
  width: 100%;
  background-color: var(--dark-navy);
  justify-content: center;
  align-items: center;
`

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <ComponentWrapper margin={'50px 0 0'} padding={'24px'}>
        <ContainerRow width={'100%'} alignItems={'flex-start'} justifyContent={'flex-start'}>
          <ContainerColumn width={'25%'} alignItems={'flex-start'}>
            <Logo />
            <TextCustom
              color={'var(--primary-opacity)'}
              fontSize={isMobile ? '0.6rem' : '1rem'}
              fontWeight={300}
              fontFamily={'Rubik'}
              lineHeight={1.2}
              textAlign={'left'}
              margin={'3% 0 2% 0'}
            >
              This site is in no way affiliated with Twitch, TikTok or YouTube.
            </TextCustom>
          </ContainerColumn>
          <ContainerColumn width={'25%'} alignItems={'flex-start'}>
            <TextCustom
              color={'var(--primary-text)'}
              fontSize={isMobile ? '0.8rem' : '1.5rem'}
              fontWeight={600}
              fontFamily={'RubikBold'}
              lineHeight={1.2}
              textAlign={'left'}
              margin={'1% 0 10% 0'}
            >
              {'Location & Office'}
            </TextCustom>
            <TextCustom
              color={'var(--primary-opacity)'}
              fontSize={isMobile ? '0.6rem' : '1rem'}
              fontWeight={300}
              fontFamily={'Rubik'}
              lineHeight={1.2}
              textAlign={'left'}
              margin={'1% 0 5% 0'}
            >
              3027 23rd Avenue SW, Calgary, AB T3E 0J3
            </TextCustom>
            <TextCustom
              color={'var(--primary-opacity)'}
              fontSize={isMobile ? '0.6rem' : '1rem'}
              fontWeight={300}
              fontFamily={'Rubik'}
              lineHeight={1.2}
              textAlign={'left'}
              margin={'1% 0 5% 0'}
            >
              3027 23rd Avenue SW, Calgary, AB T3E 0J3
            </TextCustom>
          </ContainerColumn>
          <ContainerColumn width={'25%'} alignItems={'flex-start'}>
            <TextCustom
              color={'var(--primary-text)'}
              fontSize={isMobile ? '0.8rem' : '1.5rem'}
              fontWeight={600}
              fontFamily={'RubikBold'}
              lineHeight={1.2}
              textAlign={'left'}
              margin={'1% 0 10% 0'}
            >
              {'Quick Links'}
            </TextCustom>
            <QuickLink
              color={'var(--primary-opacity)'}
              fontSize={isMobile ? '0.6rem' : '1rem'}
              fontWeight={300}
              fontFamily={'Rubik'}
              textAlign={'left'}
              margin={'1% 0 8px 0'}
              text={'Home'}
              link={'/'}
            />
            <QuickLink
              color={'var(--primary-opacity)'}
              fontSize={isMobile ? '0.6rem' : '1rem'}
              fontWeight={300}
              fontFamily={'Rubik'}
              textAlign={'left'}
              margin={'8px 0 8px 0'}
              text={'FAQ'}
              link={'/faq'}
            />
            <QuickLink
              color={'var(--primary-opacity)'}
              fontSize={isMobile ? '0.6rem' : '1rem'}
              fontWeight={300}
              fontFamily={'Rubik'}
              textAlign={'left'}
              margin={'8px 0 8px 0'}
              text={'Contact'}
              link={'/'}
            />
          </ContainerColumn>
          <ContainerColumn width={'25%'} alignItems={'flex-start'}>
            <TextCustom
              color={'var(--primary-text)'}
              fontSize={isMobile ? '0.8rem' : '1.5rem'}
              fontWeight={600}
              fontFamily={'RubikBold'}
              lineHeight={1.2}
              textAlign={'left'}
              margin={'1% 0 10% 0'}
            >
              {'Socials Contact'}
            </TextCustom>
            <ContainerRow>
              <RoundedIconBox backColor={'var(--primary-text)'} width={'60px'}>
                <TelegramIcon color={'var(--secondary)'} />
              </RoundedIconBox>
              <RoundedIconBox backColor={'var(--primary-text)'} width={'60px'}>
                <FacebookIcon color={'var(--secondary)'} />
              </RoundedIconBox>
              <RoundedIconBox backColor={'var(--primary-text)'} width={'60px'}>
                <RedditIcon color={'var(--secondary)'} />
              </RoundedIconBox>
              <RoundedIconBox backColor={'var(--primary-text)'} width={'60px'}>
                <LinkedInIcon color={'var(--secondary)'} />
              </RoundedIconBox>
            </ContainerRow>
          </ContainerColumn>
        </ContainerRow>
        <Divider backColor={'var(--light-navy-blue)'} width={'100%'} height={'1px'} />
        <ContainerRow justifyContent={'center'}>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={isMobile ? '1rem' : '1.5rem'}
            fontWeight={600}
            fontFamily={'RubikBold'}
            lineHeight={1.2}
            textAlign={'left'}
            margin={'1% 0 2% 0'}
          >
            Copyright © 2021 Dropper
          </TextCustom>
        </ContainerRow>
      </ComponentWrapper>
    </FooterContainer>
  )
}

export default Footer
