import * as api from '../services/api/coin-list'
// Types
export const types = {
  REQUEST_COIN_LIST: 'REQUEST_COIN_LIST',
  REQUEST_COIN_LIST_SUCCESS: 'REQUEST_COIN_LIST_SUCCESS',
  REQUEST_COIN_LIST_FAILURE: 'REQUEST_COIN_LIST_FAILURE',
}

// Action Creators
export const actionCreators = {
  getCoinList,
  getCoinListSuccess,
  getCoinListFailure,
}

function getCoinList() {
  return function (dispatch) {
    dispatch(getCoinListRequest())
    return api.getCoinList()
      .then(
        response => dispatch(getCoinListSuccess(Object.values(response.Data))),
        error => dispatch(getCoinListFailure(error))
      )
  }
}

function getCoinListRequest() {
  return { type: types.REQUEST_COIN_LIST }
}

function getCoinListSuccess(payload) {
  return { type: types.REQUEST_COIN_LIST_SUCCESS, payload }
}

function getCoinListFailure(payload) {
  return { type: types.REQUEST_COIN_LIST_FAILURE, payload }
}

// Reducer
const initialState = {
  loading: false,
  error: null,
  coins: []
}
export default (state = initialState, { type, payload }) => {
  switch(type) {
    case types.REQUEST_COIN_LIST:
      return { ...state, loading: true }
    case types.REQUEST_COIN_LIST_SUCCESS:
      return { ...state, loading: false, coins: payload }
    case types.REQUEST_COIN_LIST_FAILURE:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}