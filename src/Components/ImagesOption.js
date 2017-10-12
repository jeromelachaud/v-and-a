import React from 'react'
import PropTypes from 'prop-types'
import { Label } from './Label'

export const ImagesOption = props => {
  return (
    <div>
      <Label
        className="images-option-label"
        htmlFor="imagesOption"
        text='Only show results with images' />
      <input
        id="imagesOption"
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}/>
    </div>
  )
}

ImagesOption.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
}
