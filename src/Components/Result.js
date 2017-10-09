import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Result extends Component {

  render() {
    const {
      results,
    } = this.props

    return (
      <div>
        {results.object_number}
      </div>
    )
  }

}

Result.propTypes = {
  results: PropTypes.object,
}
