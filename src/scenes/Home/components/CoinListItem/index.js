import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const styles = {
  image: {
    height: '40px',
  },
  container: {
    cursor: 'pointer',
  },
}

class CoinListItem extends Component {
  render() {
    const { name, imageSrc, symbol, id } = this.props
    return (
      <li style={styles.container}>
        <Link to={`/${id}`} className="grid-x">
          <div className="medium-3 cell">
            <img src={`https://www.cryptocompare.com${imageSrc}`} style={styles.image} alt={name}/>
          </div>
          <div className="medium-6 cell">
            <p>{name} ({symbol})</p>
          </div>
        </Link>
      </li>
    )
  }
}  

export default CoinListItem