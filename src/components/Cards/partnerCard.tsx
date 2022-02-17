import React from 'react'
import { isMobile } from 'react-device-detect'
import { BiLink } from 'react-icons/bi'
import styled from 'styled-components'
import { LinkedInIcon, SkypeIcon, TwitterIcon } from '../../components/Icons'
import { ContainerColumn, ContainerRow, TextCustom } from '../../styles/globalStyles'

const ImgContainer = styled.img<{ imgWidth?: string; imgHeight?: string }>`
  width: ${({ imgWidth }) => (imgWidth ? imgWidth : '100%')};
  height: ${({ imgHeight }) => (imgHeight ? imgHeight : 'auto')};
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid var(--light-blue);
  padding: 0;
`
const SocialNavLink = styled.a`
  text-decoration: none;
`

const PartnerCard: React.FC<{
  url?: string
  imgWidth?: string
  imgHeight?: string
  boxWidth?: string
  text?: string
  twitter?: string
  linkedin?: string
  skype?: string
  website?: string
}> = ({ url, imgWidth, imgHeight, boxWidth, text, twitter, linkedin, skype, website }) => {
  return (
    <ContainerRow
      width={boxWidth}
      padding={'0 0 0 10px'}
      margin={'0'}
      justifyContent={isMobile ? 'flex-start' : 'center'}
      alignItems={'center'}
    >
      <ImgContainer src={url} imgWidth={imgWidth} imgHeight={imgHeight} />
      <ContainerColumn alignItems={'flex-start'} width={'auto'}>
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '0.8rem' : '20px'}
          fontWeight={300}
          fontFamily={'Rubik'}
          lineHeight={1.3}
          textAlign={'left'}
          margin={isMobile ? '0' : '3% 2% 5% 5%'}
        >
          {text}
        </TextCustom>
        <ContainerRow width={'80%'} padding={'0'} margin={'5% 0 10% 0'} justifyContent={'flex-start'} alignItems={'center'}>
          {website && (
            <SocialNavLink href={website} target="_blank" onClick={(event) => (website ? null : event.preventDefault())}>
              <BiLink color={'var(--primary-text)'} size={isMobile ? '20px' : '24px'} />
            </SocialNavLink>
          )}
          {twitter && (
            <SocialNavLink href={twitter} target="_blank">
              <TwitterIcon color={'var(--primary-text)'} width={isMobile ? '20px' : '24px'} height={isMobile ? '20px' : '24px'} />
            </SocialNavLink>
          )}
          {linkedin && (
            <SocialNavLink href={linkedin} target="_blank">
              <LinkedInIcon color={'var(--primary-text)'} width={isMobile ? '20px' : '24px'} height={isMobile ? '20px' : '24px'} />
            </SocialNavLink>
          )}
          {skype && (
            <SocialNavLink href={skype} target="_blank">
              <SkypeIcon color={'var(--primary-text)'} width={isMobile ? '20px' : '24px'} height={isMobile ? '20px' : '24px'} />
            </SocialNavLink>
          )}
        </ContainerRow>
      </ContainerColumn>
    </ContainerRow>
  )
}

export default PartnerCard
