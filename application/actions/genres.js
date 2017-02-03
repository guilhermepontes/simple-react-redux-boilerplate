import 'whatwg-fetch'
import { API_URL, API_KEY } from '../config'

const fetchGenres = () => {
  const apiUrl = API_URL
  const apiKey = API_KEY

  let api_endpoint = `${apiUrl}/genre/movie/list?api_key=${apiKey}`

  return {
    type: 'FETCH_GENRES',
    payload: new Promise(resolve => {
      fetch(api_endpoint).then(response => {
        resolve(response.json())
      })
    })
  }
}

export { fetchGenres }