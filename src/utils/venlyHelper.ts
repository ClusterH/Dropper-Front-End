import { VenlyConnect } from '@venly/connect'
import { AuthenticationResult } from '@venly/connect/dist/src/connect/connect'

export const venlyAuthStatus = async (venlyConnect: VenlyConnect) => {
  venlyConnect.flows.authenticate().then((result: AuthenticationResult) => {
    result
      .authenticated((auth: any) => {
        venlyConnect.logout()
      })
      .notAuthenticated((auth: any) => {
        alert('not logged in')
      })
  })
}
