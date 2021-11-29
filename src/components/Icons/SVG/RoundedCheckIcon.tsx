import React from 'react'
import Svg from './Svg'
import { SvgProps } from './types'

const Icon: React.FC<SvgProps & { isActive: boolean }> = ({
  width = '24px',
  height = '24px',
  color = '#757575',
  style,
  isActive = false,
}) =>
  isActive === true ? (
    <svg width={width} height={height} viewBox="0 0 19 20" style={style}>
      <path
        d="M18.6322 9.85412C18.6322 4.75542 14.4332 0.556483 9.33452 0.556483C4.19833 0.556483 0.0368852 4.75542 0.0368852 9.85412C0.0368852 14.9903 4.19833 19.1518 9.33452 19.1518C14.4332 19.1518 18.6322 14.9903 18.6322 9.85412ZM8.2473 14.8029C8.02236 15.0278 7.60996 15.0278 7.38502 14.8029L3.48601 10.9039C3.26107 10.6789 3.26107 10.2665 3.48601 10.0416L4.34829 9.21678C4.57323 8.95435 4.94814 8.95435 5.17308 9.21678L7.8349 11.8411L13.4585 6.21755C13.6834 5.95511 14.0583 5.95511 14.2833 6.21755L15.1455 7.04234C15.3705 7.26728 15.3705 7.67967 15.1455 7.90462L8.2473 14.8029Z"
        fill={color}
      />
    </svg>
  ) : (
    <svg width={width} height={height} viewBox="0 0 19 19" style={style}>
      <path
        d="M9.33452 0.19401C4.19833 0.19401 0.0368852 4.39294 0.0368852 9.49165C0.0368852 14.6278 4.19833 18.7893 9.33452 18.7893C14.4332 18.7893 18.6322 14.6278 18.6322 9.49165C18.6322 4.39294 14.4332 0.19401 9.33452 0.19401ZM9.33452 1.99355C13.4585 1.99355 16.8326 5.3677 16.8326 9.49165C16.8326 13.6531 13.4585 16.9897 9.33452 16.9897C5.17308 16.9897 1.83643 13.6531 1.83643 9.49165C1.83643 5.3677 5.17308 1.99355 9.33452 1.99355ZM14.5832 6.90481L13.7209 6.04252C13.5709 5.85507 13.271 5.85507 13.0836 6.04252L7.79741 11.2912L5.54799 9.04176C5.36053 8.85431 5.0981 8.85431 4.91065 9.04176L4.04837 9.86655C3.8984 10.054 3.8984 10.3539 4.04837 10.5039L7.46 13.953C7.64745 14.1405 7.90989 14.1405 8.09734 13.953L14.5832 7.54214C14.7332 7.35469 14.7332 7.05477 14.5832 6.90481Z"
        fill={color}
      />
    </svg>
  )

export default Icon
