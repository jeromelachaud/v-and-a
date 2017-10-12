import React from 'react'
import { Label } from './Label'
import PropTypes from 'prop-types'
// import { defaultState } from '../defaultState'

export const DomainsOption = props => {

  return (
    <div>
      <Label
        className="domains-option-label"
        htmlFor="domainsOption"
        text='Choose the search domain' />
      <select
        id="domainsOption"
        onChange={props.onChange} >
        <option value=""></option>
      </select>
    </div>
  )
}

DomainsOption.propTypes = {
  // Change it to required
  onChange: PropTypes.func,
}
