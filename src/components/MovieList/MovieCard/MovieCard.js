import React from 'react';
import PropTypes from 'prop-types';
import s from './MovieCard.module.css';
import defaultImg from './defaultImg.jpg';

const MovieCard = ({ movie }) => {
    const { title, overview, poster_path, vote_average } = movie;
    return (
        <div className={s.main}>
            <img
                src={
                    poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : defaultImg
                }
                alt={title}
                width="360"
                className={s.img}
            />
            <div className={s.context}>
                <h1 className={s.title}>{title}</h1>
                <p className={s.text}>
                    <span className={s.span}>Votes:</span> {vote_average}
                </p>
                <h2>Overview</h2>
                <p className={s.text}>{overview}</p>
            </div>
        </div>
    );
};

MovieCard.propTypes = {
    movies: PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
        overview: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
    }),
};

export default MovieCard;
