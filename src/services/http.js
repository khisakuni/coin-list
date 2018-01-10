const formatRequest = (url, { method, body } = { body: {} }) => {
  const params = {
    method: method,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Origin': 'http://localhost:3000'
    },
    body: JSON.stringify(body)
  }
  return new Request(url, params)
}

const methods = {
  GET: 'GET',
}

const handleResponse = (res) => {
  return res.json().then((json) => {
    if (!res.ok) {
      const error = { status: res.status, body: json }
      throw error
    }
    return json
  })
}

export const get = (url) => {
  const req = formatRequest(url, { method: methods.GET })
  return fetch(req).then(handleResponse)
}

export default {
  get,
}