import React, { useState, useEffect } from 'react'
import { usePackContext } from '../../contexts/PackContext'
import { useGetPackList } from '../../hooks/useDropper'
import { ResponsiveContainer, TextSubTitle } from '../../styles/globalStyles'
import { AccPackItem } from './AccPackItem'

export const AccPackList: React.FC<{ setActivatedTab: (tab: 'pack' | 'moment') => void }> = ({ setActivatedTab }) => {
  const [isOwnPack, setIsOwnPack] = useState<boolean>(false)
  const { packs } = usePackContext()
  useGetPackList()

  useEffect(() => {
    const res = packs.filter((pack) => Number(pack.balance) > 0)
    if (res.length > 0) setIsOwnPack(true)
    else setIsOwnPack(false)
  }, [packs])

  return (
    <ResponsiveContainer margin={'12px 0 0'} justifyContent={'space-between'}>
      {isOwnPack ? (
        packs
          .filter((pack) => Number(pack.balance) > 0)
          .map((pack) => {
            return <AccPackItem key={pack.id} pack={pack} setActivatedTab={setActivatedTab} />
          })
      ) : (
        <TextSubTitle>You don&apos;t own any Packs yet</TextSubTitle>
      )}
    </ResponsiveContainer>
  )
}
