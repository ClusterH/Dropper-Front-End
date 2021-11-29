import React from 'react'
import { CommonSlider } from '../../components/Sliders'
import { uncommonList } from '../../constants/dummy'

export const CollectionUnCommon: React.FC = () => {
  return <CommonSlider sliderList={uncommonList} rarity={'Uncommon'} titleAlign={'center'} />
}
