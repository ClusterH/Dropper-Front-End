import React from 'react'
import OnlineImages from '../../components/Icons/onlineImages'
import { ContainerColumn, TextDescription, TextMain } from '../../styles/globalStyles'
import { TMomentItem } from '../../types'
import styled from 'styled-components'

const MomentItemContainer = styled(ContainerColumn)`
  width: 32%;
  height: auto;
  min-height: 240px;
  &:hover {
    cursor: pointer;
  }
`

export const AccMomentItem: React.FC<{ moment: TMomentItem }> = ({ moment }) => {
  const showMoment = () => {
    const params = new URLSearchParams()
    params.append('uri', moment.uri!)
    params.append('id', moment.id!)
    params.append('rarity', moment.rarity!)
    params.append('name', moment.name!)
    params.append('img', moment.image!)
    window.location.href = `/item?${params.toString()}`
  }

  return (
    <MomentItemContainer onClick={() => showMoment()}>
      <OnlineImages url={moment.image!} imgWidth={'95%'} />
      <TextMain>{moment.name}</TextMain>
      <TextDescription>{`@clixHimself`}</TextDescription>
    </MomentItemContainer>
  )
}
