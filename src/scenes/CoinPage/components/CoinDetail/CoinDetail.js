import React, { Component } from 'react'

const style = {
  image: {
    height: '100px'
  }
}

export default class CoinDetail extends Component {
  componentWillMount() {
    const { id, symbol } = this.props.match.params
    // TODO: enable this
    const { getCoinSnapshot, getCoinPrice } = this.props
    console.log(this.props)
    // getCoinSnapshot(id)
    getCoinPrice(symbol)

  }

  render() {
    console.log(this.props)
    const { name, symbol, imageSrc, price } = this.props
    return (
      <div>
        <div className="grid-x">
          <div className="medium-2 cell">
            <img src={`https://www.cryptocompare.com${imageSrc}`} alt={name} style={style.image} />
          </div>
          <div className="medium-6 cell">
            <h2>{name} ({symbol})</h2>
          </div>
          <div className="medium-4 cell">
            <h2>${price}</h2>
          </div>
        </div>
      </div>
    )
  }
}