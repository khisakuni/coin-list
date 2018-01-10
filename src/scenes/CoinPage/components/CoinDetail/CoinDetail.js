import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../../../../components/Spinner'

const style = {
  container: {
    boxShadow: 'rgba(0,0,0,0.05) 0px 1px 60px',
    padding: '35px',
    textAlign: 'center'
  },
  linkContainer: {
    padding: '20px 0px'
  },
  image: {
    height: '200px'
  },
  h3: {
    display: 'inline',
  },
  symbolHeader: {
    color: '#c7c7c7',
  }
}

export default class CoinDetail extends Component {
  componentWillMount() {
    const { id, symbol } = this.props.match.params
    const { getCoinSnapshot, getCoinPrice } = this.props
    getCoinSnapshot(id)
    getCoinPrice(symbol)

  }

  render() {
    const { name, symbol, imageSrc, price, loading } = this.props
    return (
      <div>
        <div style={style.linkContainer}>
          <Link to="/"><i>&#8592; Back to all currencies</i></Link>
        </div>
        <div className="container" style={style.container}>
          {
            loading && (
              <div>
                <Spinner />
                <p>Loading...</p>
              </div>
            )
          }
          {
            !loading && (
              <div>
                <div className="grid-x">
                  <div className="medium-12 cell">
                    <img src={`https://www.cryptocompare.com${imageSrc}`} alt={name} style={style.image} />
                  </div>
                </div>
                <div className="grid-x">
                  <div className="medium-12 cell">
                    <h3 style={style.h2}>{name}</h3> &nbsp; <h3 style={{...style.h3, ...style.symbolHeader }}>({symbol})</h3>
                  </div>
                </div>
                <div className="grid-x">
                  <div className="medium-12 cell">
                    <h1>${price}</h1>
                  </div>
                </div>
              </div>
            )
          }
          
        </div>
      </div>
    )
  }
}