import { applyMiddleware, createStore } from 'redux'

import thunk   from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducers from './reducers'

let middleware = applyMiddleware(promise(), thunk)

if(process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger');
  middleware = applyMiddleware(promise(), thunk, logger())
}

const store = createStore(reducers, middleware)

export default store