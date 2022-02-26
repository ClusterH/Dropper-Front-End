import * as yup from 'yup'

export const schema = yup
  .object({
    firstName: yup.string().required('Please enter your name'),
    email: yup.string().email('It is not a valid email').required('Please enter your email'),
    dropName: yup.string().required('Please enter name of your drop'),
    discordServer: yup.string().url('This is not a url').required('Please paste discord server link'),
    launchDate: yup.string().required('This field is required'),
    numberOfAssets: yup.number().typeError('Invalid number').required('Please enter number of assets'),
    mintPrice: yup.string().required('Please enter mint price'),
    projectWebSite: yup.string().url('This is not a url').required('Please paste website link'),
    projectTwitter: yup.string().url('This is not a url').required('Please paste twitter link'),
    about: yup.string().required('Please tell us about your drop'),
    roadmap: yup.string().required('Please provide a roadmap'),
    chain: yup.string().required('Please select one of chain'),
    type: yup.string().required('Please select one of type'),
  })
  .required()
