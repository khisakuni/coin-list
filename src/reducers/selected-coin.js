import * as snapShotApi from '../services/api/coin-snapshot'
import * as priceApi from '../services/api/coin-price'

// Types
export const types = {
  REQUEST_COIN_SNAPSHOT: 'REQUEST_COIN_SNAPSHOT',
  REQUEST_COIN_SNAPSHOT_SUCCESS: 'REQUEST_COIN_SNAPSHOT_SUCCESS',
  REQUEST_COIN_SNAPSHOT_FAILURE: 'REQUEST_COIN_SNAPSHOT_FAILURE',

  REQUEST_COIN_PRICE: 'REQUEST_COIN_PRICE',
  REQUEST_COIN_PRICE_SUCCESS: 'REQUEST_COIN_PRICE_SUCCESS',
  REQUEST_COIN_PRICE_FAILURE: 'REQUEST_COIN_PRICE_FAILURE',
}

// Action Creators
export const actionCreators = {
  getCoinSnapShot,
  getCoinSnapShotRequest,
  getCoinSnapShotSuccess,
  getCoinSnapShotFailure,
  getCoinPrice,
  getCoinPriceRequest,
  getCoinPriceSuccess,
  getCoinPriceFailure,
}

function getCoinSnapShot(id) {
  return function(dispatch) {
    dispatch(getCoinSnapShotRequest())
    return snapShotApi.getCoinSnapshot(id)
      .then(
        response => {
          const data = response.Data.General
          const payload = {
            name: data.Name,
            symbol: data.Symbol,
            imageSrc: data.ImageUrl
          }
          return dispatch(getCoinSnapShotSuccess(payload))
        },
        error => dispatch(getCoinSnapShotFailure(error))
      )
  }
}

function getCoinSnapShotRequest() {
  return { type: types.REQUEST_COIN_SNAPSHOT }
}

function getCoinSnapShotSuccess(payload) {
  return { type: types.REQUEST_COIN_SNAPSHOT_SUCCESS, payload }
}

function getCoinSnapShotFailure(payload) {
  return { type: types.REQUEST_COIN_SNAPSHOT_FAILURE, error: payload }
}

function getCoinPrice(symbol) {
  return function(dispatch) {
    dispatch(getCoinPriceRequest())
    return priceApi.getCoinPrice(symbol, 'USD')
      .then(
        response => dispatch(getCoinPriceSuccess(response.USD)),
        error => dispatch(getCoinPriceFailure(error))
      )
  }
}

function getCoinPriceRequest() {
  return { type: types.REQUEST_COIN_PRICE }
}

function getCoinPriceSuccess(payload) {
  return { type: types.REQUEST_COIN_PRICE_SUCCESS, payload }
}

function getCoinPriceFailure(payload) {
  return { type: types.REQUEST_COIN_PRICE_FAILURE, payload }
}

// Reducer
const initialState = {
  loading: false,
  error: null,
  id: '',
  name: '',
  symbol: '',
  price: '',
  imageSrc: '',
}
export default (state = initialState, { type, payload }) => {
  switch(type) {
    case types.REQUEST_COIN_PRICE:
    case types.REQUEST_COIN_SNAPSHOT:
      return { ...state, loading: true }
    case types.REQUEST_COIN_SNAPSHOT_SUCCESS:
      const { name, symbol, imageSrc } = payload
      return { ...state, name, symbol, imageSrc }
    case types.REQUEST_COIN_SNAPSHOT_FAILURE:
      return { ...state, error: payload, loading: false }
    case types.REQUEST_COIN_PRICE_SUCCESS:
      return { ...state, loading: false, price: payload }
    case types.REQUEST_COIN_PRICE_FAILURE:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}