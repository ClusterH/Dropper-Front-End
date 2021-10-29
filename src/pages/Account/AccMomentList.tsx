import React from 'react'
import styled from 'styled-components'
import { useMomentList } from '../../hooks/useDropper'
import { ResponsiveContainer, TextSubTitle } from '../../styles/globalStyles'
import { AccMomentItem } from './AccMomentItem'

const MomentListWrap = styled(ResponsiveContainer)`
  flex-wrap: wrap;
`

export const AccMomentList: React.FC = () => {
  const moments = useMomentList()

  return (
    <MomentListWrap margin={'12px 0 0'} justifyContent={'space-between'}>
      {moments ? (
        moments.map((moment) => {
          return <AccMomentItem key={moment.momentId} moment={moment} />
        })
      ) : (
        <TextSubTitle>You don&apos;t own any Moments yet</TextSubTitle>
      )}
    </MomentListWrap>
  )
}
