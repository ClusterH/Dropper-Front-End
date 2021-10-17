import React, { useState } from 'react'
import { MainButton } from '../../components/Buttons/MainButton'
import { useGetPackBalance } from '../../hooks/useCollection'
import { ComponentWrapper, ContainerColumn, ContainerRow, Divider } from '../../styles/globalStyles'
import { TPackItem } from '../../types'
// import { packList } from '../../constants/dummy'
import { AccPackItem } from './AccPackItem'

export const AccPackList: React.FC = () => {
  const [packList, setPackList] = useState<TPackItem[]>([])
  useGetPackBalance().then((packs) => setPackList(packs))

  return (
    <ContainerColumn justifyContent={'flex-start'} alignItems={'flex-start'}>
      <MainButton borderRadius={'4px 4px 0 0'}>Your Moments</MainButton>
      <Divider width={'100%'} height={'1px'} margin={'0'} />
      <ContainerRow margin={'12px 0 0'}>
        {packList.length > 0 &&
          packList.map((pack) => {
            return <AccPackItem key={pack.id} pack={pack} />
          })}
      </ContainerRow>
    </ContainerColumn>
  )
}
