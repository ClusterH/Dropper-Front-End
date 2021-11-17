import React, { useMemo, useState } from 'react'
import Pagination from '../../../components/Pagination'
import { usePackList } from '../../../hooks/useDropper'
import { ContainerColumn, ContainerRow, TextSubTitle } from '../../../styles/globalStyles'
import { TSelectedTab } from '../../../types'
import { PacksItem } from './PacksItem'

const PageSize = 6

export const PacksList: React.FC<{ setSelectedTab: (tab: TSelectedTab) => void }> = ({ setSelectedTab }) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const packList = usePackList()

  const currentPackList = useMemo(() => {
    if (packList === null || packList.length === 0) return []
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return packList.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, packList])

  return (
    <ContainerColumn width={'100%'} padding={'0'} margin={'0'}>
      <ContainerRow
        flexWrap={'wrap'}
        justifyContent={'space-between'}
        alignItems={'flex-start'}
        padding={'10px'}
        gap={'20px'}
      >
        {packList && packList.length > 0 ? (
          currentPackList.map((pack) => {
            return <PacksItem key={pack.id} pack={pack} setSelectedTab={setSelectedTab} />
          })
        ) : (
          <TextSubTitle>You don&apos;t own any Packs yet</TextSubTitle>
        )}
      </ContainerRow>
      <Pagination
        currentPage={currentPage}
        totalCount={packList ? packList.length : 0}
        pageSize={PageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </ContainerColumn>
  )
}
