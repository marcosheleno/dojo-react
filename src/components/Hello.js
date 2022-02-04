import React, { Component } from 'react'
import { useState } from 'react';

export default class Hello extends Component {
  name = "stranger"

  state = {
    name: "stranger"
  }

  componentDidMount = () => {
    if (this.props.name) {
      this.setState({
        name: this.props.name
      })
      this.name = this.props.name
    }

    return this.name
  }

  changeNameHandler = () => {
    if (this.name != 'stranger') {
      return this.name;
    }
    
    this.name = 'batata'
    this.setState({
      name: this.name
    })
    return this.name;
  }

  render() {
    return <h1 onClick={this.changeNameHandler} data-testid="welcome">Hello, {this.name}!</h1>;
  }
}