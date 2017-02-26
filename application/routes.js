import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Root from './containers/Root'
import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'
import NotFoundPage from './containers/NotFoundPage'

const mainPath = (process.env.NODE_ENV !== 'production')
  ? '/'
  : '/simple-react-redux-boilerplate'

const routes = (
  <Route path={mainPath} component={Root}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
)

export default routes