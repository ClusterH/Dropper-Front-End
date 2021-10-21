import React from 'react'
import { TPackItem } from '../types'

interface IPackContext {
  packs: TPackItem[]
  setPacks: (packs: TPackItem[]) => void
}
const initialState = { packs: [], setPacks: () => null }
const PackContext = React.createContext<IPackContext>(initialState)
export const usePackContext = () => React.useContext(PackContext)

export const PackContextProvider: React.FC = ({ children }) => {
  const [packs, setPacks] = React.useState<TPackItem[]>([])

  return <PackContext.Provider value={{ packs, setPacks }}>{children}</PackContext.Provider>
}
