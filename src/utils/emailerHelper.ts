import axios from 'axios'
import { toast } from 'react-toastify'
import { setupInterceptorsTo } from './api/axiosInterceptors'

interface IEmailForm {
  type: string
  chain: string
  roadmap: string
  about: string
  projectTwitter: string
  projectWebSite: string
  mintPrice: string
  numberOfAssets: 3
  launchDate: string
  discordServer: string
  dropName: string
  email: string
  firstName: string
}
export const sendEmail = async (data: IEmailForm) => {
  const specificAxios = setupInterceptorsTo(axios.create())
  // const AXIOS_BASE_URL = process.env.REACT_APP_AXIOS_BASE_URL
  const AXIOS_BASE_URL = 'http://127.0.0.1:3002'
  const SENDER_EMAIL = 'applications@dropper.io'

  specificAxios
    .post(`${AXIOS_BASE_URL}/email`, { ...data })
    .then(async (res: any) => {
      const { data, status } = res
      if (status && data.status === 'success') {
        toast.success(`Email Sent to ${SENDER_EMAIL}`, { toastId: 'launchpad-emailer-success' })
        return true
      } else {
        toast.error(`Message failed to send`, { toastId: 'launchpad-emailer-fail' })
        return false
      }
    })
    .catch((e) => {
      console.log(e)
      toast.error(`Message failed to send`, { toastId: 'launchpad-emailer-fail' })
      return false
    })
}
