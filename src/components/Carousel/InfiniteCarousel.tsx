import React, { Children } from 'react'
import styled from 'styled-components'
import MainButton from '../Buttons/MainButton'
import { CarouselContainer, CarouselContent, CarouselContentWrapper, CarouselWrapper, IndicatorContainer } from './carouselStyle'

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
  border: 1px solid ${({ borderColor }) => (borderColor ? borderColor : 'var(--navy-blue-opacity)')};
  box-shadow: 1px 2px 10px var(--navy-blue-opacity);
  border-radius: 8px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
`

export interface ICarouselProps {
  /**
   * Items that going to be showed
   */
  children: React.ReactNode

  /**
   * Indicate how many to show at once
   */
  show: number

  /**
   * Is the carousel will be repeating
   */
  infiniteLoop?: boolean

  /**
   * Is the carousel arrow button will be shown
   */
  isArrowButton?: boolean

  /**
   * Is the carousel arrow button will be shown
   */
  isAutoPlay?: boolean

  /**
   * Render with indicator
   */
  withIndicator?: boolean

  /**
   * Render custom previous button
   * @param previousItem function to navigate to previous item
   * @param defaultClass default class for the button, it contain styles to position the button correctly. (not the arrow icon)
   * @example
   * <Carousel
   *   renderPreviousButton={(previousItem, defaultClass) => (
   *     <button onClick={previousItem} className={defaultClass}>
   *       previous
   *     </button>
   *   )}
   * >
   *   ...
   * </Carousel>
   */
  renderPreviousButton?: (previousItem: () => void, defaultClass?: string) => JSX.Element

  /**
   * Render custom next button
   * @param nextItem function to navigate to next item
   * @param defaultClass default class for the button, it contain styles to position the button correctly. (not the arrow icon)
   * @example
   * <Carousel
   *   renderNextButton={(nextItem, defaultClass) => (
   *     <button onClick={nextItem} className={defaultClass}>
   *       next
   *     </button>
   *   )}
   * >
   *   ...
   * </Carousel>
   */
  renderNextButton?: (nextItem: () => void, defaultClassName?: string) => JSX.Element

  /**
   * additional className for container element
   */
  containerClassName?: string

  /**
   * props for container element, be aware that if you supply className props here, it will overwrite the default one
   */
  containerProps?: React.HTMLProps<HTMLDivElement>

  /**
   * additional className for wrapper element
   */
  wrapperClassName?: string

  /**
   * props for wrapper element, be aware that if you supply className props here, it will overwrite the default one
   */
  wrapperProps?: React.HTMLProps<HTMLDivElement>

  /**
   * additional className for content wrapper element
   */
  contentWrapperClassName?: string

  /**
   * props for content wrapper element, be aware that if you supply className props here, it will overwrite the default one
   */
  contentWrapperProps?: React.HTMLProps<HTMLDivElement>

  /**
   * additional className for content element
   */
  contentClassName?: string

  /**
   * props for content element, be aware that if you supply className props here, it will overwrite the default one
   */
  contentProps?: React.HTMLProps<HTMLDivElement>

  /**
   * Classname for indicator container
   */
  indicatorContainerClassName?: string

  /**
   * props for indicator container element, be aware that if you supply className and ref props here, it will overwrite the default one
   */
  indicatorContainerProps?: React.HTMLProps<HTMLDivElement>

  /**
   * className for each classes in the indicator,
   * active: current item,
   * close: item that close with current item,
   * far: item that far from current item
   */
  indicatorClassNames?: {
    active?: string
    close?: string
    far?: string
  }

  /**
   * Render custom dot element
   * @param index dot's index
   * @param defaultClassName default class for the dot element, it contain styles to display the dot correctly
   * @example
   * <Carousel
   *   renderDot={(index, defaultClassName) => (
   *     // data-index is required for scrolling purposes
   *     <div key={index} data-index={index} className={defaultClassName} />
   *   )}
   * >
   *   ...
   * </Carousel>
   */
  renderDot?: (index: number, defaultClassName: string) => JSX.Element
}

const InfiniteCarousel = ({
  children,
  show,
  infiniteLoop,
  isArrowButton,
  isAutoPlay,
  withIndicator,
  renderPreviousButton,
  renderNextButton,
  containerClassName,
  wrapperClassName,
  contentWrapperClassName,
  contentClassName,
  containerProps,
  wrapperProps,
  contentWrapperProps,
  contentProps,
  indicatorContainerClassName,
  indicatorContainerProps,
  indicatorClassNames,
}: ICarouselProps): JSX.Element => {
  const indicatorContainerRef = React.useRef<HTMLDivElement>(null)

  /**
   * Total item
   */
  const length = React.useMemo(() => Children.count(children), [children])

  /**
   * Is the carousel repeating it's item
   */
  const isRepeating = React.useMemo(() => infiniteLoop && Children.count(children) > show, [children, infiniteLoop, show])

  /**
   * Current Index Item of the Carousel
   */
  const [currentIndex, setCurrentIndex] = React.useState<number>(isRepeating ? show : 0)

  /**
   * Is the carousel's transition enabled
   */
  const [isTransitionEnabled, setTransitionEnabled] = React.useState<boolean>(true)

  /**
   * First touch position to be used in calculation for the swipe speed
   */
  const [touchPosition, setTouchPosition] = React.useState<null | number>(null)

  const [direction, setDirection] = React.useState<string>('left')
  /**
   * Handle if the carousel is repeating
   * and the currentIndex have been set to the last or first item
   */
  React.useEffect(() => {
    if (isAutoPlay) {
      const autoPlay = setInterval(() => {
        nextItem()
      }, 3000)
      return () => {
        clearInterval(autoPlay)
      }
    }
  }, [])

  React.useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true)
      }
    }
  }, [currentIndex, isRepeating, show, length])

  React.useEffect(() => {
    if (withIndicator) {
      const active = indicatorContainerRef.current?.querySelector('.dots-active')
      if (active) {
        const index = active.getAttribute('data-index')
        if (index !== null && indicatorContainerRef.current?.scrollTo) {
          indicatorContainerRef.current?.scrollTo({
            left: ((Number(index) - 2) / 5) * 50,
            behavior: 'smooth',
          })
        }
      }
    }
  }, [withIndicator, currentIndex])

  /**
   * Move forward to the next item
   */
  const nextItem = () => {
    if (isRepeating || currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1)
      setDirection('right')
    }
  }

  /**
   * Move backward to the previous item
   */
  const previousItem = () => {
    if (isRepeating || currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
      setDirection('left')
    }
  }

  /**
   * Handle when the user start the swipe gesture
   * @param e TouchEvent
   */
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    // Save the first position of the touch
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  /**
   * Handle when the user move the finger in swipe gesture
   * @param e TouchEvent
   */
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    // Get initial location
    const touchDown = touchPosition

    // Proceed only if the initial position is not null
    if (touchDown === null) {
      return
    }

    // Get current position
    const currentTouch = e.touches[0].clientX

    // Get the difference between previous and current position
    const diff = touchDown - currentTouch

    // Go to next item
    if (diff > 5) {
      nextItem()
    }

    // Go to previous item
    if (diff < -5) {
      previousItem()
    }

    // Reset initial touch position
    setTouchPosition(null)
  }

  /**
   * Handle when carousel transition's ended
   */
  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false)
        setCurrentIndex(length)
      } else if (currentIndex === length + show) {
        setTransitionEnabled(false)
        setCurrentIndex(show)
      }
    }
  }

  /**
   * Render previous items before the first item
   */
  const extraPreviousItems = React.useMemo(() => {
    const output = []
    for (let index = 0; index < show; index++) {
      output.push(Children.toArray(children)[length - 1 - index])
    }
    output.reverse()
    return output
  }, [children, length, show])

  /**
   * Render next items after the last item
   */
  const extraNextItems = React.useMemo(() => {
    const output = []
    for (let index = 0; index < show; index++) {
      output.push(Children.toArray(children)[index])
    }
    return output
  }, [children, show])

  const renderDots = React.useMemo(() => {
    const output = []

    const localShow = isRepeating ? show : 0
    const localLength = isRepeating ? length : Math.ceil(length / show)
    const calculatedActiveIndex = currentIndex - localShow < 0 ? length + (currentIndex - localShow) : currentIndex - localShow

    for (let index = 0; index < localLength; index++) {
      let className = ''
      if (calculatedActiveIndex === index) {
        className = indicatorClassNames?.active || 'dots-active'
      } else {
        if (calculatedActiveIndex === 0) {
          if (calculatedActiveIndex + index <= 2) {
            className = indicatorClassNames?.close || 'dots-close'
          } else {
            className = indicatorClassNames?.far || 'dots-far'
          }
        } else if (calculatedActiveIndex === localLength - 1) {
          if (Math.abs(calculatedActiveIndex - index) <= 2) {
            className = indicatorClassNames?.close || 'dots-close'
          } else {
            className = indicatorClassNames?.far || 'dots-far'
          }
        } else {
          if (Math.abs(calculatedActiveIndex - index) === 1) {
            className = indicatorClassNames?.close || 'dots-close'
          } else {
            className = indicatorClassNames?.far || 'dots-far'
          }
        }
      }
      output.push(<div key={index} data-index={index} className={className} />)
    }

    return output
  }, [currentIndex, indicatorClassNames, isRepeating, length, show])

  return (
    <CarouselContainer data-testid="carousel-container" className={`${containerClassName || ''}`}>
      <CarouselWrapper data-testid="carousel-wrapper" className={`${wrapperClassName || ''}`}>
        {isArrowButton && (isRepeating || currentIndex > 0) ? (
          renderPreviousButton ? (
            renderPreviousButton(previousItem, 'left-arrow-button')
          ) : (
            <ArrowButton
              data-testid="left-button"
              backColor={direction === 'left' ? 'var(--secondary)' : 'var(--light-navy-blue)'}
              onClick={previousItem}
              style={{ left: '-1rem' }}
            >
              {/* <button data-testid="left-button" onClick={previousItem} className="left-arrow-button"> */}
              <LeftArrow />
              {/* </button> */}
            </ArrowButton>
          )
        ) : null}
        <CarouselContentWrapper
          data-testid="carousel-content-wrapper"
          className={`${contentWrapperClassName || ''}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <CarouselContent
            data-testid="carousel-content"
            className={`show-${show} ${contentClassName || ''}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
              transition: !isTransitionEnabled ? 'none' : undefined,
            }}
            onTransitionEnd={() => handleTransitionEnd()}
          >
            {length > show && isRepeating && extraPreviousItems}
            {children}
            {length > show && isRepeating && extraNextItems}
          </CarouselContent>
        </CarouselContentWrapper>
        {isArrowButton && (isRepeating || currentIndex < length - show) ? (
          renderNextButton ? (
            renderNextButton(nextItem, 'right-arrow-button')
          ) : (
            <ArrowButton
              data-testid="right-button"
              backColor={direction === 'right' ? 'var(--secondary)' : 'var(--light-navy-blue)'}
              onClick={nextItem}
              style={{ right: '-1rem' }}
            >
              {/* <button data-testid="right-button" onClick={nextItem} className="right-arrow-button"> */}
              <RightArrow />
              {/* </button> */}
            </ArrowButton>
          )
        ) : null}
      </CarouselWrapper>
      {withIndicator && (
        <IndicatorContainer
          data-testid="indicator-container"
          ref={indicatorContainerRef}
          className={`${indicatorContainerClassName || ''}`}
        >
          {renderDots}
        </IndicatorContainer>
      )}
    </CarouselContainer>
  )
}

export default InfiniteCarousel
