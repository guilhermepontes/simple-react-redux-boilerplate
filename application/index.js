import styles from './stylesheets/main.scss'

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import routes from './routes'
import store from './store'

const appRoot = document.getElementById('root') 
const history = browserHistory

render((
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
), appRoot)