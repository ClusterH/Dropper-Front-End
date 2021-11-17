import React from 'react'
import Svg from './Svg'
import { SvgProps } from './types'

const Icon: React.FC<SvgProps> = ({ width = '24px', height = '24px', color = 'white', style }) => (
  <Svg width={width} height={height} viewBox="0 0 25 19" style={style}>
    <path
      d="M21.8212 4.76055C22.7459 4.08639 23.5781 3.27741 24.2254 2.33359C23.3932 2.69314 22.4223 2.9628 21.4514 3.05269C22.4685 2.46842 23.2082 1.56955 23.5781 0.445953C22.6534 0.985278 21.5901 1.38977 20.5267 1.61449C19.602 0.670672 18.3537 0.131348 16.9667 0.131348C14.2851 0.131348 12.1122 2.2437 12.1122 4.85043C12.1122 5.20998 12.1584 5.56953 12.2509 5.92908C8.22853 5.70436 4.6223 3.81673 2.21815 0.985278C1.80205 1.65943 1.57088 2.46842 1.57088 3.36729C1.57088 4.98527 2.40309 6.42346 3.74386 7.27739C2.95789 7.23245 2.17192 7.05267 1.52465 6.69313V6.73807C1.52465 9.0302 3.18906 10.9178 5.40828 11.3673C5.03841 11.4572 4.57607 11.547 4.15997 11.547C3.83633 11.547 3.55893 11.5021 3.23529 11.4572C3.83633 13.3448 5.63944 14.6931 7.76619 14.738C6.10178 15.9965 4.02127 16.7605 1.75582 16.7605C1.33971 16.7605 0.969845 16.7156 0.599976 16.6706C2.72672 18.0189 5.26957 18.783 8.04359 18.783C16.9667 18.783 21.8212 11.6369 21.8212 5.38976C21.8212 5.16504 21.8212 4.98527 21.8212 4.76055Z"
      fill={color}
    />
  </Svg>
)

export default Icon