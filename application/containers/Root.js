import React, { Component } from 'react'
import bemClassName from 'bem-classname' 
import NavLink from '../components/_partials/NavLink'

class Root extends Component {
  render() {
    const bem = bemClassName.bind(null, 'header')

    return (
      <div className="app-root">
        <header role="nav" className={bem()}>
          <h1 className={bem('title')}>Movies</h1>

          <ul className={bem('nav')}>
            <li className={bem('nav-item')}>
              <NavLink className={bem('nav-link')} to="/" onlyActiveOnIndex>Home</NavLink>
            </li>

            <li className={bem('nav-item')}>
              <NavLink className={bem('nav-link')} to="/about">About</NavLink>
            </li>

            <li className={bem('nav-item')}>
              <NavLink className={bem('nav-link')} to="/404">404</NavLink>
            </li>
          </ul>
        </header>

        {this.props.children}
      </div>
    )
  }
}

export default Root