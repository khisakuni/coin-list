import React, { Component } from 'react'

export default class CoinList extends Component {
  componentWillMount() {
    this.props.getCoinList()
  }

  render() {
    return (
      <ul>
        <li>hey there</li>
      </ul>
    )
  }
}