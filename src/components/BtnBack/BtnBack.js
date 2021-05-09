import React, { Component } from 'react';
import routes from '../../routes';
import s from './BtnBack.module.css';

class BtnBack extends Component {
    handleGoBack = () => {
        const { location, history } = this.props;
        history.push(location?.state?.from || routes.home);
    };

    render() {
        return (
            <button
                type="button"
                onClick={this.handleGoBack}
                className={s.button}
            >
                Go back
            </button>
        );
    }
}

export default BtnBack;
