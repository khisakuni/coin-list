import { get } from '../http'

export function getCoinPrice(fsym, tsym) {
  const url = `${process.env.REACT_APP_COIN_API_DOMAIN}/data/price?fsym=${fsym}&tsyms=${tsym}`
  return get(url)
}