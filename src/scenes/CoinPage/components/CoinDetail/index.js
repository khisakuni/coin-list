import { connect } from 'react-redux'
import CoinDetail from './CoinDetail'

import { actionCreators } from '../../../../reducers/selected-coin'

const mapStateToProps = state => state.selectedCoin

const mapDispatchToProps = {
  getCoinSnapshot: actionCreators.getCoinSnapShot,
  getCoinPrice: actionCreators.getCoinPrice,
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinDetail)