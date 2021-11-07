import React from 'react'
import { SVGAttributes } from 'react'
import { CSSProperties } from 'styled-components'

export interface SvgProps extends SVGAttributes<HTMLOrSVGElement> {
  color?: string
  width?: string
  height?: string
  style?: CSSProperties
}

const FavoriteIcon: React.FC<SvgProps> = ({ width = '24px', height = '24px', color = '#666666', style }) => (
  <svg width={width} height={height} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
    <path
      d="M11.7344 2.02344C10.375 0.875 8.28906 1.03906 7 2.375C5.6875 1.03906 3.60156 0.875 2.24219 2.02344C0.484375 3.5 0.742188 5.91406 2.00781 7.20312L6.10938 11.3984C6.34375 11.6328 6.64844 11.7734 7 11.7734C7.32812 11.7734 7.63281 11.6328 7.86719 11.3984L11.9922 7.20312C13.2344 5.91406 13.4922 3.5 11.7344 2.02344ZM11.1719 6.40625L7.07031 10.6016C7.02344 10.6484 6.97656 10.6484 6.90625 10.6016L2.80469 6.40625C1.9375 5.53906 1.77344 3.89844 2.96875 2.89062C3.88281 2.11719 5.28906 2.23438 6.17969 3.125L7 3.96875L7.82031 3.125C8.6875 2.23438 10.0938 2.11719 11.0078 2.86719C12.2031 3.89844 12.0391 5.53906 11.1719 6.40625Z"
      fill={color}
    />
  </svg>
)

export default FavoriteIcon
