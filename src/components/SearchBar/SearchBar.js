import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './SearchBar.module.css';

class SearchForm extends Component {
    state = { query: '' };

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    handleChange = e => {
        this.setState({ query: e.currentTarget.value });
    };
    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.query);

        this.setState({ query: '' });
    };

    render() {
        return (
            <header className={s.Searchbar}>
                <form className={s.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={s.SearchFormButton}>
                        <span className={s.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={s.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        value={this.state.query}
                        placeholder="Search movies"
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}
export default SearchForm;
