import React from 'react'
import Svg from './Svg'
import { SvgProps } from './types'

const Icon: React.FC<SvgProps> = ({ width = '24px', height = '24px', stroke = 'white', fill = '#EC2A7B', style }) => (
  <Svg width={width} height={height} viewBox="0 0 40 40" fill="none" style={style}>
    <circle cx="20" cy="20" r="20" transform="rotate(90 20 20)" fill={fill} />
    <ellipse cx="20" cy="20" rx="11" ry="11" transform="rotate(90 20 20)" fill={stroke} />
  </Svg>
)

export default Icon
