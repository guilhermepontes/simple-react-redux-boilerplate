import 'whatwg-fetch'
import { API_URL, API_KEY } from '../config'
import types from '../constants/actionTypes'

const fetchMoviesByGenre = (genreId) => {
  const api_endpoint = `${API_URL}/genre/${genreId}/movies?api_key=${API_KEY}&language=en-US`

  return {
    type: types.FETCH_MOVIES,
    payload: new Promise((resolve, reject) => {
      fetch(api_endpoint).then(r => resolve(r.json())).catch(reject)
    })
  }
}

export { fetchMoviesByGenre }
