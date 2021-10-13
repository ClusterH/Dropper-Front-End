import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { BoxCard, ContainerRow, TextDescription, TextSubTitle } from '../../styles/globalStyles'
import { TCreatorElement } from '../../types'

const AvatarContainer = styled.img`
  border-radius: 50%;
  width: 100%;
  max-width: 240px;
`

interface ICreatorCardProps {
  item: TCreatorElement
}

const CreatorCard: React.FC<ICreatorCardProps> = ({ item }) => {
  return (
    <BoxCard boxWidth={'260px'}>
      <AvatarContainer src={item.imgUrl} />
      <TextSubTitle>{item.name}</TextSubTitle>
      <TextDescription>{item.description}</TextDescription>
    </BoxCard>
  )
}

export default CreatorCard
