import React from 'react'
import './Input.css'
import { ErrorMessage } from '@hookform/error-message'

export const Input = ({ label, register, errors, name, placeholder, style, multiline, type }) => {
  const inputProps = {
    className: 'input',
    ...register(label),
    placeholder: placeholder,
    style: style,
    type: type,
  }

  return (
    <div className={'input-wrapper'}>
      <span className={'input-label'}>{name}</span>
      {multiline ? <textarea {...inputProps} /> : <input {...inputProps} />}
      <ErrorMessage errors={errors} name={label} render={({ message }) => <span className={'input-error'}>{message}</span>} />
    </div>
  )
}
