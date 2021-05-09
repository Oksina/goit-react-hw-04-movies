import React, { Component } from 'react';
import Section from '../../components/Section/Section';
import { fetchTrendingMovies } from '../../services/MoviesApi.js';
import MovieList from '../../components/MovieList/MovieList';

import s from '../../components/Section/Section';

class HomePage extends Component {
    state = {
        trendingMovies: [],
    };
    async componentDidMount() {
        fetchTrendingMovies(this.updateState);
    }

    updateState = value => {
        this.setState({ trendingMovies: value });
    };
    render() {
        const { trendingMovies } = this.state;
        return (
            <Section title="Trending today" className={s.section}>
                <MovieList movies={trendingMovies} />
            </Section>
        );
    }
}

export default HomePage;
