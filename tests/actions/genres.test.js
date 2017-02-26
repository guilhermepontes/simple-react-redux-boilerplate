import { fetchGenres } from '../../application/actions/genres'
import types from '../../application/constants/actionTypes'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import rpromise from 'redux-promise-middleware'

import { fetchMock, fetchMockReject } from '../mocks'
const context = describe

const middlewares = [ thunk, rpromise() ]
const mockStore = configureMockStore(middlewares)
const genreId = 28

context('Genre actions', () => {
  let store

  beforeEach(() => store = mockStore({}))
  afterAll(() => store = null)

  it('should return a FETCH_GENRES action', () => {
    expect(fetchGenres(genreId).type).toBe(types.FETCH_GENRES)
  })

  it('should dispatch FETCH_GENRES_PENDING and FETCH_GENRES_FULFILLED', () => {
    const genreObject = {
      id: genreId,
      movies: [1, 2, 3]
    }

    const expectedPayload = [ {
      type: types.FETCH_GENRES_PENDING
    }, {
      type: types.FETCH_GENRES_FULFILLED,
      payload: genreObject
    }]

    fetchMock(genreObject)

    return store.dispatch(fetchGenres(genreId)).then(() => {
      const actions = store.getActions()

      expect(actions.length).toBe(2)
      expect(actions).toEqual(expectedPayload)
    })
  })

  it('should dispatch FETCH_GENRES_REJECTED', () => {
    const errorResponse = {
      id: genreId,
      notWorkingDude: true
    }

    const expectedPayload = [{
      type: types.FETCH_GENRES_PENDING
    }, {
      type: types.FETCH_GENRES_REJECTED,
      payload: errorResponse,
      error: true
    }]

    fetchMockReject(errorResponse)

    return store.dispatch(fetchGenres(genreId)).catch(() => {
      const actions = store.getActions()

      expect(actions.length).toBe(2)
      expect(actions).toEqual(expectedPayload)
    })
  })
})