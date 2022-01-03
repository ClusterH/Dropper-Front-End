import { VenlyConnect } from '@venly/connect'

export const getVenlyConnect = () => {
  const venlyOptions = { environment: 'staging' }
  const venlyConnect = new VenlyConnect('Testaccount', venlyOptions)
  return venlyConnect
}
