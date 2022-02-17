import React from 'react'
import styled from 'styled-components'
import { ISlideShow, useSlideShow } from '../../hooks/useSlideShow'
import MainButton from '../Buttons/MainButton'

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  padding: 0px;
  margin: 0;
  position: relative;
  flex-direction: column;
`

const Arrow = styled.div<{ backColor?: string }>`
  &::before {
    position: relative;
    // top: 0.2em;
    // left: 0.2em;
    content: '';
    /* By using an em scale, the arrows will size with the font */
    display: inline-block;
    width: 1em;
    height: 1em;
    border-right: 0.4em solid rgba(255, 255, 255);
    border-top: 0.4em solid rgba(255, 255, 255);
    cursor: pointer;
    transform: translate(-0.2em, 0.3em);
  }
`
const LeftArrow = styled(Arrow)`
  transform: rotate(-135deg);
`
const RightArrow = styled(Arrow)`
  transform: rotate(45deg);
`

const ArrowButton = styled(MainButton)<{ backColor?: string; borderColor?: string }>`
  background-color: ${({ backColor }) => (backColor ? backColor : 'var(--light-navy-blue)')};
  width: 3rem;
  height: 3rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ borderColor }) => (borderColor ? borderColor : 'var(--navy-blue-opacity)')};
  box-shadow: none;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  &:active {
    background-color: var(--secondary);
  }
  &:hover {
    background-color: var(--secondary);
  }
`
// interface ICarousel extends ISlideShow {
//   child: React.ReactNode
// }

const NormalButtonCarousel: React.FC<ISlideShow> = (props) => {
  const { onPageChange, totalCount, direction, currentPage, pageSize, children } = props

  const { left, right } = useSlideShow({
    currentPage,
    totalCount,
    direction,
    pageSize,
  })

  const onNext = () => {
    onPageChange(currentPage + 1, 'right')
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1, 'left')
  }

  return (
    <CarouselContainer>
      <ArrowButton
        backColor={direction === 'left' ? 'var(--secondary)' : 'var(--light-navy-blue)'}
        disabled={!left}
        onClick={onPrevious}
        style={{ left: '-1rem' }}
      >
        <LeftArrow />
      </ArrowButton>
      <ArrowButton
        backColor={direction === 'right' ? 'var(--secondary)' : 'var(--light-navy-blue)'}
        disabled={!right}
        onClick={onNext}
        style={{ right: '-1rem' }}
      >
        <RightArrow />
      </ArrowButton>
      {children}
    </CarouselContainer>
  )
}

export default NormalButtonCarousel
