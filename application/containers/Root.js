import React, { Component } from 'react'
import bemClassName from 'bem-classname'

import Header from '../components/_partials/Header'

class Root extends Component {
  render() {
    return (
      <div className="app-root">
        <Header />

        {this.props.children}
      </div>
    )
  }
}

export default Root