import React from 'react'
import { SVGAttributes } from 'react'
import { CSSProperties } from 'styled-components'

export interface SvgProps extends SVGAttributes<HTMLOrSVGElement> {
  color?: string
  width?: string
  height?: string
  style?: CSSProperties
}

const LinkedinIcon: React.FC<SvgProps> = ({ width = '24px', height = '24px', color = 'white', style }) => (
  <svg width={width} height={height} viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
    <path
      d="M6.16543 20.7818V7.4739H1.26105V20.7818H6.16543ZM3.68688 5.69358C5.26893 5.69358 6.53458 4.58088 6.53458 3.24564C6.53458 1.95491 5.26893 0.886719 3.68688 0.886719C2.15755 0.886719 0.891907 1.95491 0.891907 3.24564C0.891907 4.58088 2.15755 5.69358 3.68688 5.69358ZM24.4646 20.7818H24.5173V13.4825C24.5173 9.92184 23.5681 7.16235 18.611 7.16235C16.2379 7.16235 14.6558 8.27504 13.9703 9.29873H13.9175V7.4739H9.22408V20.7818H14.1285V14.1946C14.1285 12.4588 14.4976 10.812 17.0289 10.812C19.5602 10.812 19.6129 12.7704 19.6129 14.3281V20.7818H24.4646Z"
      fill={color}
    />
  </svg>
)

export default LinkedinIcon
