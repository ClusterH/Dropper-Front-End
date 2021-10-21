import React, { useState } from 'react'
import { usePackContext } from '../../contexts/PackContext'
import { useGetPackList } from '../../hooks/useDropper'
import { ResponsiveContainer, TextSubTitle } from '../../styles/globalStyles'
import { TPackItem } from '../../types'
import { AccPackItem } from './AccPackItem'

export const AccPackList: React.FC<{ setActivatedTab: (tab: 'pack' | 'moment') => void }> = ({ setActivatedTab }) => {
  useGetPackList()
  const { packs } = usePackContext()

  return (
    <ResponsiveContainer margin={'12px 0 0'} justifyContent={'space-between'}>
      {packs.length > 0 ? (
        packs.map((pack) => {
          return <AccPackItem key={pack.id} pack={pack} setActivatedTab={setActivatedTab} />
        })
      ) : (
        <TextSubTitle>You don&apos;t own any Packs yet</TextSubTitle>
      )}
    </ResponsiveContainer>
  )
}
