import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

export const Input = props => (

  <input
    aria-label="Search in the Victoria & Albert Museum"
    className="search-form-input-field"
    id="searchFormInPutField"
    onChange={props.onChange}
    placeholder="Search in the Victoria & Albert Museum"
    required
    size="80"
    type="search">
  </input>

)

Input.propTypes = {
  onChange: PropTypes.func,
}
