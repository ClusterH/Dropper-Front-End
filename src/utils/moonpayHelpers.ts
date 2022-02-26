import crypto from 'crypto'
import { getCollectionAddress } from './addressHelpers'

const getMoonPayConfig = (chainId: number) => {
  const MOONPAY_API_KEY = chainId === 137 ? process.env.REACT_APP_MOONPAY_API_KEY : process.env.REACT_APP_MOONPAY_API_KEY_TEST
  const MOONPAY_SECRET_KEY = chainId === 137 ? process.env.REACT_APP_MOONPAY_SECRET_KEY : process.env.REACT_APP_MOONPAY_SECRET_KEY_TEST
  const BASE_URL = chainId === 137 ? 'https://buy.moonpay.com' : 'https://buy-staging.moonpay.com'

  return { apiKey: MOONPAY_API_KEY, secretKey: MOONPAY_SECRET_KEY, baseUrl: BASE_URL }
}

export const getMoonPayUSDCWidgetURL = (chainId: number, walletAddress: string) => {
  const { apiKey, secretKey, baseUrl } = getMoonPayConfig(chainId)

  const MoonPayURL_Temp = `${baseUrl}?apiKey=${apiKey}&defaultCurrencyCode=USDC_POLYGON&currencyCode=USDC_POLYGON&walletAddress=${walletAddress}&colorCode=%23ff0069&showWalletAddressForm=true`

  const signature = crypto.createHmac('sha256', secretKey!).update(new URL(MoonPayURL_Temp).search).digest('base64')
  const moonPayUSDCURL = `${MoonPayURL_Temp}&signature=${encodeURIComponent(signature)}`

  return moonPayUSDCURL
}

export const getMoonPayNFTWidgetURL = (chainId: number, tokenId: number, walletAddress: string, cartQuantity?: number) => {
  const { apiKey, secretKey, baseUrl } = getMoonPayConfig(chainId)
  const collectionAddress = getCollectionAddress(chainId)

  // TODO: Need to be able to handle a quantity somehow.
  const urlTemp = `${baseUrl}/nft?contractAddress=${collectionAddress}&tokenId=${tokenId}&apiKey=${apiKey}&walletAddress=${walletAddress}&colorCode=%23ff0069`
  const signature = crypto.createHmac('sha256', secretKey!).update(new URL(urlTemp).search).digest('base64')
  const moonPayNFTURL = `${urlTemp}&signature=${encodeURIComponent(signature)}`
  console.log(moonPayNFTURL)

  return moonPayNFTURL
}
