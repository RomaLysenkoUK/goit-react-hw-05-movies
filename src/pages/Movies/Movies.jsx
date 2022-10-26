import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { MoviesAPI } from 'servises/MoviesApi';
import { SearchBox } from 'components/SearchMovie/SearchMovie';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from './Movies.styled';
import { UpdateLoader } from 'components/Loader/Loader.styled';


const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const filterParam = searchParams.get('searchQuery') ?? '';

  useEffect(() => {
    const getMovies = async filterParam => {
      setIsLoading(true);
      try {
        const moviesResponse = await MoviesAPI.fetchMovieBySearch(filterParam);

        if (!moviesResponse.length) {
          throw new Error('Oops!');
        }
        setMovies(moviesResponse);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (filterParam) {
      getMovies(filterParam);
    }
  }, [filterParam]);

  const onFormSubmit = event => {
    event.preventDefault();
    setSearchParams({ searchQuery });
    setMovies([]);
    setError(null);
  };

    const onInput = e => {
    setSearchQuery(e.target.value);
  };

  
  return (
    <>
      <SearchBox
        value={searchQuery}
        // onChange={changeFilter}
        onInput={onInput}
        onFormSubmit={onFormSubmit}
      />
      
      {isLoading && <UpdateLoader><Loader /></UpdateLoader>}
      {error && (
        <p>
          Sorry! We didn't find anything on your query! Change search params and
          try again!
        </p>
      )}
      {movies.length > 0 && (
        <MovieList>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.original_name ?? movie.title ?? movie.name}
              </Link>
            </li>
          ))}
        </MovieList>
      )}
    </>
  );
};

export default Movies;
