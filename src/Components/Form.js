import React, { Component } from 'react'
import { SearchInputField } from './SearchInputField'
import { ImagesOption } from './ImagesOption'
import { DomainsOption } from './DomainsOption'
import { Button } from './Button'
import { Loader } from './Loader'
import Results from './Results'
import { Service } from '../Service'
import './Form.css'

export default class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      results: [],
      query: '',
      imagesOption: true,
      domainsOption: 'objectnamesearch',
    }

    this.onChangeQuery = this.onChangeQuery.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChangeImagesOption = this.onChangeImagesOption.bind(this)
    this.onChangeDomainsOption = this.onChangeDomainsOption.bind(this)
  }

  onChangeQuery(event) {
    this.setState({
      query: event.target.value,
    })
  }

  onChangeImagesOption(event) {
    this.setState({
      imagesOption: event.target.checked,
    })
  }

  onChangeDomainsOption(event) {
    this.setState({
      domainsOption: event.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault()
    this.setState({
      isLoading: true,
    })
    Service.fetch({
      query: this.state.query,
      imagesOption: this.state.imagesOption,
      domainsOption: this.state.domainsOption,
    })
      .then(res => {
        this.setState({
          isLoading: false,
          results: res.records,
        })
      })
  }

  render() {

    let resultsElement
    if (this.state.isLoading) {
      resultsElement = (<Loader />)
    } else {
      resultsElement = (
        <Results
          results={this.state.results}/>
      )
    }

    return (
      <form
        onSubmit={this.onSubmit}>
        <SearchInputField
          onChange={this.onChangeQuery}/>
        <div
          className="OptionsWrapper">
          <DomainsOption
            defaultValue={this.state.domainsOption}
            onChange={this.onChangeDomainsOption}/>
          <ImagesOption
            checked={this.state.imagesOption}
            onChange={this.onChangeImagesOption}/>
        </div>
        <Button/>
        {resultsElement}
      </form>
    )
  }

}
