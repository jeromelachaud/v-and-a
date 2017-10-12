import React, { Component } from 'react'
import { SearchInputField } from './SearchInputField'
import { ImagesOption } from './ImagesOption'
import { DomainsOption } from './DomainsOption'
import { Button } from './Button'
import Results from './Results'
import { Service } from '../Service'
import './Form.css'

export default class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
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
    Service.fetch({
      query: this.state.query,
      imagesOption: this.state.imagesOption,
      domainsOption: this.state.domainsOption,
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
        <Results
          results={this.state.results}/>
      </form>
    )
  }

}
