import React from 'react'
import Svg from './Svg'
import { SvgProps } from './types'

const Icon: React.FC<SvgProps> = ({ width = '24px', height = '24px', color = '#FF0069', stroke = '#EFDCE4', style }) => (
  <svg width={width} height={height} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
    <rect x="1.12508" y="0.541677" width="50.4167" height="50.4167" rx="25.2083" fill={color} stroke={color} strokeWidth="0.916667" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.6669 17.5C22.9016 17.5 23.1362 17.5898 23.315 17.7685L30.6483 25.1019C31.0067 25.4603 31.0067 26.0396 30.6483 26.398L23.315 33.7314C22.9566 34.0898 22.3772 34.0898 22.0188 33.7314C21.6604 33.373 21.6604 32.7936 22.0188 32.4352L28.7041 25.75L22.0188 19.0647C21.6604 18.7063 21.6604 18.127 22.0188 17.7685C22.1976 17.5898 22.4322 17.5 22.6669 17.5Z"
      fill={stroke}
    />
  </svg>
)

export default Icon
