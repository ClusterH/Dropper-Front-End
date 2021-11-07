import React from 'react'
import { ThreeCardSlider } from '../../components/Sliders'
import { mythicList } from '../../constants/dummy'

export const CollectionMythic: React.FC = () => {
  return <ThreeCardSlider sliderList={mythicList} rarity={'Mythic'} />
}
