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
  packURI?: string
  featureList?: Array<string>
  cartQuantity: number
}
export type TSelectedTab = 'packs' | 'moments' | 'rankings'

export type TRarity = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Mythic'

export type TMomentItem = {
  id: string
  momentId: string
  name: string
  description: string
  imageUrl: string
  animationUrl: string
  collection: string
  rarity: string
  title: string
  genre: string
  platform: string
  twitter: string
  awsImageUrl: string
  awsAnimationUrl: string
  totalMintedMoments: string
}

export type TCollectionItem = {
  id: number
  title: string
  content: string
  uri: string
}

export interface IDropperState {
  latestBlockNumber: number
  userPackList: TPackItem[] | null
  userMomentList: TMomentItem[] | null
  isUSDCApproved: boolean
  isLoading: boolean
}

export type TWyreForm = {
  amount: number
  account: string
  firstName: string
  lastName: string
  email: string
}

export interface Call {
  address: string // Address of the contract
  name: string // Function name on the contract (example: balanceOf)
  params?: any[] // Function params
}

export type TTeamElement = {
  id: number
  name: string
  role: string
  imgUri: string
  twitterLink?: string
  linkedLink?: string
  skypeLink?: string
}

export type TAdvisorElement = {
  id: number
  name: string
  role?: string
  imgUri?: string
  twitterLink?: string
  linkedLink?: string
  skypeLink?: string
}

export type TPartnerElement = {
  id: number
  name: string
  imgUri?: string
  twitter?: string
}

export type TInvestorElement = {
  id: number
  name: string
  imgUri?: string
  websiteLink?: string
  twitterLink?: string
}
