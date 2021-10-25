import { SVGAttributes } from 'react'

export interface SvgProps extends SVGAttributes<HTMLOrSVGElement> {
  color?: string
  spin?: boolean
}
