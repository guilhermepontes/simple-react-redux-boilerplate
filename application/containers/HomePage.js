import React, { Component } from 'react'
import { connect } from 'react-redux'

import GenreSelectComponent from '../components/home/GenreSelectComponent'
import MovieListComponent from '../components/home/MovieListComponent'

import { fetchGenres } from '../actions/genres'
import { fetchMoviesByGenre } from '../actions/movies'

@connect((store) => {
  return {
    genres: store.genres.genres,
    genreFetching: store.genres.fetching,
    genreFetched: store.genres.fetched,
    genreError: store.genres.error,

    movies: store.movies.movies,
    moviesFetching: store.movies.fetching,
    moviesFetched: store.movies.fetched,
    moviesError: store.movies.error
  }
})

class HomePage extends Component { 
  componentDidMount() {
    this.props.dispatch(fetchGenres())
  }

  loadMovies(e) {
    let id = e.target.value
    this.props.dispatch(fetchMoviesByGenre(id))
  }

  render() {
    return (
      <section className="home">
        <GenreSelectComponent {...this.props} onChange={this.loadMovies.bind(this)} />
        <MovieListComponent {...this.props} />
      </section>
    )
  }
}

export default HomePage