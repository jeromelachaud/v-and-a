import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Label } from './Label'

class ImagesOption extends Component {

  render() {
    return (
      <div>
        <Label
          className="images-option-label"
          htmlFor="imagesOption"
          text='Only show results with images' />
        <input
          id="imagesOption"
          type="checkbox"
          onChange={this.props.onChange}/>
      </div>
    )
  }

}

export default ImagesOption
ImagesOption.propTypes = {
  onChange: PropTypes.func,
}
