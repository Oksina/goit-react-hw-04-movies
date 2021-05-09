import React from 'react';
import PropTypes from 'prop-types';
import s from './Reviews.module.css';

const Reviews = ({ reviews }) => {
    return (
        <div>
            <ul className={s.main}>
                {reviews.map(({ id, author, content }) => {
                    return (
                        <li key={id}>
                            <p className={s.review}>
                                <span className={s.title}>Author: </span>
                                {author}
                            </p>
                            <p className={s.content}>{content}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

Reviews.propTypes = {
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        }),
    ),
};

export default Reviews;
