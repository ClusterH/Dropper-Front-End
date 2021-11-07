import React, { useState } from 'react'
import styled from 'styled-components'
import { BoxCard, ContainerColumn, ContainerRow, RoundedIconBox, TextCustom } from '../../styles/globalStyles'
import TelegramIcon from '../../components/Icons/telegramIcon'
import LinkedinIcon from '../../components/Icons/linkedinIcon'
import SkypeIcon from '../../components/Icons/skypeIcon'
import { isMobile } from 'react-device-detect'
import FacebookIcon from '../Icons/facebookIcon'
import RedditIcon from '../Icons/redditIcon'
import PartnerCard from './partnerCard'

const ImgContainer = styled.img<{ imgWidth?: string; imgHeight?: string }>`
  width: ${({ imgWidth }) => (imgWidth ? imgWidth : '100%')};
  height: ${({ imgHeight }) => (imgHeight ? imgHeight : 'auto')};
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid var(--light-blue);
  padding: 0;
`

const CollectionHorizontalCard: React.FC<{
  url: string
  imgWidth?: string
  imgHeight?: string
  boxWidth?: string
  title?: string
  content?: string
}> = ({ url, imgWidth, imgHeight, boxWidth, title, content }) => {
  const [isCardOver, setIsCardOver] = useState<boolean>(false)

  return (
    <BoxCard
      boxWidth={boxWidth}
      // boxHeight={'600px'}
      border={'none'}
      borderHover={'none'}
      backgroundColor={'var(--light-navy-blue)'}
      backgroundHover={'var(--secondary)'}
      flexDirection={'row'}
      justifyContent={'space-around'}
      padding={'20px'}
      onMouseOver={() => setIsCardOver(true)}
      onMouseLeave={() => setIsCardOver(false)}
    >
      <ImgContainer src={url} imgWidth={imgWidth} imgHeight={imgHeight} />
      <ContainerColumn alignItems={'flex-start'}>
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '1.5rem' : '2rem'}
          fontWeight={600}
          fontFamily={'RubikBold'}
          lineHeight={1.3}
          textAlign={'left'}
          margin={'5% 2% 2% 5%'}
        >
          {title}
        </TextCustom>
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '0.6rem' : '1rem'}
          fontWeight={300}
          fontFamily={'Rubik'}
          lineHeight={1.3}
          textAlign={'left'}
          margin={'3% 2% 5% 5%'}
        >
          {content}
        </TextCustom>
        <TextCustom
          color={'var(--primary-text)'}
          textAlign={'left'}
          fontSize={isMobile ? '1rem' : '1.2rem'}
          fontWeight={600}
          margin={'3% 2% 5% 5%'}
        >
          Share Socials
        </TextCustom>
        <ContainerRow justifyContent={'flex-start'} margin={'10px'}>
          <RoundedIconBox backColor={isCardOver ? 'var(--primary-text)' : 'var(--navy-blue-opacity)'} width={'30px'}>
            <TelegramIcon color={'var(--secondary)'} width={'16px'} height={'16px'} />
          </RoundedIconBox>
          <RoundedIconBox backColor={isCardOver ? 'var(--primary-text)' : 'var(--navy-blue-opacity)'} width={'30px'}>
            <FacebookIcon color={'var(--secondary)'} width={'16px'} height={'16px'} />
          </RoundedIconBox>
          <RoundedIconBox backColor={isCardOver ? 'var(--primary-text)' : 'var(--navy-blue-opacity)'} width={'30px'}>
            <RedditIcon color={'var(--secondary)'} width={'16px'} height={'16px'} />
          </RoundedIconBox>
          <RoundedIconBox backColor={isCardOver ? 'var(--primary-text)' : 'var(--navy-blue-opacity)'} width={'30px'}>
            <LinkedinIcon color={'var(--secondary)'} width={'16px'} height={'16px'} />
          </RoundedIconBox>
        </ContainerRow>
      </ContainerColumn>
    </BoxCard>
  )
}

export default CollectionHorizontalCard
