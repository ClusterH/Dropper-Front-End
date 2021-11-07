import React from 'react'
import { ThreeCardSlider } from '../../components/Sliders'
import { epicList } from '../../constants/dummy'

export const CollectionEpic: React.FC = () => {
  return <ThreeCardSlider sliderList={epicList} rarity={'Epic'} />
}
