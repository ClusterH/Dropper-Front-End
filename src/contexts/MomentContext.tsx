import React from 'react'
import { TMomentItem } from '../types'

interface IMomentContext {
  moments: TMomentItem[]
  setMoments: (moments: TMomentItem[]) => void
}
const initialState = { moments: [], setMoments: () => null }
const MomentContext = React.createContext<IMomentContext>(initialState)
export const useMomentContext = () => React.useContext(MomentContext)

export const MomentContextProvider: React.FC = ({ children }) => {
  const [moments, setMoments] = React.useState<TMomentItem[]>([])

  return <MomentContext.Provider value={{ moments, setMoments }}>{children}</MomentContext.Provider>
}
