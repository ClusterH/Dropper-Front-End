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
  &:hover {
    background: var(--primary-text);
    color: var(--secondary);
  }

  &:disabled {
    background: #606061;
    color: #caced2;
    cursor: default;
  }

  color: ${({ color }) => (color ? color : 'var(--secondary)')};
  padding: ${({ padding }) => (padding ? padding : '8px 16px')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '32px')};
  background: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'var(--secondary)')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '0px')};
`
