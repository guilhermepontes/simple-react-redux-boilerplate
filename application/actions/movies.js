import 'whatwg-fetch'
import { API_URL, API_KEY } from '../config'
import types from '../constants/actionTypes'

const fetchMoviesByGenre = (genreId) => {
  const apiUrl = API_URL
  const apiKey = API_KEY

  let api_endpoint = `${apiUrl}/genre/${genreId}/movies?api_key=${apiKey}&language=en-US`

  return {
    type: types.FETCH_MOVIES,
    payload: new Promise(resolve => {
      fetch(api_endpoint).then(response => {
        resolve(response.json())
      })
    })
  }
}

export { fetchMoviesByGenre }