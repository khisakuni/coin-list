import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CoinListItem.css'

const styles = {
  image: {
    height: '40px',
  },
  container: {
    cursor: 'pointer',
    padding: '30px 0px',
  },
  h4: {
    display: 'inline',
  },
  nameHeader: {
    color: '#373737',
  },
  symbolHeader: {
    color: '#c7c7c7',
  }
}

class CoinListItem extends Component {
  render() {
    const { name, imageSrc, symbol, id } = this.props
    return (
      <li style={styles.container} className="coin-list-item-container">
        <Link to={`/${id}/${symbol}`} className="grid-x">
          <div className="medium-3 cell">
            <img src={`https://www.cryptocompare.com${imageSrc}`} style={styles.image} alt={name}/>
          </div>
          <div className="medium-6 cell">
            <h4 style={{ ...styles.h4, ...styles.nameHeader }}>{name}</h4> &nbsp; <h4 style={{ ...styles.h4, ...styles.symbolHeader }}>({symbol})</h4>
          </div>
        </Link>
      </li>
    )
  }
}  

export default CoinListItem