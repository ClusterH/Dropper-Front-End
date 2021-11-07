import React from 'react'
import { useMemo } from 'react'
import { IPagination } from '../components/Pagination/index'

export const DOTS = '...'

const range = (start: number, end: number) => {
  let length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

export interface ISlideShow {
  totalCount: number
  pageSize: number
  currentPage: number
  direction: string
  onPageChange: Function
}

export const useSlideShow = ({ totalCount, pageSize, currentPage, direction }: Omit<ISlideShow, 'onPageChange'>) => {
  const slideShowRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)
    if (currentPage === 1) {
      if (totalPageCount === 1) {
        return { left: false, currentPage, direction, right: false }
      } else {
        return { left: false, currentPage, direction, right: true }
      }
    } else if (currentPage === totalPageCount) {
      return { left: true, currentPage, direction, right: false }
    } else {
      return { left: true, currentPage, direction, right: true }
    }
  }, [totalCount, pageSize, currentPage, direction])

  return slideShowRange
}
