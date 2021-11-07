import React from 'react'
import { SVGAttributes } from 'react'
import { CSSProperties } from 'styled-components'

export interface SvgProps extends SVGAttributes<HTMLOrSVGElement> {
  color?: string
  width?: string
  height?: string
  fill?: string
  stroke?: string
  style?: CSSProperties
}

const RemarkIcon: React.FC<SvgProps> = ({
  width = '24px',
  height = '24px',
  stroke = 'white',
  fill = '#EC2A7B',
  style,
}) => (
  <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
    <circle cx="20" cy="20" r="20" transform="rotate(90 20 20)" fill={fill} />
    <ellipse cx="20" cy="20" rx="11" ry="11" transform="rotate(90 20 20)" fill={stroke} />
  </svg>
)

export default RemarkIcon
