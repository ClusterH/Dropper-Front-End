import React from 'react'
import styled from 'styled-components'
import { MainButton } from '../../components/Buttons/MainButton'
import { BoxCard, ContainerColumn, TextDescription, TextSubTitle } from '../../styles/globalStyles'
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
      <ContainerColumn justifyContent={'space-between'} height={'480px'}>
        <ContainerColumn>
          <AvatarContainer src={item.imgUrl} />
          <TextSubTitle>{item.name}</TextSubTitle>
          <TextDescription>{item.description}</TextDescription>
        </ContainerColumn>
        <MainButton borderRadius={'4px'} onClick={() => (window.location.href = `/collections/${item.id}`)}>
          View Collection
        </MainButton>
      </ContainerColumn>
    </BoxCard>
  )
}

export default CreatorCard
