import React from 'react'
import { parkList } from '../../constants/dummy'
import { BigBox, ContainerRow } from '../../styles/globalStyles'
import { ParkItem } from './ParkItem'

export const PackListBox: React.FC = () => {
  return (
    <BigBox padding={'0'}>
      <ContainerRow>
        {parkList &&
          parkList.map((park) => {
            return <ParkItem key={park.id} park={park} />
          })}
      </ContainerRow>
    </BigBox>
  )
}
