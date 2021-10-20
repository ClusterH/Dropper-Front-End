import React from 'react'
import styled from 'styled-components'

export const MainButton = styled.button<{
  width?: string
  height?: string
  padding?: string
  color?: string
  borderRadius?: string
  backgroundColor?: string
  margin?: string
}>`
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: 600;
  transition: 0.3s;
  box-shadow: 0px 3px 10px var(--secondary-opacity);
  &:hover {
    background: var(--primary);
    color: var(--secondary);
    /* border: 1px solid var(--secondary); */
  }

  &:disabled {
    color: var(--disabled);
    cursor: default;
    pointer-events: none;
  }

  color: ${({ color }) => (color ? color : 'var(--primary-text)')};
  padding: ${({ padding }) => (padding ? padding : '8px 16px')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  width: ${({ width }) => (width ? width : 'fit-content')};
  height: ${({ height }) => (height ? height : '32px')};
  background: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'var(--secondary)')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '0px')};
`

export const TransparentBtn = styled(MainButton)`
  background: transparent;
  color: var(--primary-text);
  border: 2px solid var(--secondary);
  &:hover {
    background: transparent;
    color: var(--secondary);
  }
  &:disabled {
    border: 2px solid var(--disabled);
  }
`
