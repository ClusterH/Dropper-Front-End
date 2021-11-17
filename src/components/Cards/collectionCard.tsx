import React, { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import { BoxCard, ContainerColumn, ContainerRow, TextCustom, size } from '../../styles/globalStyles'

const ImgContainer = styled.img<{ imgWidth?: string; imgHeight?: string }>`
  width: ${({ imgWidth }) => (imgWidth ? imgWidth : '100%')};
  height: ${({ imgHeight }) => (imgHeight ? imgHeight : 'auto')};
  min-height: ${({ imgHeight }) => (imgHeight ? imgHeight : 'auto')};
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
  @media screen and (max-width: ${size.tablet}) {
    width: 60vw;
  }
`
interface PromiseWithCancel<T> extends Promise<T> {
  cancel: () => void
}

const CollectionCard: React.FC<{
  url: string
  imgWidth?: string
  imgHeight?: string
  boxWidth?: string
  title?: string
  contentUrl?: string
  isVertical: boolean
}> = ({ url, imgWidth, imgHeight, boxWidth, title, contentUrl, isVertical }) => {
  const [isCardOver, setIsCardOver] = useState<boolean>(false)
  const [content, setContent] = useState<string | undefined>('')

  useEffect(() => {
    const controller = new AbortController()
    if (!!contentUrl)
      fetch(contentUrl, {
        headers: { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      })
        .then((response) => {
          if (response.ok) {
            return response.text()
          } else {
            return ''
          }
        })
        .then((data) => {
          setContent(data)
        })
        .catch((err) => {
          console.log('[fetch error]', err)
        })
    return () => {
      controller.abort()
    }
  }, [contentUrl])

  return (
    <BoxCard
      boxWidth={boxWidth}
      boxHeight={isMobile ? '350px' : '500px'}
      border={'none'}
      borderHover={'none'}
      backgroundColor={'var(--light-navy-blue)'}
      backgroundHover={'var(--secondary)'}
      flexDirection={'column'}
      justifyContent={'flex-start'}
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
          fontSize={isMobile ? '0.8rem' : '1rem'}
          fontWeight={300}
          fontFamily={'Rubik'}
          lineHeight={1.3}
          textAlign={`${isVertical ? 'center' : 'left'}`}
          margin={'3% 2% 5% 5%'}
        >
          {!!!content ? '' : content}
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
