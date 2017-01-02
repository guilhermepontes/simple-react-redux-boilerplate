const initialState = {
  genres: [],
  fetching: false,
  fetched: false,
  error: null
}

const reducer = (state = initialState, action) => {
  let { type, payload } = action
  
  switch(type) {
    case 'FETCH_GENRES': {
      return { ...state, fetching: true, fetched: false }
    }

    case 'FETCH_GENRES_FULFILLED': {
      return { 
        ...state,
        fetched: true,
        fetching: false,
        genres: payload.genres
      }
    }

    case 'FETCH_GENRES_REJECTED': {
      return { ...state, fetching: false, error: payload }
    }

    default:
      return state
  }
}

export default reducer