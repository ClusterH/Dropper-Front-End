import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'
import MINUS_ICON from '../../assets/images/minus-icon.svg'
import PLUS_ICON from '../../assets/images/plus-icon.svg'
import { BoxCard, ContainerColumn, ContainerRow, Divider, ImageContainer, TextCustom } from '../../styles/globalStyles'

const ExpanableCard: React.FC<{
  boxWidth?: string
  title?: string
  content?: string
}> = ({ boxWidth, title, content }) => {
  const [showContent, setShowContent] = useState(false)

  const showDetail = () => {
    setShowContent(!showContent)
  }

  return (
    <BoxCard
      boxWidth={boxWidth}
      border={showContent ? '5px solid var(--secondary-opacity)' : '5px solid var(--light-navy-blue)'}
      justifyContent={'flex-start'}
      backgroundColor={showContent ? 'var(--secondary)' : 'var(--light-navy-blue)'}
      borderRadius={'5px'}
      borderHover={'5px solid var(--secondary-opacity)'}
      backgroundHover={'var(--dark-secondary)'}
    >
      <ContainerColumn width={'100%'} alignItems={'flex-start'} gap={'20px'}>
        <ContainerRow margin={'0'} padding={'10px'} justifyContent={'space-between'} onClick={showDetail}>
          <TextCustom
            fontSize={isMobile ? '1rem' : '1.25rem'}
            fontWeight={600}
            fontFamily={'RubikBold'}
            lineHeight={1.1}
            textAlign={'left'}
          >
            {title}
          </TextCustom>
          <ImageContainer src={showContent ? MINUS_ICON : PLUS_ICON} width={'20px'} />
        </ContainerRow>
        {showContent && (
          <>
            <Divider width={'100%'} height={'1px'} margin={'1% 0 1% 0%'} backColor={'var(--primary-text)'} />
            <TextCustom
              fontSize={isMobile ? '0.8rem' : '1rem'}
              fontWeight={300}
              lineHeight={1.3}
              textAlign={'left'}
              margin={'0 0 20px 0'}
              dangerouslySetInnerHTML={{ __html: !content ? '' : content }}
            >
              {/* {content} */}
            </TextCustom>
          </>
        )}
      </ContainerColumn>
    </BoxCard>
  )
}

export default ExpanableCard
