import { get } from '../http'

export function getCoinSnapshot(id) {
  const url = `${process.env.REACT_APP_COIN_LIST_API_DOMAIN}/api/data/coinsnapshotfullbyid?id=${id}`
  return get(url)
}