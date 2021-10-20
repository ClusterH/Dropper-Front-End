import React from 'react'
import { packList } from '../../constants/dummy'
import { BigBox, ContainerRow, ResponsiveContainer } from '../../styles/globalStyles'
import { PackItem } from './PackItem'

export const PackListBox: React.FC = () => {
  return (
    <BigBox>
      <ResponsiveContainer>
        {packList &&
          packList.map((pack) => {
            return <PackItem key={pack.id} pack={pack} />
          })}
      </ResponsiveContainer>
    </BigBox>
  )
}
