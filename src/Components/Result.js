import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image } from './Image'

export default class Result extends Component {

  render() {
    const {
      results,
    } = this.props

    return (
      <div>
        <Image
          imageId={results.primary_image_id}/>
        {results.object_number}
      </div>
    )
  }

}

Result.propTypes = {
  results: PropTypes.object,
}
