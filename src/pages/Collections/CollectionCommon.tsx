import React from 'react'
import { CommonSlider } from '../../components/Sliders'
import { commonList } from '../../constants/dummy'

export const CollectionCommon: React.FC = () => {
  return <CommonSlider sliderList={commonList} rarity={'Common'} titleAlign={'center'} />
}
