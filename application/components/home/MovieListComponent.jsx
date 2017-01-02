import React, { Component } from 'react'
import bemClassName from 'bem-classname'
import _ from 'lodash'

import MovieItem from './MovieItemComponent'

class MovieListComponent extends Component {
  listMovies(movies) {
    if(_.isEmpty(movies)) return null

    movies = movies.slice(0, 5)

    return movies.map((movie, index) => {
      return <MovieItem key={index} movie={movie} />
    })
  }

  showLoading(state) {
    return state ? <span>Loading...</span> : ''
  }

  render() {
    const { 
      movies,
      moviesFetched,
      moviesFetching,
      moviesError
    } = this.props;

    const bem = bemClassName.bind(null, 'movie-list')

    const componentRequested = _.isEmpty(movies) && !moviesFetching
    const showComponent = componentRequested ? 'hidden' : ''

    const loading   = this.showLoading(!moviesFetched && moviesFetching)
    const movieList = this.listMovies(movies)

    return (
      <div className={showComponent}> 
        <div className={bem()}>
          <h2 className={bem('title')}>Movie List</h2>

          {movieList}
        </div>
      </div>
    )
  }
}

export default MovieListComponent