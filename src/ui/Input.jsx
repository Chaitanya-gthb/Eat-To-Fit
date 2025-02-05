/* eslint-disable react/prop-types */
import React from 'react'

const Input = ({
    type = "",
    placeholder = "",
    className = "",
    ...props
}) => {
  return (
    <input type={type} placeholder={placeholder} className={className} {...props} />
  )
}

export default Input