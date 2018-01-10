import { combineReducers } from 'redux'
import coinList from './coin-list'
import selectedCoin from './selected-coin'

export default combineReducers({ coinList, selectedCoin })