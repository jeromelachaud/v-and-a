import React from 'react'
import { Label } from './Label'
import PropTypes from 'prop-types'
import './Input.css'

export const SearchInputField = props => (
  <div>
    <Label
      htmlFor="searchFormInPutField"
      text="Search in the Victoria & Albert Museum"/>

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
  </div>

)

SearchInputField.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.string.isRequired,
}
