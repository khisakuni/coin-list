import { connect } from 'react-redux'
import CoinList from './CoinList'

import { actionCreators } from '../../../../reducers/coin-list'

const mapStateToProps = state => state.coinList

const mapDispatchToProps = {
  getCoinList: actionCreators.getCoinList,
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinList)