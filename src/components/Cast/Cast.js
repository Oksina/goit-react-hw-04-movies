import React from 'react';
import PropTypes from 'prop-types';
import s from './Cast.module.css';
import defaultAvatar from './defaultAvatar.jpg';

const Cast = ({ cast }) => {
    return (
        <div>
            <ul className={s.main}>
                {cast.map(({ id, name, profile_path, character }) => (
                    <li key={id} className={s.item}>
                        <img
                            src={
                                profile_path
                                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                                    : defaultAvatar
                            }
                            alt={name}
                            className={s.img}
                        />
                        <div>
                            <p className={s.cast}>
                                <span className={s.title}>Name: </span>
                                {name}
                            </p>
                            <p className={s.cast}>
                                <span className={s.title}>Character: </span>
                                {character}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Cast.propTypes = {
    cast: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            profile_path: PropTypes.string,
            name: PropTypes.string.isRequired,
            character: PropTypes.string.isRequired,
        }),
    ),
};

export default Cast;
