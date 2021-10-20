import React, { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { VideoContainer } from '../../components/VideoContainer'

import { ContainerColumn, ContainerRow, PageWrapper, TextCustom, TextMain } from '../../styles/globalStyles'
import { TMomentItem } from '../../types'

const Item: React.FC = () => {
  const search = useLocation().search
  const params = new URLSearchParams(search)
  const momentURI = params.get('uri')
  const momentID = params.get('id')
  const momentRarity = params.get('rarity')
  const momentName = params.get('name')
  const momentImg = params.get('img')

  const ItemText: React.FC<{ label: string; text: string }> = ({ label, text }) => {
    return (
      <ContainerRow justifyContent={'flex-start'}>
        <TextCustom color={'var(--secondary)'} fontSize={'1.25rem'} style={{ width: '32%' }} textAlign={'left'}>
          {`${label}: `}
        </TextCustom>
        <TextMain>{text}</TextMain>
      </ContainerRow>
    )
  }

  const ItemDetail: React.FC = () => {
    return (
      <ContainerColumn alignItems={'flex-start'} width={'20%'} height={'auto'} margin={'24px 0 0 12px'}>
        <ItemText label={'Name'} text={momentName!} />
        <ItemText label={'Class'} text={momentRarity!} />
        <ItemText label={'Moment Id'} text={momentID!} />
      </ContainerColumn>
    )
  }

  return (
    <PageWrapper>
      <ContainerRow alignItems={'flex-start'}>
        <VideoContainer url={momentURI!} posterUrl={momentImg!} width={'80%'}></VideoContainer>
        {/* <VideoContainer
          url={'https://clixnfts.s3.us-east-2.amazonaws.com/Uncommon/Sleepy+Zex.mp4'}
          width={'80%'}
        ></VideoContainer> */}
        <ItemDetail />
      </ContainerRow>
    </PageWrapper>
  )
}
export default Item
