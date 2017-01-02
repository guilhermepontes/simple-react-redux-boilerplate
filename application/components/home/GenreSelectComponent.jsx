import React, { Component } from 'react'
import bemClassName from 'bem-classname'

class GenreSelectComponent extends Component {
  listGenres(genres) {
    return genres.map(genre => 
      <option key={genre.id} value={genre.id}>{genre.name}</option>
    )
  }

  showLoading(state) {
    return state ? '' : <span>Loading...</span>
  }

  render() {
    const { genres, genreFetched, genreFetching, genreError, onChange } = this.props;

    const loading   = this.showLoading(genreFetched)
    const genreList = this.listGenres(genres)
    
    const bem = bemClassName.bind(null, 'genre-select')
    const showOnFetch = genreFetched ? '' : 'hidden'

    return (
      <div className={bem()}>
        {loading}

        <div className={showOnFetch}>
          <h2 className={bem('title')}>Select the genre</h2>

          <select onChange={onChange} className={bem('select')}>
            <option defaultValue>Select movie</option>
            {genreList}
          </select>
        </div>
      </div>
    )
  }
}

export default GenreSelectComponent