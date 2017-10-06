import React, { Component } from 'react'
import './Form.css'

export default class SearchForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      results: [],
      query: '',
    }

    this.onChangeQuery = this.onChangeQuery.bind(this)
  }

  onChangeQuery(event) {
    this.setState({
      query: event.target.value,
    })
  }

  render() {
    debugger
    return (
      <div>
        <form
          onSubmit={this.onSubmit}>
          <div
            className="search-form">
            <label
              className="search-form-label"
              htmlFor="VandASearch">
              Search in the Victoria & Albert Museum
            </label>
            <input
              aria-label="Search in the Victoria & Albert Museum"
              className="search-form-input-field"
              id="searchFormInPutField"
              onChange={this.onChangeQuery}
              placeholder="Search in the Victoria & Albert Museum"
              required
              size="80"
              type="search">
            </input>
            <button
              className="search-form-button"
              id="searchFormButton"
              type="submit">
              Search!
            </button>
          </div>
        </form>
      </div>
    )
  }

}
