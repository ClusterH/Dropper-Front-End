import React, { useRef, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import {
  ComponentWrapper,
  BoxCard,
  TextCustom,
  ContainerRow,
  ImageContainer,
  SubText,
  ImageIconContainer,
  device,
  PhotoContainer,
} from '../../styles/globalStyles'
import { isDesktop, isMobile } from 'react-device-detect'
import BORDER_EFFECT_IMG from '../../assets/images/text-border-bottom-effect.svg'
import FIRST_PHOTO from '../../assets/photos/photo1.png'
import SECOND_PHOTO from '../../assets/photos/photo2.png'
import THIRD_PHOTO from '../../assets/photos/photo3.png'
import FOURTH_PHOTO from '../../assets/photos/photo4.png'
import { TelegramIcon, LinkedInIcon, SkypeIcon } from '../../components/Icons'
import { teamList } from '../../constants/dummy'

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
      boxWidth={'20%'}
      boxHeight={'auto'}
      border={'5px solid var(--light-navy)'}
      borderHover={'5px solid var(--light-secondary)'}
      backgroundHover={'var(--secondary)'}
      backgroundColor={'transparent'}
      flexDirection={'column'}
      justifyContent={'space-around'}
    >
      <PhotoContainer
        position={'relative'}
        border={'10px solid var(--primary-text)'}
        backgroundColor={'#6E9673'}
        margin={'-50% 0 0 0'}
        padding={'0'}
      >
        <ImageContainer src={src} width={'100%'} height={'100%'} borderRadius={'50%'} objectFit={'cover'} />
      </PhotoContainer>
      <TextCustom
        color={'var(--primary-text)'}
        fontSize={isMobile ? '0.8rem' : '25px'}
        fontWeight={300}
        fontFamily={'Rubik'}
        lineHeight={1.1}
        textAlign={'center'}
        margin={'10% 2% 5% 2%'}
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
            <TelegramIcon />
          </SocialNavLink>
        )}
        {linkedin && (
          <SocialNavLink href={linkedin} target="_blank">
            <LinkedInIcon />
          </SocialNavLink>
        )}
        {skype && (
          <SocialNavLink href={skype} target="_blank">
            <SkypeIcon />
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
    <ContainerRow
      ref={teamRef}
      width={'100%'}
      backgroundColor={'var(--dark-navy)'}
      padding={'0'}
      margin={'0'}
      justifyContent={'center'}
    >
      <ComponentWrapper margin={'50px 0 0'} padding={'24px'}>
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
        <ContainerRow margin={'10% 0 10% 0'}>
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
