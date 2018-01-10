import { get } from '../http'

export function getCoinList() {
  const url = `${process.env.REACT_APP_COIN_LIST_API_DOMAIN}/api/data/coinlist/`
  return get(url)
} 

export default {
  getCoinList
}
