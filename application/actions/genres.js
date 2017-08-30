import 'whatwg-fetch'
import { API_URL, API_KEY } from '../config'
import types from '../constants/actionTypes'

const fetchGenres = () => {
  const api_endpoint = `${API_URL}/genre/movie/list?api_key=${API_KEY}`

  return {
    type: types.FETCH_GENRES,
    payload: new Promise((resolve, reject) => {
      fetch(api_endpoint).then(r => resolve(r.json())).catch(reject)
    })
  }
}

export { fetchGenres }
