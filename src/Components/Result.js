import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image } from './Image'
import './Result.css'

export default class Result extends Component {

  render() {
    const {
      results,
    } = this.props

    return (
      <div
        className="result">
        <figure
          className="result__figure">
          <Image
            imageId={results.primary_image_id}/>
        </figure>
        <div
          className="result__content">
          <div>
          </div>
        </div>
      </div>
    )
  }

}

Result.propTypes = {
  results: PropTypes.object,
}
