import * as api from '../services/api/coin-snapshot'

// Types
export const types = {
  REQUEST_COIN_SNAPSHOT: 'REQUEST_COIN_SNAPSHOT',
  REQUEST_COIN_SNAPSHOT_SUCCESS: 'REQUEST_COIN_SNAPSHOT_SUCCESS',
  REQUEST_COIN_SNAPSHOT_FAILURE: 'REQUEST_COIN_SNAPSHOT_FAILURE',
}

// Action Creators
export const actionCreators = {
  getCoinSnapShot,
  getCoinSnapShotRequest,
  getCoinSnapShotSuccess,
  getCoinSnapShotFailure,
}

function getCoinSnapShot(id) {
  return function(dispatch) {
    dispatch(getCoinSnapShotRequest(id))
    return api.getCoinSnapshot(id)
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

function getCoinSnapShotRequest(id) {
  return { type: types.REQUEST_COIN_SNAPSHOT, payload: id }
}

function getCoinSnapShotSuccess(payload) {
  return { type: types.REQUEST_COIN_SNAPSHOT_SUCCESS, payload }
}

function getCoinSnapShotFailure(payload) {
  return { type: types.REQUEST_COIN_SNAPSHOT_FAILURE, error: payload }
}

// Reducer
const initialState = {
  loading: false,
  error: null,
  id: '',
  name: 'Ethereum',
  symbol: 'ETH',
  imageSrc: '/media/20646/eth_logo.png',
}
export default (state = initialState, { type, payload }) => {
  switch(type) {
    case types.REQUEST_COIN_SNAPSHOT:
      return { ...state, loading: true, id: payload }
    case types.REQUEST_COIN_SNAPSHOT_SUCCESS:
      const { name, symbol, imageSrc } = payload
      return { ...state, name, symbol, imageSrc }
    case types.REQUEST_COIN_SNAPSHOT_FAILURE:
      return { ...state, error: payload, loading: false }
    default:
      return state
  }
}