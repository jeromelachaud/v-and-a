import React from 'react'
import { Label } from './Label'
import PropTypes from 'prop-types'
import './SearchInputField.css'

export const SearchInputField = props => (
  <div>
    <Label
      htmlFor="SearchInputField"
      text="Search in the Victoria & Albert Museum"/>

    <input
      required
      size="80"
      type="search"
      aria-label="Search in the Victoria & Albert Museum"
      id="searchInPutField"
      className="search-input-field"
      placeholder="Search in the Victoria & Albert Museum"
      onChange={props.onChange}>
    </input>
  </div>

)

SearchInputField.propTypes = {
  onChange: PropTypes.func,
}
