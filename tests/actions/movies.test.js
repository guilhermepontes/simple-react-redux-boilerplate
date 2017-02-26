import { fetchMovies } from '../../application/actions/movies'
import types from '../../application/constants/actionTypes'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import rpromise from 'redux-promise-middleware'

import { fetchMock, fetchMockReject } from '../mocks'
const context = describe

const middlewares = [ thunk, rpromise() ]
const mockStore = configureMockStore(middlewares)
const movieId = 28

context('Movies actions', () => {
  let store

  beforeEach(() => store = mockStore({}))
  afterAll(() => store = null)

  it('should return a FETCH_MOVIES action', () => {
    expect(fetchMovies(movieId).type).toBe(types.FETCH_MOVIES)
  })

  it('should dispatch FETCH_MOVIES_PENDING and FETCH_MOVIES_FULFILLED', () => {
    const movieObject = {
      id: movieId,
      movies: [1, 2, 3]
    }

    const expectedPayload = [ {
      type: types.FETCH_MOVIES_PENDING
    }, {
      type: types.FETCH_MOVIES_FULFILLED,
      payload: movieObject
    }]

    fetchMock(movieObject)

    return store.dispatch(fetchMovies(movieId)).then(() => {
      const actions = store.getActions()

      expect(actions.length).toBe(2)
      expect(actions).toEqual(expectedPayload)
    })
  })

  it('should dispatch GET_USER_REJECTED', () => {
    const errorResponse = {
      id: movieId,
      notWorkingDude: true
    }

    const expectedPayload = [{
      type: types.FETCH_MOVIES_PENDING
    }, {
      type: types.FETCH_MOVIES_REJECTED,
      payload: errorResponse,
      error: true
    }]

    fetchMockReject(errorResponse)

    return store.dispatch(fetchMovies(movieId)).catch(() => {
      const actions = store.getActions()

      expect(actions.length).toBe(2)
      expect(actions).toEqual(expectedPayload)
    })
  })
})