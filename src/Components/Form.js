import React, { Component } from 'react'
import { Label } from './Label'
import { Input } from './Input'
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
    }

    this.onChangeQuery = this.onChangeQuery.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChangeQuery(event) {
    this.setState({
      query: event.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault()
    Service.fetch({
      query: this.state.query,
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
        <Label />
        <Input
          onChange={this.onChangeQuery}/>
        <Button/>
        <Results
          results={this.state.results}/>
      </form>
    )
  }

}
