import React, { Component } from 'react'

const style = {
  image: {
    height: '100px'
  }
}

export default class CoinDetail extends Component {
  componentWillMount() {
    const id = this.props.match.params.symbol
    // TODO: enable this
    // this.props.getCoinSnapshot(id)
  }

  render() {
    console.log(this.props)
    const { name, symbol, imageSrc } = this.props
    return (
      <div className="grid-x">
        <div className="4">
          <img src={`https://www.cryptocompare.com${imageSrc}`} alt={name} style={style.image} />
        </div>
        <div className="8">
          <h2>{name} ({symbol})</h2>
        </div>
      </div>
    )
  }
}