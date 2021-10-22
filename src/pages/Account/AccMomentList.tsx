import React from 'react'
import { useMomentContext } from '../../contexts/MomentContext'
import { useGetMomentList } from '../../hooks/useDropper'
import { ResponsiveContainer, TextSubTitle } from '../../styles/globalStyles'
import { AccMomentItem } from './AccMomentItem'
import styled from 'styled-components'

const MomentListWrap = styled(ResponsiveContainer)`
  flex-wrap: wrap;
`

export const AccMomentList: React.FC = () => {
  useGetMomentList()
  const { moments } = useMomentContext()

  return (
    <MomentListWrap margin={'12px 0 0'} justifyContent={'space-between'}>
      {moments.length > 0 ? (
        moments.map((moment) => {
          return <AccMomentItem key={moment.id} moment={moment} />
        })
      ) : (
        <TextSubTitle>You don&apos;t own any Moments yet</TextSubTitle>
      )}
    </MomentListWrap>
  )
}
