import { SecretType } from '@venly/connect'
import { AuthenticationResult } from '@venly/connect/dist/src/connect/connect'
import { Venly } from '@venly/web3-provider'
import { useCallback, useEffect, useMemo } from 'react'
import { VENLY_CHAIN_ID } from '../constants/chains'
import { AppState } from '../state'
import { useWalletModalToggle } from '../state/application/hook'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import { resetVenlyState, setIsVenly, setVenlyAccount, setVenlyConnect } from '../state/venly/reducer'
import { setChainId, setIsWalletConnected, setWalletAddress } from '../state/wallet/reducer'
import { getVenlyConnect } from '../utils/venlyHelper'
import { useIsWalletConnected } from './useWallet'

export const useVenlyAccount = () => {
  return useAppSelector((state: AppState) => state.venly.venlyAccount)
}

export const useGetVenlyConnect = () => {
  return useAppSelector((state: AppState) => state.venly.venlyConnect)
}

export const useIsVenly = () => {
  return useAppSelector((state: AppState) => state.venly.isVenly)
}

export const useVenlyProvider = () => {
  return useMemo(async () => {
    const options = {
      clientId: 'Testaccount',
      environment: 'staging', //optional, production by default
      signMethod: 'POPUP', //optional, REDIRECT by default
      //optional: you can set an identity provider to be used when authenticating
      authenticationOptions: {
        idpHint: 'google',
      },
      skipAuthentication: true,
      secretType: SecretType.MATIC, //optional, ETHEREUM by default
    }
    const venlyProvider = await Venly.createProviderEngine(options)
    return venlyProvider
  }, [])
}

export const useVenlyConnection = () => {
  const dispatch = useAppDispatch()
  const venlyConnect = useMemo(() => getVenlyConnect(), [])

  const memorizedDispatch = useCallback(() => {
    dispatch(setVenlyConnect(venlyConnect))
  }, [dispatch, venlyConnect])

  useEffect(() => {
    memorizedDispatch()
  }, [memorizedDispatch])
}

export const useVenlyConnect = () => {
  const dispatch = useAppDispatch()
  const venlyConnect = useGetVenlyConnect()
  const toggleWalletModal = useWalletModalToggle()
  const isWalletConnected = useIsWalletConnected()

  const handleGetAccount = useCallback(() => {
    if (venlyConnect === undefined) return
    venlyConnect.flows
      .getAccount(SecretType.MATIC)
      .then(async (account: any) => {
        if (account.isAuthenticated) {
          dispatch(setVenlyAccount({ id: account.wallets[0].id, address: account.wallets[0].address }))
          dispatch(setIsWalletConnected('venly'))
          dispatch(setWalletAddress(account.wallets[0].address))
          dispatch(setChainId(VENLY_CHAIN_ID))
          toggleWalletModal()
        }
      })
      .catch((e) => {
        console.log('user closed window, or an error occurred', e)
      })
  }, [dispatch, toggleWalletModal, venlyConnect])

  const handleAuthentication = useCallback(() => {
    if (isWalletConnected === 'venly') return

    if (!venlyConnect) {
      const newVenlyConnect = getVenlyConnect()
      dispatch(setVenlyConnect(newVenlyConnect))
    }

    venlyConnect!.flows.authenticate().then((result: AuthenticationResult) => {
      result
        .authenticated((auth: Keycloak.KeycloakInstance) => {
          handleGetAccount()
        })
        .notAuthenticated((auth: any) => {
          dispatch(setIsVenly(false))
        })
    })
  }, [dispatch, handleGetAccount, isWalletConnected, venlyConnect])

  const handleLogOut = useCallback(() => {
    if (venlyConnect === undefined) return

    venlyConnect.logout()
    dispatch(resetVenlyState())
  }, [dispatch, venlyConnect])

  return { handleAuthentication, handleLogOut }
}
