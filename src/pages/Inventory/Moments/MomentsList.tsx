import React, { useMemo, useState } from 'react'
import ScaleLoader from 'react-spinners/ScaleLoader'
import Pagination from '../../../components/Pagination'
import { useGetMomentList, useLoading, useMomentList } from '../../../hooks/useDropper'
import { ContainerColumn, ContainerRow, TextSubTitle } from '../../../styles/globalStyles'
import { MomentItem } from './MomentItem'
import { MomentModal } from './MomentModal'

const PageSize = 6

export const MomentsList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [idx, setIdx] = useState<number>()
  const [isMomentModalOpen, setIsMomentModalOpen] = useState<boolean>(false)
  const momentList = useMomentList()
  const isLoading = useLoading()

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
      <ContainerRow flexWrap={'wrap'} justifyContent={'space-between'} alignItems={'flex-start'} padding={'10px'} gap={'20px'}>
        {momentList && momentList.length > 0 ? (
          currentMomentList.map((item, index) => {
            return <MomentItem key={`${item.momentId}_${index}`} moment={item} onClick={() => viewDetail(index)} />
          })
        ) : isLoading ? (
          <ContainerRow justifyContent={'center'}>
            <TextSubTitle>Fetching Moments...</TextSubTitle>
            <ScaleLoader color={'#ff0069'} width={10} height={34} radius={20} margin={2} />
          </ContainerRow>
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
