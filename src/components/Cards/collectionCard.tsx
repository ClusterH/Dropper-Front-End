import React, { useState } from 'react'
import styled from 'styled-components'
import { BoxCard, ContainerColumn, ContainerRow, RoundedIconBox, TextCustom } from '../../styles/globalStyles'
import { TelegramIcon, LinkedInIcon, FacebookIcon, RedditIcon } from '../Icons'
import { isMobile } from 'react-device-detect'

const ImgContainer = styled.img<{ imgWidth?: string; imgHeight?: string }>`
  width: ${({ imgWidth }) => (imgWidth ? imgWidth : '100%')};
  height: ${({ imgHeight }) => (imgHeight ? imgHeight : 'auto')};
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid var(--light-blue);
  padding: 0;
`
const CollectionTextBox = styled(TextCustom)`
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

const CollectionCard: React.FC<{
  url: string
  imgWidth?: string
  imgHeight?: string
  boxWidth?: string
  title?: string
  content?: string
  isVertical: boolean
}> = ({ url, imgWidth, imgHeight, boxWidth, title, content, isVertical }) => {
  const [isCardOver, setIsCardOver] = useState<boolean>(false)

  return (
    <BoxCard
      boxWidth={boxWidth}
      border={'none'}
      borderHover={'none'}
      backgroundColor={'var(--light-navy-blue)'}
      backgroundHover={'var(--secondary)'}
      flexDirection={'column'}
      justifyContent={'space-around'}
      padding={'20px'}
      onMouseOver={() => setIsCardOver(true)}
      onMouseLeave={() => setIsCardOver(false)}
    >
      <ImgContainer src={url} imgWidth={imgWidth} imgHeight={imgHeight} />
      <ContainerColumn alignItems={`${isVertical ? 'center' : 'flex-start'}`}>
        <CollectionTextBox
          color={'var(--primary-text)'}
          fontSize={isMobile ? '1.5rem' : '2rem'}
          fontWeight={600}
          fontFamily={'RubikBold'}
          lineHeight={1.3}
          textAlign={`${isVertical ? 'center' : 'left'}`}
          margin={'5% 2% 2% 5%'}
        >
          {title}
        </CollectionTextBox>
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '0.6rem' : '1rem'}
          fontWeight={300}
          fontFamily={'Rubik'}
          lineHeight={1.3}
          textAlign={`${isVertical ? 'center' : 'left'}`}
          margin={'3% 2% 5% 5%'}
        >
          {content}
        </TextCustom>
        <TextCustom
          color={'var(--primary-text)'}
          textAlign={`${isVertical ? 'center' : 'left'}`}
          fontSize={isMobile ? '1rem' : '1.2rem'}
          fontWeight={600}
          margin={`${isVertical ? '0' : '3% 2% 5% 5%'}`}
        ></TextCustom>
        <ContainerRow
          justifyContent={`${isVertical ? 'center' : 'flex-start'}`}
          margin={`${isVertical ? '20px 10px' : '10px'}`}
        ></ContainerRow>
      </ContainerColumn>
    </BoxCard>
  )
}

export default CollectionCard
