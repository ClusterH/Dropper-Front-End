import React from 'react'
import Svg from './Svg'
import { SvgProps } from './types'

const Icon: React.FC<SvgProps> = ({ width = '24px', height = '24px', color = 'white', style }) => (
  <Svg width={width} height={height} viewBox="0 0 26 27" style={style}>
    <path
      d="M25.0801 13.747C25.0801 6.55263 19.5623 0.723633 12.752 0.723633C5.94167 0.723633 0.423828 6.55263 0.423828 13.747C0.423828 20.2586 4.89776 25.6675 10.8133 26.6128V17.5279H7.68154V13.747H10.8133V10.9112C10.8133 7.65541 12.6526 5.81744 15.4363 5.81744C16.8282 5.81744 18.2201 6.08001 18.2201 6.08001V9.28333H16.6791C15.1381 9.28333 14.641 10.2811 14.641 11.3314V13.747H18.071L17.5242 17.5279H14.641V26.6128C20.5565 25.6675 25.0801 20.2586 25.0801 13.747Z"
      fill={color}
    />
  </Svg>
)

export default Icon
