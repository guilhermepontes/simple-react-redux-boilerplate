const initialState = {
  movies: [],
  fetching: false,
  fetched: false,
  error: null
}

const reducer = (state = initialState, action) => {
  let { type, payload } = action

  switch(type) {
    case 'FETCH_MOVIES_PENDING': {
      return {
        ...state,
        fetching: true,
        fetched: false
      }
    }

    case 'FETCH_MOVIES_FULFILLED': {
      return { 
        ...state,
        fetched: true,
        fetching: false,
        movies: payload.results
      }
    }

    case 'FETCH_MOVIES_REJECTED': {
      return { ...state, fetching: false, error: payload }
    }

    default:
      return state
  }
}

export default reducer