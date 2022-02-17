import { VenlyConnect } from '@venly/connect'

export const getVenlyConnect = () => {
  const venlyOptions = { environment: 'prod' }
  const venlyConnect = new VenlyConnect('Dropper', venlyOptions)
  return venlyConnect
}

// export const getVenlyConnect = () => {
//   const venlyOptions = { environment: 'staging' }
//   const venlyConnect = new VenlyConnect('Testaccount', venlyOptions)
//   return venlyConnect
// }
