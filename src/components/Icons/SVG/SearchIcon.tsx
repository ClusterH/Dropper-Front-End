import React from 'react'
import Svg from './Svg'
import { SvgProps } from './types'

const Icon: React.FC<SvgProps> = ({ width = '24px', height = '24px', color = 'white', style }) => (
  <Svg width={width} height={height} viewBox="0 0 16 16" style={style}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.30425 0C11.3317 0 14.6078 3.276 14.6078 7.3035C14.6078 9.20366 13.8785 10.9367 12.6852 12.2374L15.0333 14.5805C15.2531 14.8003 15.2538 15.1558 15.034 15.3755C14.9246 15.4865 14.7798 15.5413 14.6358 15.5413C14.4925 15.5413 14.3485 15.4865 14.2383 15.377L11.8619 13.0073C10.6118 14.0084 9.02676 14.6078 7.30425 14.6078C3.27675 14.6078 0 11.331 0 7.3035C0 3.276 3.27675 0 7.30425 0ZM7.30425 1.125C3.897 1.125 1.125 3.89625 1.125 7.3035C1.125 10.7108 3.897 13.4828 7.30425 13.4828C10.7108 13.4828 13.4828 10.7108 13.4828 7.3035C13.4828 3.89625 10.7108 1.125 7.30425 1.125Z"
      fill={color}
    />
  </Svg>
)

export default Icon
