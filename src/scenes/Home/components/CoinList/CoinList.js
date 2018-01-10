import React, { Component } from 'react'
import CoinListItem from '../CoinListItem'

const styles = {
  list: {
    listStyle: 'none',
  },
}

export default class CoinList extends Component {
  componentWillMount() {
    this.props.getCoinList()
  }

  render() {
    return (
      <ul style={styles.list}>
        {this.props.coins.map(({ CoinName, ImageUrl, Symbol, Id }) => {
          return (
            <CoinListItem key={Id} id={Id} name={CoinName} symbol={Symbol} imageSrc={ImageUrl} />
          )
        })}
      </ul>
    )
  }
}