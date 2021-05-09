import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import routes from './routes';
import './index.css';
import './App.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const HomePage = lazy(() =>
    import('./Views/HomePage/HomePage' /*webpackChunkName "home-page"*/),
);
const MoviesPage = lazy(() =>
    import('./Views/MoviesPage' /*webpackChunkName "movies-page"*/),
);
const MovieDetailsPage = lazy(() =>
    import('./Views/MovieDetailsPage' /*webpackChunkName "detail-page"*/),
);

const App = () => {
    return (
        <div className="App">
            <AppBar />
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
                <Switch>
                    <Route exact path={routes.home} component={HomePage} />
                    <Route exact path={routes.movies} component={MoviesPage} />
                    <Route
                        path={routes.movieDetails}
                        component={MovieDetailsPage}
                    />
                    <Route component={HomePage} />
                </Switch>
            </Suspense>
        </div>
    );
};

export default App;
