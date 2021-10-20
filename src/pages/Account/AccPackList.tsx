import React, { useState } from 'react'
import { useGetPackList } from '../../hooks/useCollection'
import { ContainerRow, TextSubTitle } from '../../styles/globalStyles'
import { TPackItem } from '../../types'
import { AccPackItem } from './AccPackItem'

export const AccPackList: React.FC<{ setActivatedTab: (tab: 'pack' | 'moment') => void }> = ({ setActivatedTab }) => {
  const [packList, setPackList] = useState<TPackItem[]>([])

  useGetPackList().then((packs) => setPackList(packs))

  return (
    <ContainerRow margin={'12px 0 0'}>
      {packList.length > 0 ? (
        packList.map((pack) => {
          return <AccPackItem key={pack.id} pack={pack} setActivatedTab={setActivatedTab} />
        })
      ) : (
        <TextSubTitle>You don&apos;t own any Packs yet</TextSubTitle>
      )}
    </ContainerRow>
  )
}
