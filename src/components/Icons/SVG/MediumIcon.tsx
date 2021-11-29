import React from 'react'
import Svg from './Svg'
import { SvgProps } from './types'

const Icon: React.FC<SvgProps> = ({ width = '24px', height = '24px', color = 'white', style }) => (
  <Svg width={width} height={height} viewBox="0 0 26 27" fill={color} style={style}>
    <rect height="24" id="Artboard12" style={{ fill: 'none' }} width="24" x="0" y="0" />
    <g>
      <rect height="20" width="20" x="2" y="2" />
      <path
        d="M18.602,6.448l-3.698,0l-2.631,6.621l-2.99,-6.621l-3.951,0l0,0.329l1.392,1.701l-0.019,6.57l-1.376,1.878l0.003,0.311l3.886,0l0.01,-0.286l-1.628,-1.903l0.043,-5.317l3.433,7.506l0.414,0l3.049,-7.684l0,6.25l-1.25,1.182l0,0.252l5.313,0l0,-0.302l-1.218,-1.155l-0.017,-7.946l1.235,-1.055l0,-0.331Z"
        fill="#fff"
      />
    </g>
  </Svg>
)

export default Icon
