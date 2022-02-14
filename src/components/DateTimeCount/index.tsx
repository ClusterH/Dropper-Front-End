import React, { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import { BoxCardWithoutBorder, ContainerRow, TextCustom } from '../../styles/globalStyles'
import { calculateTimeLeft } from './Calculator'

const DateTimeItemBox = styled(BoxCardWithoutBorder)`
  background-color: #31297b80;
  border-radius: 5px;
`

const DateTimeCount: React.FC<{ date: string }> = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(date))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date))
    }, 1000)

    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [timeLeft])

  return (
    <ContainerRow justifyContent={'center'} alignItems={'center'} gap={isMobile ? '10px' : '30px'} width={'100%'}>
      <DateTimeItemBox boxWidth={'8.4vmax'} boxHeight={'8.4vmax'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '2.4vmax' : '1.5vmax'}
          fontWeight={300}
          fontFamily={'RubikBold'}
          lineHeight={1.2}
          textAlign={'center'}
        >
          {timeLeft ? timeLeft.days : '00'}
        </TextCustom>
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '1.35vmax' : '1.2vmax'}
          fontWeight={300}
          fontFamily={'RubikBold'}
          lineHeight={1.2}
          textAlign={'center'}
        >
          Days
        </TextCustom>
      </DateTimeItemBox>
      <DateTimeItemBox boxWidth={'8.4vmax'} boxHeight={'8.4vmax'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '2.4vmax' : '1.5vmax'}
          fontWeight={300}
          fontFamily={'RubikBold'}
          lineHeight={1.2}
          textAlign={'center'}
        >
          {timeLeft ? timeLeft.hours : '00'}
        </TextCustom>
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '1.35vmax' : '1.2vmax'}
          fontWeight={300}
          fontFamily={'RubikBold'}
          lineHeight={1.2}
          textAlign={'center'}
        >
          Hrs
        </TextCustom>
      </DateTimeItemBox>
      <DateTimeItemBox boxWidth={'8.4vmax'} boxHeight={'8.4vmax'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '2.4vmax' : '1.5vmax'}
          fontWeight={300}
          fontFamily={'RubikBold'}
          lineHeight={1.2}
          textAlign={'center'}
        >
          {timeLeft ? timeLeft.minutes : '00'}
        </TextCustom>
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '1.35vmax' : '1.2vmax'}
          fontWeight={300}
          fontFamily={'RubikBold'}
          lineHeight={1.2}
          textAlign={'center'}
        >
          Min
        </TextCustom>
      </DateTimeItemBox>
      <DateTimeItemBox boxWidth={'8.4vmax'} boxHeight={'8.4vmax'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '2.4vmax' : '1.5vmax'}
          fontWeight={300}
          fontFamily={'RubikBold'}
          lineHeight={1.2}
          textAlign={'center'}
        >
          {timeLeft ? timeLeft.seconds : '00'}
        </TextCustom>
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '1.35vmax' : '1.2vmax'}
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
