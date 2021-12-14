import { useCallback, useMemo, useState } from 'react'
import { SecretType, VenlyConnect } from '@venly/connect'
import { AuthenticationResult } from '@venly/connect/dist/src/connect/connect'
import { useActiveWeb3React } from './useWeb3'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import { setVenlyAccount } from '../state/venly/reducer'
import { AppState } from '../state'

export const useVenlyAccount = () => {
  return useAppSelector((state: AppState) => state.venly.venlyAccount)
}

export const useVenlyConnection = () => {
  const { chainId } = useActiveWeb3React()
  const venlyOptions = useMemo(() => {
    return {
      environment: chainId === 137 ? 'staging' : 'staging',
    }
  }, [chainId])

  const venlyConnect = useMemo(() => new VenlyConnect('Testaccount', venlyOptions), [venlyOptions])
  return venlyConnect
}

export const useVenlyConnect = () => {
  const [authStatus, setAuthStatus] = useState<boolean>(false)
  const { chainId } = useActiveWeb3React()
  const dispatch = useAppDispatch()

  const venlyOptions = useMemo(() => {
    return {
      environment: 'staging',
    }
  }, [])

  const venlyConnect = useMemo(() => new VenlyConnect('Testaccount', venlyOptions), [venlyOptions])

  const handleGetAccount = useCallback(() => {
    venlyConnect.flows
      .getAccount(SecretType.MATIC)
      .then((account: any) => {
        if (account.isAuthenticated) {
          dispatch(setVenlyAccount({ id: account.wallets[0].id, address: account.wallets[0].address }))
        }
      })
      .catch((e) => {
        console.log('user closed window, or an error occurred', e)
      })
  }, [dispatch, venlyConnect])

  const handleAuthentication = useCallback(() => {
    venlyConnect.flows.authenticate().then((result: AuthenticationResult) => {
      result
        .authenticated((auth: Keycloak.KeycloakInstance) => {
          setAuthStatus(true)
          handleGetAccount()
        })
        .notAuthenticated((auth: any) => {
          setAuthStatus(false)
        })
    })
  }, [handleGetAccount, venlyConnect])

  const handleLogOut = useCallback(() => {
    venlyConnect.logout()
    setAuthStatus(false)
  }, [venlyConnect])

  return { authStatus, handleAuthentication, handleLogOut }
}
