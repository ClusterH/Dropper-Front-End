import React from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import OnlineImages from '../../components/Icons/onlineImages'
import { ContainerColumn, TextDescription, TextMain } from '../../styles/globalStyles'
import { TMomentItem } from '../../types'
import { b64EncodeUnicode } from '../../utils/convertString'

const MomentItemContainer = styled(ContainerColumn)`
  height: auto;
  min-height: 240px;
  box-shadow: 0px 3px 10px var(--secondary-opacity);
  border-radius: 12px;
  padding: 24px;
  margin: 0 0 32px 0;

  &:hover {
    cursor: pointer;
  }
`

export const AccMomentItem: React.FC<{ moment: TMomentItem }> = ({ moment }) => {
  const showMoment = () => {
    const query = b64EncodeUnicode(JSON.stringify(moment))
    const params = new URLSearchParams()
    params.append('query', query)
    window.location.href = `/item?${params.toString()}`
  }

  return (
    <MomentItemContainer onClick={() => showMoment()} width={isMobile ? '90%' : '100%'}>
      <OnlineImages url={moment.imageUrl!} imgWidth={'95%'} />
      <TextMain>
        {moment.name}
        {' #' + moment.id}
      </TextMain>
      <TextDescription>{moment.description}</TextDescription>
    </MomentItemContainer>
  )
}
