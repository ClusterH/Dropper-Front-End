import React from 'react'

interface ICollectionContext {
  creatorId: number
  setCreatorId: (creatorId: number) => void
  isUSDCApproved: boolean
  setIsUSDCApproved: (isUSDCApproved: boolean) => void
}
const initialState = { creatorId: 0, setCreatorId: () => null, isUSDCApproved: false, setIsUSDCApproved: () => null }
const CollectionContext = React.createContext<ICollectionContext>(initialState)
export const useCollectionContext = () => React.useContext(CollectionContext)

export const CollectionContextProvider: React.FC = ({ children }) => {
  const [creatorId, setCreatorId] = React.useState<number>(0)
  const [isUSDCApproved, setIsUSDCApproved] = React.useState<boolean>(false)

  return (
    <CollectionContext.Provider value={{ creatorId, setCreatorId, isUSDCApproved, setIsUSDCApproved }}>
      {children}
    </CollectionContext.Provider>
  )
}
