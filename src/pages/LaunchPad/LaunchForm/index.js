import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Formik } from 'formik'
import './LaunchForm.css'
import { Input } from './Input/Input'
import { schema } from './validateSchema'
import { Radio } from './CheckBox/Radio'
import { isMobile } from 'react-device-detect'
import { toast } from 'react-toastify'

const INTIAL_VALUES = {
  firstName: '',
  email: '',
  dropName: '',
  discordServer: '',
  launchDate: '',
  numberOfAssets: '',
  mintPrice: '',
  projectWebSite: '',
  projectTwitter: '',
  about: '',
  roadmap: '',
  chain: '',
  type: '',
}

const LaunchForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: INTIAL_VALUES,
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    fetch(`${process.env.NODE_ENV === 'production' ? 'https://api.dropper.io' : 'http://localhost:3001'}/email/collectListingRequest`, {
      body: JSON.stringify({
        from: data.email,
        formData: data,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then(() => {
        reset(INTIAL_VALUES)
        toast.success('Information submitted, we will be in touch shortly!')
      })
      .catch((e) => {
        toast.error('Error occurred while submitting, try again!')
      })
  }

  return (
    <div className={'launch'}>
      <div className={'launch-wrapper'}>
        <div className={'launch-title'} style={{ fontSize: isMobile ? '6.4vmax' : '4.2vmax' }}>
          Launch on Dropper
        </div>
        <Formik onSubmit={handleSubmit(onSubmit)} initialValues={INTIAL_VALUES}>
          {(props) => (
            <form onSubmit={props.handleSubmit} autoComplete={'off'}>
              <div className={'launch-subtitle'} style={{ fontSize: isMobile ? '3.4vmax' : '1.8vmax' }}>
                Contact Details
              </div>
              <Input name={'First Name'} label={'firstName'} value={props.values.firstName} register={register} errors={errors} />
              <Input
                name={'Email address'}
                label={'email'}
                value={props.values.email}
                placeholder={'example@example.com'}
                register={register}
                errors={errors}
              />
              <div className={'launch-subtitle'} style={{ fontSize: isMobile ? '3.4vmax' : '1.8vmax' }}>
                Drop Details
              </div>
              <Input name={'Name of your drop'} label={'dropName'} value={props.values.dropName} register={register} errors={errors} />
              <Input
                name={'Discord Server'}
                label={'discordServer'}
                placeholder={'https://discord.com'}
                value={props.values.discordServer}
                register={register}
                errors={errors}
              />
              <div className={'launch-inputs-row launch-inputs-row-wrapper'}>
                <Input
                  name={'Launch Date'}
                  label={'launchDate'}
                  register={register}
                  type={'date'}
                  value={props.values.launchDate}
                  errors={errors}
                  className={'launch-input-date'}
                />
                <Input
                  name={'Number of assets'}
                  label={'numberOfAssets'}
                  value={props.values.numberOfAssets}
                  register={register}
                  errors={errors}
                />
              </div>

              <Input name={'Mint Price'} label={'mintPrice'} value={props.values.mintPrice} register={register} errors={errors} />

              <Input
                name={'Project Website'}
                label={'projectWebSite'}
                placeholder={'https://example.com'}
                value={props.values.projectWebSite}
                register={register}
                errors={errors}
              />

              <Input
                name={'Project Twitter'}
                label={'projectTwitter'}
                placeholder={'https://twitter.com'}
                value={props.values.projectTwitter}
                register={register}
                errors={errors}
              />

              <Input
                name={'Tell us about your project '}
                label={'about'}
                value={props.values.about}
                register={register}
                errors={errors}
                style={{ height: 'auto' }}
                multiline={true}
              />

              <Input
                name={'Roadmap/Utility Offering '}
                label={'roadmap'}
                value={props.values.roadmap}
                register={register}
                errors={errors}
                style={{ height: 'auto' }}
                multiline={true}
              />

              <div className={'launch-subtitle'} style={{ fontSize: isMobile ? '3.4vmax' : '1.8vmax' }}>
                Choose your Chain
              </div>
              <div className={'launch-radio-wrapper'}>
                <div className={'launch-inputs-row'} style={{ marginBottom: '32px', flexWrap: 'wrap' }}>
                  <Radio checkboxName={'chain'} value={'Ethereum'} register={register} />
                  <Radio checkboxName={'chain'} value={'Polygon'} register={register} />
                </div>
                <div className={'launch-inputs-row'} style={{ flexWrap: 'wrap' }}>
                  <Radio checkboxName={'chain'} value={'Solana'} register={register} />
                  <Radio checkboxName={'chain'} value={'Hedera'} register={register} />
                </div>
              </div>
              <div className={'launch-subtitle'} style={{ fontSize: isMobile ? '3.4vmax' : '1.8vmax', marginTop: '50px' }}>
                Type of Drop
              </div>
              <div className={'launch-radio-wrapper'}>
                <div className={'launch-inputs-row'} style={{ flexWrap: 'wrap', marginBottom: '60px' }}>
                  <Radio checkboxName={'type'} value={'Packs of NFTs'} register={register} />
                  <Radio checkboxName={'type'} value={'Randomized'} register={register} />
                </div>
              </div>
              <div className={'launch-submit-button'}>
                <input type="submit" />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default LaunchForm
