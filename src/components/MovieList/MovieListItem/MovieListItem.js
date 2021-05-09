import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieListItem.module.css';

const MovieListItem = ({ movies, location }) => {
    return movies.map(movie => (
        <li key={movie.id} className={s.item}>
            <Link
                to={{
                    pathname: `movies/${movie.id}`,
                    state: {
                        from: location,
                    },
                }}
            >
                {movie.title}
            </Link>
        </li>
    ));
};

MovieListItem.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }),
};

export default withRouter(MovieListItem);
