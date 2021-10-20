import React from 'react'
import { ComponentWrapper, ContainerRow, TextCustom, TextTitle } from '../../styles/globalStyles'
import { CreatorDetail } from './CreatorDetail'
import { PackListBox } from './PackListBox'

export const PackList: React.FC = () => {
  return (
    <ComponentWrapper margin={'120px 0'} padding={'24px'}>
      <ContainerRow justifyContent={'center'} padding={'32px'}>
        <TextTitle>The&nbsp;</TextTitle>
        <TextCustom color={'var(--secondary)'} fontSize={'2.5rem'}>
          Packs
        </TextCustom>
      </ContainerRow>
      <PackListBox />
      <CreatorDetail />
    </ComponentWrapper>
  )
}
