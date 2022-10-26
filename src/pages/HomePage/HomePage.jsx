import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Loader } from '../../components/Loader/Loader';
import { UpdateLoader } from 'components/Loader/Loader.styled';
import { MoviesAPI } from '../../servises/MoviesApi';
import { ListTitle, MoviesList, MovieTitle } from './HomePage.styled';

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // MoviesAPI.fetchMovies().then(response => setTrendMovies(response));
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const moviesResponse = await MoviesAPI.fetchMovies();
        // console.log(moviesResponse);
        if (!moviesResponse.length) {
          throw new Error('Oops!');
        }
        setTrendMovies(moviesResponse);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      {isLoading && <UpdateLoader><Loader /></UpdateLoader>}
      {error && (
        <p>
          Sorry!We can't show you the most popular movies now, try again later.
        </p>
      )}
      {!!trendMovies.length && (
        <>
          <ListTitle>Trending today</ListTitle>
          <MoviesList>
            {trendMovies.map(movie => (
              <li key={movie.id}>
                <MovieTitle
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
                >
                  {movie.original_name ?? movie.title ?? movie.name}
                </MovieTitle>
              </li>
            ))}
          </MoviesList>
        </>
      )}
    </>
  );
};
export default HomePage;
