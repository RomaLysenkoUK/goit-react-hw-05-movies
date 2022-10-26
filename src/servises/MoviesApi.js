import axios from 'axios';
const KEY = 'dace3ba60ee82f0a15c6bb8af3a62e30';

export const MoviesAPI = {
  async fetchMovies() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
    );
    // console.log(response)
    return await response.data.results;
  },
  async fetchMovieById(movieId) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`
    );
    return await response.data;
  },
  async fetchMovieBySearch(searchTerm) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
    );
    return await response.data.results;
  },
  async fetchMovieCast(movieId) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
    );
    return await response.data;
  },
  async fetchMovieReviews(movieId) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
    );
    return await response.data;
  },
};
// export const getMovies = fetchMovies();

// export const getCustomers = () => {
//   return Promise.resolve(response.results.[]);
// };
