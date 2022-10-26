import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { Loader } from '../components/Loader/Loader';
// import { useFetchMovieInfo } from 'hooks/useFetchMovieInfo';
import { CastList } from '../components/Cast/Cast';
import { MoviesAPI } from '../servises/MoviesApi';
import { UpdateLoader } from 'components/Loader/Loader.styled';
import { Loader } from 'components/Loader/Loader';

const CastPage = () => {
  //   const { movieInfo, isLoading, error } = FetchMovieCast('movieId');
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async movieId => {
      setIsLoading(true);
      try {
        const movieDetails = await MoviesAPI.fetchMovieCast(movieId);
        setMovieInfo(movieDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getMovie(movieId);
  }, [movieId]);
  return (
    <>
      {isLoading && <UpdateLoader><Loader/></UpdateLoader>}
      {error && <p>We have no more details</p>}
      {movieInfo && <CastList movieInfo={movieInfo} />}
    </>
  );
};

export default CastPage;
