const fetchAPIService = async (url) => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    return { resolved: true, payload: data }
  } catch ({ message }) {
    return { resolved: false, payload: message }
  }
}

export default fetchAPIService
