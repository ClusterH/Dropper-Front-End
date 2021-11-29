import React from 'react'
import { ThreeCardSlider } from '../../components/Sliders'
import { rareList } from '../../constants/dummy'

export const CollectionRare: React.FC = () => {
  return <ThreeCardSlider sliderList={rareList} rarity={'Rare'} />
}
