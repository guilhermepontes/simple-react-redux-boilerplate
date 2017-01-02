import React, { Component } from 'react'
import { Link } from 'react-router'

class NavLink extends Component {
  render() {
    const activeClass = 'header__nav-link--active'

    return <Link {...this.props} activeClassName={activeClass} />
  }
}

export default NavLink