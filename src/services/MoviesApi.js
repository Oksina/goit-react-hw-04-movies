import axios from 'axios';

const apiKey = '0baa827b92c4b95ae7e255cfb34e52ec';
//const apiKey = process.env.REACT_APP_API_KEY;
const url = 'https://api.themoviedb.org/3';

async function fetchTrendingMovies(response) {
    try {
        const trendingMovies = await axios.get(
            `${url}/movie/popular?api_key=${apiKey}`,
        );
        return response(trendingMovies.data.results);
    } catch (error) {
        console.error(error.messsage);
    }
}

async function fetchSearchMovies(query) {
    try {
        const searchMovies = await axios.get(
            `${url}/search/movie?api_key=${apiKey}&query=${query}`,
        );
        return searchMovies.data.results;
    } catch (error) {
        console.error(error.message);
    }
}

async function fetchMovieDetails(movieId) {
    try {
        const movieDetails = await axios.get(
            `${url}/movie/${movieId}?api_key=${apiKey}`,
        );
        return movieDetails.data;
    } catch (error) {
        console.error(error.messsage);
    }
}

async function fetchCast(movieId) {
    try {
        const cast = await axios.get(
            `${url}/movie/${movieId}/credits?api_key=${apiKey}`,
        );
        return cast.data.cast;
    } catch (error) {
        console.error(error.messsage);
    }
}

async function fetchReviews(movieId) {
    try {
        const reviews = await axios.get(
            `${url}/movie/${movieId}/reviews?api_key=${apiKey}`,
        );
        return reviews.data.results;
    } catch (error) {
        console.error(error.messsage);
    }
}

export {
    fetchTrendingMovies,
    fetchMovieDetails,
    fetchCast,
    fetchReviews,
    fetchSearchMovies,
};
