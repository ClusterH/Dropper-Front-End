import { VenlyConnect } from '@venly/connect'

export const getVenlyConnect = () => {
  const venlyOptions = { environment: 'prod' }
  const venlyConnect = new VenlyConnect('Dropper', venlyOptions)
  return venlyConnect
}
