import React, { Component } from 'react'
import { Label } from './Label'

class ImagesOption extends Component {

  render() {
    return (
      <div>
        <Label
          className="images-option-label"
          htmlFor="imagesOption"
          text='Only show results with images' />
        <input id="imagesOption" type="checkbox" />
      </div>
    )
  }

}

export default ImagesOption
