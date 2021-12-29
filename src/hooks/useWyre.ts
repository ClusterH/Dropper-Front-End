import { useCallback } from 'react'
import { useWyre } from 'react-use-wyre'
import { useEthers } from '@usedapp/core'

export const useWyreDebitCard = () => {
  const { account, chainId } = useEthers()
  const { wyre } = useWyre()
  const accountID = chainId === 137 ? process.env.REACT_APP_WYRE_ACCOUNT_ID : process.env.REACT_APP_WYRE_ACCOUNT_ID_TEST

  const reservationOption = {
    sourceCurrency: 'USD',
    destCurrency: 'MUSDC',
    paymentMethod: 'debit-card',
    country: 'US',
    redirectUrl: `${location.protocol}//${location.host}`,
    failureRedirectUrl: 'google.com',
    lockFields: ['amount', 'sourceCurrency', 'destCurrency', 'paymentMethod'],
  }

  const handleDebitCardPayment = useCallback(
    async ({ ...opts }) => {
      const { amount, account, firstName, lastName, email } = opts
      //Create Wallet Order Reservatio
      const { data: reserve } = await wyre({
        url: 'v3/orders/reserve',
        method: 'post',
        data: {
          amount: Number(amount),
          sourceCurrency: reservationOption.sourceCurrency,
          destCurrency: reservationOption.destCurrency,
          dest: `matic:${account}`,
          paymentMethod: reservationOption.paymentMethod,
          referrerAccountId: accountID,
          email,
          firstName,
          lastName,
          country: reservationOption.country,
          redirectUrl: reservationOption.redirectUrl,
          failureRedirectUrl: reservationOption.failureRedirectUrl,
          lockFields: reservationOption.lockFields,
        },
      })

      window.open(reserve.url, '_blank')
    },
    [wyre, accountID]
  )

  return { onWyreDebitCard: handleDebitCardPayment }
}
