import React, { Component } from 'react'
import CoinListItem from '../CoinListItem'
import Spinner from '../../../../components/Spinner'

const styles = {
  list: {
    listStyle: 'none',
  },
  container: {
    boxShadow: 'rgba(0,0,0,0.05) 0px 1px 60px',
    padding: '35px',
    textAlign: 'center',
    marginTop: '30px',
  },
}

export default class CoinList extends Component {
  componentWillMount() {
    this.props.getCoinList()
  }

  render() {
    const { coins, loading } = this.props
    return (
      <div style={styles.container}>
        <ul style={styles.list}>
          {
            loading && (
              <div>
                <Spinner />
                <p>Loading...</p>
              </div>
            )
          }
          {!loading && coins.slice(0, 10).map(({ CoinName, ImageUrl, Symbol, Id }) => {
            return (
              <CoinListItem key={Id} id={Id} name={CoinName} symbol={Symbol} imageSrc={ImageUrl} />
            )
          })}
        </ul>
      </div>
    )
  }
}