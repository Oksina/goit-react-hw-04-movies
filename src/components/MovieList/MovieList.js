import React, { Component } from 'react';
import MovieListItem from './MovieListItem/MovieListItem';

class MovieList extends Component {
    render() {
        const { movies } = this.props;
        return (
            <ul>
                <MovieListItem movies={movies} />
            </ul>
        );
    }
}

export default MovieList;
