import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image } from './Image'
import './Result.css'

export default class Result extends Component {

  render() {
    const {
      results: {
        title,
        artist,
        date_text,
        location,
        object,
        primary_image_id: primaryImageId,
      },
    } = this.props

    const displayedProps = Object.assign({}, {
      title,
      artist,
      date_text,
      location,
      object,
    })

    const titleElement = Object.keys(displayedProps).map(key => {
      if (displayedProps[key] !== '') {
        return (
          <p
            key={key}>
            {key}: {displayedProps[key]}
          </p>
        )
      }
    })

    return (
      <div
        className="result">
        <figure
          className="result__figure">
          <Image
            imageId={primaryImageId}/>
        </figure>
        <div
          className="result__content">
          {titleElement}
        </div>
      </div>
    )
  }

}

Result.propTypes = {
  results: PropTypes.object,
}
