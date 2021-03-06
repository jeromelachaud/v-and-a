import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image } from './Image'
import replaceUnderscoreWithSpace from '../helpers/replace-underscore-with-space'
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
      if (displayedProps[key] !== '' && displayedProps[key] !== undefined) {
        return (
          <p
            key={key}>
            <span
              style={{textTransform: 'capitalize'}}>
              {replaceUnderscoreWithSpace(key)}
            </span>: {displayedProps[key]}
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
