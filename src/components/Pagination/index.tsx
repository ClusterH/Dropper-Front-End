import React, { useMemo } from 'react'
import styled from 'styled-components'
import { DOTS, usePagination } from '../../hooks/usePagination'

const PagenationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  padding: 20px 0px;
`

const PaginationInfoContainer = styled.p`
  color: var(--primary-text);
  font-size: 16px;
  font-weight: 300;
  font-family: Rubik;
  line-height: 1.6;
  text-align: center;
  margin: 0;
`

const PagenationListContainer = styled.ul`
  width: auto;
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  background-color: var(--light-navy-blue);
  border-radius: 3px;
  padding: 10px 12px;
`
const PaginationItem = styled.li<{
  isDots?: boolean
  isActive?: boolean
  isDisabled?: boolean
  isArrow?: boolean
  border?: string
}>`
  padding: 0 12px;
  height: 30px;
  text-align: center;
  margin: auto 4px;
  color: white;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 3px;
  line-height: 1.43;
  font-size: 14px;
  min-width: 30px;
  background-color: ${({ isArrow, isActive }) => (isArrow ? 'transparent' : isActive ? 'var(--secondary)' : 'var(--dark-grey)')};
  border: ${({ isArrow }) => (isArrow ? '3px solid var(--purple)' : 'none')};
  &.dots:hover {
    background-color: transparent;
    cursor: default;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.04);
    cursor: pointer;
  }

  &.disabled {
    pointer-events: none;

    .arrow::before {
      border-right: 0.12em solid rgba(255, 255, 255, 0.43);
      border-top: 0.12em solid rgba(255, 255, 255, 0.43);
    }

    &:hover {
      background-color: transparent;
      cursor: default;
    }
  }
`
const Arrow = styled.div`
  &::before {
    position: relative;
    /* top: 3pt; Uncomment this to lower the icons as requested in comments*/
    content: '';
    /* By using an em scale, the arrows will size with the font */
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.12em solid rgba(255, 255, 255, 0.87);
    border-top: 0.12em solid rgba(255, 255, 255, 0.87);
  }
`
const LeftArrow = styled(Arrow)`
  transform: rotate(-135deg);
`
const RightArrow = styled(Arrow)`
  transform: rotate(45deg);
`

export interface IPagination {
  onPageChange: Function
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
}

const Pagination: React.FC<IPagination> = (props) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize } = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  const paginationInfo = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize
    let lastPageIndex = firstPageIndex + pageSize
    if (lastPageIndex > totalCount) {
      lastPageIndex = totalCount
    }
    return { fistIndex: firstPageIndex, lastIndex: lastPageIndex }
  }, [currentPage, pageSize, totalCount])

  if (currentPage === 0 || !paginationRange || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange[paginationRange.length - 1]
  return (
    <PagenationContainer>
      <PaginationInfoContainer>
        {`Showing ${paginationInfo.fistIndex + 1} to ${paginationInfo.lastIndex} of ${totalCount} entries`}
      </PaginationInfoContainer>
      <PagenationListContainer>
        {currentPage > 1 && (
          <PaginationItem isArrow={true} onClick={onPrevious}>
            <LeftArrow />
          </PaginationItem>
        )}
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <PaginationItem key={index} isDots={true}>
                &#8230;
              </PaginationItem>
            )
          }

          return (
            <PaginationItem key={index} isActive={pageNumber === currentPage} onClick={() => onPageChange(pageNumber)}>
              {pageNumber}
            </PaginationItem>
          )
        })}
        {currentPage < lastPage && (
          <PaginationItem isArrow={true} onClick={onNext}>
            <RightArrow />
          </PaginationItem>
        )}
      </PagenationListContainer>
    </PagenationContainer>
  )
}

export default Pagination
