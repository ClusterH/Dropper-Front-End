import React, { useLayoutEffect, useRef } from 'react'
import { isMobile } from 'react-device-detect'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import BORDER_EFFECT_IMG from '../../assets/images/text-border-bottom-effect.svg'
import { LinkedInIcon, SkypeIcon, TwitterIcon } from '../../components/Icons'
import { teamList } from '../../constants/dummy'
import { BoxCard, ComponentWrapper, ContainerRow, ImageContainer, PhotoContainer, SubText, TextCustom } from '../../styles/globalStyles'

const SocialNavLink = styled.a`
  text-decoration: none;
`

export const TeamCardBoxItem: React.FC<{
  src: string
  mainText: string
  contentText: string
  twitter?: string
  linkedin?: string
  skype?: string
}> = ({ src, mainText, contentText, twitter, linkedin, skype }) => {
  return (
    <BoxCard
      boxWidth={isMobile ? '40%' : '20%'}
      boxHeight={'auto'}
      border={'5px solid var(--light-navy)'}
      borderHover={'5px solid var(--light-secondary)'}
      backgroundHover={'var(--secondary)'}
      backgroundColor={'transparent'}
      flexDirection={'column'}
      justifyContent={'space-around'}
      margin={isMobile ? '10% 12px' : '12px'}
    >
      <PhotoContainer
        position={'relative'}
        border={isMobile ? '5px solid var(--primary-text)' : '10px solid var(--primary-text)'}
        backgroundColor={'#6E9673'}
        margin={'-50% 0 0 0'}
        padding={'0'}
      >
        <ImageContainer src={src} width={'100%'} height={'100%'} borderRadius={'50%'} objectFit={'cover'} />
      </PhotoContainer>
      <TextCustom
        color={'var(--primary-text)'}
        fontSize={isMobile ? '1rem' : '25px'}
        fontWeight={300}
        fontFamily={'Rubik'}
        lineHeight={1.1}
        textAlign={'center'}
        margin={'10% 2% 5% 2%'}
        style={{ whiteSpace: 'nowrap' }}
      >
        {mainText}
      </TextCustom>
      <TextCustom
        color={'var(--primary-text)'}
        fontSize={isMobile ? '0.6rem' : '16px'}
        fontWeight={300}
        fontFamily={'Rubik'}
        lineHeight={1.3}
        textAlign={'center'}
        margin={'3% 2% 5% 2%'}
      >
        {contentText}
      </TextCustom>
      <ContainerRow width={'80%'} padding={'0'} margin={'0 0 10% 0'} justifyContent={'center'} alignItems={'center'}>
        {twitter && (
          <SocialNavLink href={twitter} target="_blank">
            <TwitterIcon width={isMobile ? '20px' : '24px'} height={isMobile ? '20px' : '24px'} />
          </SocialNavLink>
        )}
        {linkedin && (
          <SocialNavLink href={linkedin} target="_blank">
            <LinkedInIcon width={isMobile ? '20px' : '24px'} height={isMobile ? '20px' : '24px'} />
          </SocialNavLink>
        )}
        {skype && (
          <SocialNavLink href={skype} target="_blank">
            <SkypeIcon width={isMobile ? '20px' : '24px'} height={isMobile ? '20px' : '24px'} />
          </SocialNavLink>
        )}
      </ContainerRow>
    </BoxCard>
  )
}

export const TeamCardBox: React.FC = () => {
  const teamRef = useRef<HTMLDivElement>(null)
  const { id } = useParams<{ id?: string }>()

  useLayoutEffect(() => {
    if (id === 'teams' && teamRef.current !== null) {
      teamRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [id])

  return (
    <ContainerRow ref={teamRef} width={'100%'} backgroundColor={'var(--dark-navy)'} padding={'0'} margin={'0'} justifyContent={'center'}>
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
            Team
          </SubText>
        </TextCustom>
        <ContainerRow margin={'10% 0'} flexWrap={isMobile ? 'wrap' : 'normal'}>
          {teamList.map((item) => {
            return (
              <TeamCardBoxItem
                key={`team_${item.id}`}
                src={item.imgUri}
                mainText={item.name}
                contentText={item.role}
                twitter={item.twitterLink}
                linkedin={item.linkedLink}
                skype={item.skypeLink}
              />
            )
          })}
        </ContainerRow>
      </ComponentWrapper>
    </ContainerRow>
  )
}
