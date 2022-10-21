import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { MoviesAPI } from 'servises/MoviesApi';

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    MoviesAPI.fetchMovies().then(response => setTrendMovies(response));
  }, []);

  return (
    <>
      {!!trendMovies.length && (
        <ul>
          {trendMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.original_name ?? movie.title}

              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
