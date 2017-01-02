import React, { Component } from 'react'
import bemClassName from 'bem-classname'
import _ from 'lodash'
import { IMAGE_ASSET_BASE } from '../../config'

class MovieItemComponent extends Component {
  render() {
    const movie = this.props.movie

    const title = movie.original_title
    const image = `${IMAGE_ASSET_BASE}/${movie.poster_path}`

    const bem = bemClassName.bind(null, 'movie-list')

    return (
      <div className={bem('item')}>
        <strong title={title} className={bem('name')}>{title}</strong>

        <img
          className={bem('image')}
          src={image}
          alt={title}
          title={title}
          width="180" />
      </div>
    )
  }
}

export default MovieItemComponent