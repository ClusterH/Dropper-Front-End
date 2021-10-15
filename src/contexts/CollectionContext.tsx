import React from 'react'

interface ICollectionContext {
  creatorId: number
  setCreatorId: (creatorId: number) => void
}
const initialState = { creatorId: 0, setCreatorId: () => null }
const CollectionContext = React.createContext<ICollectionContext>(initialState)
export const useCollectionContext = () => React.useContext(CollectionContext)

export const CollectionContextProvider: React.FC = ({ children }) => {
  const [creatorId, setCreatorId] = React.useState<number>(0)

  return <CollectionContext.Provider value={{ creatorId, setCreatorId }}>{children}</CollectionContext.Provider>
}
