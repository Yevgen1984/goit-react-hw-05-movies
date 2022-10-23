import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


import { Loader } from '../components/Loader/Loader';
import { MoviesAPI } from '../servises/MoviesApi';
import {MoviesList, MovieTitle} from './HomePage.styled';

const Home = () => {
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
      {isLoading && <Loader />}
      {error && (
        <p>
          Sorry!We can't show you the most popular movies now, try again later.
        </p>
      )}
      {!!trendMovies.length && (
        <MoviesList>
          {trendMovies.map(movie => (
            <li key={movie.id}>
              <MovieTitle to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.original_name ?? movie.title ?? movie.name}
              </MovieTitle>
            </li>
          ))}
        </MoviesList>
      )}
    </>
  );
};
export default Home;