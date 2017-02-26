import types from '../constants/actionTypes'

const initialState = {
  genres: [],
  fetching: false,
  fetched: false,
  error: null
}

const reducer = (state = initialState, action) => {
  let { type, payload } = action

  switch(type) {
    case types.FETCH_GENRES_PENDING: {
      return { ...state, fetching: true, fetched: false }
    }

    case types.FETCH_GENRES_FULFILLED: {
      return {
        ...state,
        fetched: true,
        fetching: false,
        genres: payload.genres
      }
    }

    case types.FETCH_GENRES_REJECTED: {
      return { ...state, fetching: false, error: payload }
    }

    default:
      return state
  }
}

export default reducer