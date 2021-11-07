import React, { useMemo, useState } from 'react'
import { ContainerColumn, ContainerRow, TextCustom, TextSubTitle } from '../../../styles/globalStyles'
import { isMobile } from 'react-device-detect'
import { MomentItem } from './MomentItem'
import Pagination from '../../../components/Pagination'
import { MomentModal } from './MomentModal'
import { useGetMomentList, useMomentList } from '../../../hooks/useDropper'

const PageSize = 6

export const MomentsList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [idx, setIdx] = useState<number>()
  const [isMomentModalOpen, setIsMomentModalOpen] = useState<boolean>(false)
  useGetMomentList()
  const momentList = useMomentList()

  const currentMomentList = useMemo(() => {
    if (momentList === null || momentList.length === 0) return []
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return momentList.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, momentList])

  const viewDetail = (index: number) => {
    setIdx(index)
    setIsMomentModalOpen(!isMomentModalOpen)
  }

  return (
    <ContainerColumn width={'100%'} padding={'0'} margin={'0'}>
      <ContainerRow
        flexWrap={'wrap'}
        justifyContent={'space-between'}
        alignItems={'flex-start'}
        padding={'30px 0 0 40px'}
        gap={'20px'}
        minHeight={'800px'}
      >
        {momentList && momentList.length > 0 ? (
          currentMomentList.map((item, index) => {
            return <MomentItem key={`${item.momentId}_${item.id}`} moment={item} onClick={() => viewDetail(index)} />
          })
        ) : (
          <TextSubTitle>You don&apos;t own any Moments yet</TextSubTitle>
        )}
      </ContainerRow>
      <Pagination
        currentPage={currentPage}
        totalCount={momentList ? momentList.length : 0}
        pageSize={PageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
      {idx !== undefined && (
        <MomentModal
          moment={currentMomentList[idx]}
          momentModalOpen={isMomentModalOpen}
          toggleMomentModal={() => setIsMomentModalOpen(!isMomentModalOpen)}
        />
      )}
    </ContainerColumn>
  )
}
