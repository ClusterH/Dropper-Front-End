import React from 'react'
import styled from 'styled-components'
import { MainButton } from '../../components/Buttons/MainButton'
import {
  ComponentWrapper,
  BoxCardWithoutBorder,
  TextCustom,
  ContainerRow,
  ImageContainer,
  SubText,
  ContainerColumn,
} from '../../styles/globalStyles'
import { isMobile } from 'react-device-detect'
import ARROW_RIGHT_ROUNDED from '../../assets/images/arrow-right-rounded.svg'
import BORDER_EFFECT_IMG from '../../assets/images/text-border-bottom-effect.svg'

const DateTimeItemBox = styled(BoxCardWithoutBorder)`
  background-color: #31297b80;
  border-radius: 5px;
`

const DateTimeCount: React.FC = () => {
  return (
    <ContainerRow justifyContent={'center'} alignItems={'center'} gap={isMobile ? '10px' : '30px'} width={'100%'}>
      <DateTimeItemBox
        boxWidth={isMobile ? '60px' : '154px'}
        boxHeight={isMobile ? '60px' : '154px'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '1rem' : '1.5rem'}
          fontWeight={300}
          fontFamily={'RubikBold'}
          lineHeight={1.2}
          textAlign={'center'}
        >
          05
        </TextCustom>
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '1rem' : '1.5rem'}
          fontWeight={300}
          fontFamily={'RubikBold'}
          lineHeight={1.2}
          textAlign={'center'}
        >
          Days
        </TextCustom>
      </DateTimeItemBox>
      <DateTimeItemBox
        boxWidth={isMobile ? '60px' : '154px'}
        boxHeight={isMobile ? '60px' : '154px'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '1rem' : '1.5rem'}
          fontWeight={300}
          fontFamily={'RubikBold'}
          lineHeight={1.2}
          textAlign={'center'}
        >
          05
        </TextCustom>
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '1rem' : '1.5rem'}
          fontWeight={300}
          fontFamily={'RubikBold'}
          lineHeight={1.2}
          textAlign={'center'}
        >
          Hrs
        </TextCustom>
      </DateTimeItemBox>
      <DateTimeItemBox
        boxWidth={isMobile ? '60px' : '154px'}
        boxHeight={isMobile ? '60px' : '154px'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '1rem' : '1.5rem'}
          fontWeight={300}
          fontFamily={'RubikBold'}
          lineHeight={1.2}
          textAlign={'center'}
        >
          05
        </TextCustom>
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '1rem' : '1.5rem'}
          fontWeight={300}
          fontFamily={'RubikBold'}
          lineHeight={1.2}
          textAlign={'center'}
        >
          Min
        </TextCustom>
      </DateTimeItemBox>
      <DateTimeItemBox
        boxWidth={isMobile ? '60px' : '154px'}
        boxHeight={isMobile ? '60px' : '154px'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '1rem' : '1.5rem'}
          fontWeight={300}
          fontFamily={'RubikBold'}
          lineHeight={1.2}
          textAlign={'center'}
        >
          05
        </TextCustom>
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '1rem' : '1.5rem'}
          fontWeight={300}
          fontFamily={'RubikBold'}
          lineHeight={1.2}
          textAlign={'center'}
        >
          Sec
        </TextCustom>
      </DateTimeItemBox>
    </ContainerRow>
  )
}

export default DateTimeCount
