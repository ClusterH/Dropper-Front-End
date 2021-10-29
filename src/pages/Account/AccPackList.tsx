import React from 'react'
import { usePackList } from '../../hooks/useDropper'
import { ResponsiveContainer, TextSubTitle } from '../../styles/globalStyles'
import { AccPackItem } from './AccPackItem'

export const AccPackList: React.FC<{ setActivatedTab: (tab: 'pack' | 'moment') => void }> = ({ setActivatedTab }) => {
  const packs = usePackList()

  return (
    <ResponsiveContainer margin={'12px 0 0'} justifyContent={'space-between'}>
      {packs ? (
        packs.map((pack) => {
          return <AccPackItem key={pack.id} pack={pack} setActivatedTab={setActivatedTab} />
        })
      ) : (
        <TextSubTitle>You don&apos;t own any Packs yet</TextSubTitle>
      )}
    </ResponsiveContainer>
  )
}
