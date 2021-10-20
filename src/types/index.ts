//Flex Layout
export type TFlexDirections = 'row' | 'row-reverse' | 'column' | 'column-reverse'
export type TFlexJustifyContents =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
export type TFlexAlignItems =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'

//Creators
export type TCreatorElement = {
  id: number
  name: string
  role: 'CEO' | 'COO' | 'CTO' | 'CFO'
  description: string
  imgUrl: string
}

export type TPackItem = {
  id: number
  level: 'Basic' | 'Plus' | 'Premium'
  count: number
  price: number
  uri: string
  balance?: string
  animationUrl: string
}

export type TMomentItem = {
  id?: string
  uri?: string
  rarity?: string
  name?: string
  image?: string
}
export type TRarity = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Mythic'
