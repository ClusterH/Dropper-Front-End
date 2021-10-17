import React from 'react'
import { packList } from '../../constants/dummy'
import { BigBox, ContainerRow } from '../../styles/globalStyles'
import { PackItem } from './PackItem'

export const PackListBox: React.FC = () => {
  return (
    <BigBox padding={'0'}>
      <ContainerRow>
        {packList &&
          packList.map((pack) => {
            return <PackItem key={pack.id} pack={pack} />
          })}
      </ContainerRow>
    </BigBox>
  )
}
