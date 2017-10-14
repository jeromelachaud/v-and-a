import React from 'react'
import { Label } from './Label'
import PropTypes from 'prop-types'
import { domainsOption } from '../constants/domains-option'
import './DomainsOption.css'

export const DomainsOption = props => {

  const optionElement = domainsOption.map((option, i) => {
    return (
      <option
        key={i}
        value={option.value}>
        {option.text}
      </option>
    )
  })

  return (
    <div
      className="domains-option-select-wraper">
      <Label
        className="domains-option-label"
        htmlFor="domainsOption"
        text='Search domain' />
      <select
        required
        id="domainsOption"
        className="domains-option-select"
        defaultValue={props.value}
        onChange={props.onChange}>
        {optionElement}
      </select>
    </div>
  )
}

DomainsOption.propTypes = {
  // Change it to required
  onChange: PropTypes.func,
  value: PropTypes.string,
}
