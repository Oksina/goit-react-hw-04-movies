import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './AdditionalInfo.module.css';

const AdditionalInfo = ({ url, location }) => {
    return (
        <div className={s.info}>
            <h2 className={s.title}>Additional information</h2>
            <ul>
                <li>
                    <NavLink
                        to={{
                            pathname: `${url}/cast`,
                            state: { ...location.state },
                        }}
                        className="NavLink"
                        activeClassName="NavLinkActive"
                    >
                        Cast
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={{
                            pathname: `${url}/reviews`,
                            state: { ...location.state },
                        }}
                        className="NavLink"
                        activeClassName="NavLinkActive"
                    >
                        Reviews
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

AdditionalInfo.propTypes = {
    url: PropTypes.string.isRequired,
};

export default AdditionalInfo;
