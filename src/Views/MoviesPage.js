import React, { Component } from 'react';
import Section from '../components/Section/Section';
import SearchForm from '../components/SearchBar/SearchBar';
import MovieList from '../components/MovieList/MovieList';
import { fetchSearchMovies } from '../services/MoviesApi.js';

class MoviesPage extends Component {
    state = {
        searchMovies: [],
        query: '',
    };

    componentDidMount() {
        //const search = this.props.location;
        const searchQuery = this.props.location.search;
        const query = searchQuery.slice(7);

        if (query) {
            this.setState({ query: query });
        }
    }
    async componentDidUpdate(prevProps, prevState) {
        const { query } = this.state;

        if (prevState.query !== query && query !== '') {
            const searchMovies = await fetchSearchMovies(query);
            this.setState({ searchMovies });
        }
    }

    handleSubmit = newQuery => {
        const { history, location } = this.props;

        this.setState({
            searchMovies: [],
            query: newQuery,
        });
        history.push({
            ...location,
            search: `?query=${newQuery}`,
        });
        this.setState({ searchMovies: [] });
    };

    render() {
        const { searchMovies: movies } = this.state;
        return (
            <Section>
                <SearchForm onSubmit={this.handleSubmit} />
                <MovieList movies={movies} />
            </Section>
        );
    }
}

export default MoviesPage;
