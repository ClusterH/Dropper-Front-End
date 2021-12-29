import React from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import { BoxCard, ContainerColumn, TextCustom } from '../../styles/globalStyles'
import { RemarkIcon } from '../Icons'

const TimelineWrapper = styled.div<{ width?: string }>`
  width: ${({ width }) => (width ? width : '100%')};
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const VerticalLine = styled.div<{ backColor?: string }>`
  width: 5px;
  height: 180px;
  background-color: ${({ backColor }) => (backColor ? backColor : 'var(--secondary)')};
`

interface ITimelineItem {
  width?: string
  cardTitle?: string
  cardContent?: string
  cardSelected?: boolean
  onMouseMove?: () => void
  onScroll?: () => void
}

export const TimelineContainer: React.FC<ITimelineItem> = ({ width, cardTitle, cardContent, cardSelected, onMouseMove, onScroll }) => {
  return (
    <TimelineWrapper width={width}>
      <ContainerColumn
        margin={'0'}
        padding={'0'}
        backgroundColor={'transparent'}
        style={{ position: 'relative' }}
        height={'100%'}
        width={'2%'}
      >
        <VerticalLine backColor={cardSelected ? 'var(--secondary)' : 'var(--light-grey)'} />
        <RemarkIcon
          stroke={cardSelected ? 'var(--primary-text)' : 'var(--light-navy-blue)'}
          fill={cardSelected ? 'var(--secondary)' : 'var(--primary-text)'}
          style={{ position: 'absolute' }}
        />
      </ContainerColumn>
      <BoxCard
        padding={'1% 2%'}
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
        boxWidth={'85%'}
        flexDirection={'column'}
        border={cardSelected ? '5px solid var(--secondary)' : '5px solid var(--light-navy-blue)'}
        backgroundColor={cardSelected ? 'var(--secondary)' : 'var(--transparent)'}
        borderHover={'5px solid var(--secondary-opacity)'}
        backgroundHover={'var(--dark-secondary)'}
        onMouseMove={onMouseMove}
        onScroll={onScroll}
      >
        <TextCustom
          fontSize={isMobile ? '1rem' : '1.5rem'}
          fontWeight={600}
          fontFamily={'RubikBold'}
          lineHeight={1.1}
          textAlign={'left'}
          margin={'2% 0 2% 0'}
        >
          {cardTitle}
        </TextCustom>
        <TextCustom
          fontSize={isMobile ? '0.8rem' : '1rem'}
          fontWeight={300}
          fontFamily={'Rubik'}
          lineHeight={1.1}
          textAlign={'left'}
          margin={'2% 0 2% 0'}
        >
          {cardContent}
        </TextCustom>
      </BoxCard>
    </TimelineWrapper>
  )
}
