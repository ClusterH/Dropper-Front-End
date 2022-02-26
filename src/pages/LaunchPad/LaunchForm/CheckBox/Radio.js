import React from 'react'
import './Radio.css'

const RadioButton = ({ value, register, checkboxName }) => {
  return (
    <label htmlFor={value} className={'radio-button'}>
      <input type="radio" name={value} id={value} value={value} {...register(checkboxName)} />
      <span className={'checkmark'} />
    </label>
  )
}

export const Radio = ({ register, value, checkboxName }) => {
  return (
    <div className={'radio'}>
      <div className={'radio-wrapper'}>
        <div className={'radio-title-group'}>
          <span className={'radio-gradient'} />
          <span className={'radio-title'}>{value}</span>
        </div>
        <RadioButton checkboxName={checkboxName} value={value} register={register} />
      </div>
    </div>
  )
}
