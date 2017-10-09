import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Result from './Result'

export default class Results extends Component {

  render() {
    const {
      results,
    } = this.props

    const resultsElement = results.map((results, i) => (
      <Result
        key={i}
        results={results.fields} />
    ))

    return (
      <div>
        {resultsElement}
      </div>
    )
  }

}

Results.propTypes = {
  results: PropTypes.array.isRequired,
}
