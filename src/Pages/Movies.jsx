import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { MoviesAPI } from 'servises/MoviesApi';
import { SearchBox } from 'components/SearchMovie/SearchMovie';
import { Loader } from 'components/Loader/Loader';

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

  // const changeFilter = value => {
  //   setSearchParams(value !== '' ? { filter: value } : {});
  // };

  const onInput = e => {
    setSearchQuery(e.target.value);
  };

  // const visibleMovies = () => {
  //   return movies.filter(movie =>
  //     movie.title.toLowerCase().includes(filterParam.toLowerCase())
  //   );
  // };

  return (
    <>
      <SearchBox
        value={searchQuery}
        // onChange={changeFilter}
        onInput={onInput}
        onFormSubmit={onFormSubmit}
      />
      {isLoading && <Loader />}
      {error && (
        <p>
          Sorry! We didn't find anything on your query! Change search params and
          try again!
        </p>
      )}
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.original_name ?? movie.title ?? movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;