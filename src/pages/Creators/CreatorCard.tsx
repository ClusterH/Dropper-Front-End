import React from 'react'
import styled from 'styled-components'
import { MainButton } from '../../components/Buttons/MainButton'
import { useCollectionContext } from '../../contexts/CollectionContext'
import { AvatarContainer, BoxCard, ContainerColumn, TextDescription, TextSubTitle } from '../../styles/globalStyles'
import { TCreatorElement } from '../../types'

interface ICreatorCardProps {
  item: TCreatorElement
}

const CreatorCard: React.FC<ICreatorCardProps> = ({ item }) => {
  const { setCreatorId } = useCollectionContext()
  const showCollections = React.useCallback(
    (item: TCreatorElement) => {
      setCreatorId(item.id)
      window.location.href = `/collections`
    },
    [setCreatorId]
  )
  return (
    <BoxCard boxWidth={'260px'}>
      <ContainerColumn justifyContent={'space-between'} height={'480px'}>
        <ContainerColumn>
          <AvatarContainer src={item.imgUrl} />
          <TextSubTitle>{item.name}</TextSubTitle>
          <TextDescription>{item.description}</TextDescription>
        </ContainerColumn>
        <MainButton borderRadius={'4px'} onClick={() => showCollections(item)}>
          View Collection
        </MainButton>
      </ContainerColumn>
    </BoxCard>
  )
}

export default CreatorCard
