import React from 'react'
import PropTypes from 'prop-types'
import './Label.css'

export const Label = props => (

  <label
    className="search-form-label"
    htmlFor={props.htmlFor}>
    {props.text}
  </label>

)

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
