const fetchAPIService = async (url, options) => {
  try {
    const method = options?.method || 'GET'
    const res = await fetch(url, { ...options, method })
    const data = await res.json()
    return { resolved: true, payload: data }
  } catch ({ message }) {
    return { resolved: false, payload: message }
  }
}

export default fetchAPIService
