import React from 'react'
import styled from 'styled-components'
import { ContainerColumn } from '../../styles/globalStyles'

export const BigBox = styled.div<{ padding?: string; width?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ width }) => (width ? width : 'fit-content')};
  max-width: 1140px;
  height: auto;
  padding: ${({ padding }) => (padding ? padding : '50px 130px')};
  border-style: solid;
  border-radius: 10px;
  border-color: #ff0069;
  background: black;
  box-shadow: 3px 3px 12px 2px #ff0069;
`
