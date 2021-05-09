import React, { Component, Suspense, lazy } from 'react';
import {
    fetchMovieDetails,
    fetchCast,
    fetchReviews,
} from '../services/MoviesApi';
import Section from '../components/Section/Section';
import MovieCard from '../components/MovieList/MovieCard/MovieCard';
import AdditionalInfo from '../components/AdditionalInfo/AdditionalInfo';
import { Route } from 'react-router-dom';
import BtnBack from '../components/BtnBack/BtnBack';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Cast = lazy(() =>
    import('../components/Cast/Cast' /*webpackChunkName "cast-section"*/),
);
const Reviews = lazy(() =>
    import(
        '../components/Reviews/Reviews' /*webpackChunkName "reviews-section"*/
    ),
);

class MovieDetailsPage extends Component {
    state = {
        movieDetails: '',
        cast: [],
        reviews: [],
    };

    async componentDidMount() {
        const { movieId } = this.props.match.params;

        const movieDetails = await fetchMovieDetails(movieId);
        const cast = await fetchCast(movieId);
        const reviews = await fetchReviews(movieId);

        this.setState({ movieDetails, cast, reviews });
    }

    render() {
        const { movieDetails, cast, reviews } = this.state;
        const { path, url } = this.props.match;
        const { location, history } = this.props;

        return (
            <Section>
                <BtnBack location={location} history={history} />
                <MovieCard movie={movieDetails} />
                <AdditionalInfo url={url} location={location} />

                <Suspense
                    fallback={
                        <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={50}
                            width={50}
                            timeout={3000}
                            className="loader"
                        />
                    }
                >
                    <Route
                        path={`${path}/cast`}
                        render={props => <Cast {...props} cast={cast} />}
                    />

                    <Route
                        path={`${path}/reviews`}
                        render={props =>
                            reviews.length > 0 ? (
                                <Reviews {...props} reviews={reviews} />
                            ) : (
                                <p>We don't have any reviews for this movie.</p>
                            )
                        }
                    />
                </Suspense>
            </Section>
        );
    }
}

export default MovieDetailsPage;
