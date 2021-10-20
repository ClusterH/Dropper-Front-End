import React from 'react'
import { useMomentContext } from '../../contexts/MomentContext'
import { useGetMomentList } from '../../hooks/useDropper'
import { ContainerRow, TextSubTitle } from '../../styles/globalStyles'
import { AccMomentItem } from './AccMomentItem'

export const AccMomentList: React.FC = () => {
  const { moments } = useMomentContext()

  useGetMomentList()

  return (
    <ContainerRow margin={'12px 0 0'} flexWrap={'wrap'}>
      {moments.length > 0 ? (
        moments.map((moment) => {
          return <AccMomentItem key={moment.id} moment={moment} />
        })
      ) : (
        <TextSubTitle>You don&apos;t own any Moments yet</TextSubTitle>
      )}
    </ContainerRow>
  )
}
