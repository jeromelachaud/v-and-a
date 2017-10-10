import React from 'react'
import PropTypes from 'prop-types'
import './Label.css'

export const Label = props => {

  const {
    className,
    htmlFor,
    text,
  } = props

  return (
    <label
      className={className}
      htmlFor={htmlFor}>
      {text}
    </label>
  )

}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
}
