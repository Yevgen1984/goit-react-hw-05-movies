import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { MoviesAPI } from 'servises/MoviesApi';

export const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get('filter') ?? '';

  // useEffect(() => {
  //   const moviesList = MoviesAPI.fetchMovieBySearch(searchParams)
  //   setMovies(moviesList)
  // }, [searchParams]);

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  const visibleMovies =
    (() => {
      return movies.filter(movie =>
        movie.title.toLowerCase().includes(filterParam.toLowerCase())
      )
    }
    );

  return (
   <>
      {/* <SearchBox value={filterParam} onChange={changeFilter} /> */}
      {visibleMovies.length > 0 && (
        <ul>
          {visibleMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
   </>
  );
};
