import styled from 'styled-components'

export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const CarouselWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`

export const CarouselContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`

export const CarouselContent = styled.div`
  display: flex;
  transition: all 250ms linear;
  -ms-overflow-style: none;
  /* hide scrollbar in IE and Edge */
  scrollbar-width: none;
  /* hide scrollbar in Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  & > * {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
  }
  &.show-2 {
    & > * {
      width: 50%;
    }
  }
  &.show-3 {
    & > * {
      width: calc(100% / 3);
    }
  }
  &.show-4 {
    & > * {
      width: calc(100% / 4);
    }
  }
`
export const IndicatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px auto 0 auto;
  max-width: 80px;
  overflow: auto;
  -ms-overflow-style: none;
  /* hide scrollbar in IE and Edge */
  scrollbar-width: none;
  /* hide scrollbar in Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  & > * {
    margin-left: 6px;
    border-radius: 50%;
    transition-property: all;
    transition-duration: 250ms;
    transition-timing - function: linear;
  }
  &>div:first-child {
    margin-left: 0px
  }
  &>.dots-active {
    width: 12px;
    height: 12px;
    background-color: var(--secondary);
    flex-shrink: 0;
    flex-grow: 1;
  }
  &>.dots-close {
    width: 12px;
    height: 12px;
    background-color: transparent;
    border: 1px solid var(--secondary);
    flex-shrink: 0;
    flex-grow: 1;
  }
  &>.dots-far {
    width: 12px;
    height: 12px;
    margin-top: 1px;
    margin-bottom: 1px;
    background-color: transparent;
    border: 1px solid var(--secondary);
    flex-shrink: 0;
    flex-grow: 1;
  }
`
