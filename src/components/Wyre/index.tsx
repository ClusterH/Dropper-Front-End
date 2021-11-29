import React from 'react'
import SendWyre from 'react-use-wyre'
import { useActiveWeb3React } from '../../hooks/useWeb3'

export const WyreWidgetProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { chainId } = useActiveWeb3React()
  const apiKey = chainId === 137 ? process.env.REACT_APP_WYRE_API_KEY : process.env.REACT_APP_WYRE_API_KEY_TEST
  const secretKey = chainId === 137 ? process.env.REACT_APP_WYRE_SECRET_KEY : process.env.REACT_APP_WYRE_SECRET_KEY_TEST
  const partnerId = chainId === 137 ? process.env.REACT_APP_WYRE_ACCOUNT_ID : process.env.REACT_APP_WYRE_ACCOUNT_ID_TEST

  return (
    <SendWyre
      apiKey={apiKey}
      secretKey={secretKey}
      partnerId={partnerId}
      baseUrl=""
      apiUrl={`${chainId === 137 ? 'https://api.sendwyre.com' : 'https://api.testwyre.com'}`}
    >
      {children}
    </SendWyre>
  )
}
