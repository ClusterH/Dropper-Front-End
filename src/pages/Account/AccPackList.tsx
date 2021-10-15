import React from 'react'
import { MainButton } from '../../components/Buttons/MainButton'
import { ComponentWrapper, ContainerColumn, Divider } from '../../styles/globalStyles'
import { parkList } from '../../constants/dummy'
import { AccParkItem } from './AccParkItem'

export const AccPackList: React.FC = () => {
  return (
    <ContainerColumn justifyContent={'flex-start'} alignItems={'flex-start'}>
      <MainButton borderRadius={'4px 4px 0 0'}>Your Moments</MainButton>
      <Divider width={'100%'} height={'1px'} margin={'0'} />
      {parkList &&
        parkList.map((park) => {
          return <AccParkItem key={park.id} park={park} />
        })}
    </ContainerColumn>
  )
}
