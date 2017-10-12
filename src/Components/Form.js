import React, { Component } from 'react'
import { SearchInputField } from './SearchInputField'
import { ImagesOption } from './ImagesOption'
import { DomainsOption } from './DomainsOption'
import { Button } from './Button'
import Results from './Results'
import { Service } from '../Service'

export default class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      results: [],
      query: '',
      imagesOption: true,
    }

    this.onChangeQuery = this.onChangeQuery.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChangeOption = this.onChangeOption.bind(this)
  }

  onChangeQuery(event) {
    this.setState({
      query: event.target.value,
    })
  }

  onChangeOption(event) {
    this.setState({
      imagesOption: event.target.checked,
    })
  }

  onSubmit(e) {
    e.preventDefault()
    Service.fetch({
      query: this.state.query,
      imagesOption: this.state.imagesOption,
    })
      .then(res => {
        this.setState({
          results: res.records,
        })
      })
  }

  render() {
    return (
      <form
        onSubmit={this.onSubmit}>
        <SearchInputField
          onChange={this.onChangeQuery}/>
        <DomainsOption />
        <ImagesOption
          checked={this.state.imagesOption}
          onChange={this.onChangeOption}/>
        <Button/>
        <Results
          results={this.state.results}/>
      </form>
    )
  }

}
