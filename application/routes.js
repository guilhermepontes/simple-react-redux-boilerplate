import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Root from './containers/Root'
import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'
import NotFoundPage from './containers/NotFoundPage'

const routes = (
  <Route path="/simple-react-redux-boilerplate" component={Root}>
    <IndexRoute component={HomePage}/>
    <Route path="/about" component={AboutPage} />

    <Route path="*" component={NotFoundPage} />
  </Route>
)

export default routes