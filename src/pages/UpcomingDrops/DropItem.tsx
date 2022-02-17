import React from 'react'
import { isMobile, isTablet } from 'react-device-detect'
import styled from 'styled-components'
import { ComponentWrapper, ContainerColumn, ImageContainer } from '../../styles/globalStyles'
import CountDownLaunch from './CountDownLaunch'
import DropLive from './DropLive'

const ImgWrapper = styled(ImageContainer)`
  border: 5px solid var(--secondary);
`

interface IDropItem {
  img: string
  isCount: boolean
  date: string
}

const DropItem: React.FC<IDropItem> = ({ img, isCount, date }) => {
  return (
    <ComponentWrapper>
      <ContainerColumn>
        <ImgWrapper src={img} borderRadius={'30px'} width={isMobile || isTablet ? '100%' : '50%'} />
        {isCount ? <CountDownLaunch date={date} /> : <DropLive />}
      </ContainerColumn>
    </ComponentWrapper>
  )
}

export default DropItem
