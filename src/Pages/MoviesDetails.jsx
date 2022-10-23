import { Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
// import { useFetchMovieInfo } from 'hooks/useFetchMovieInfo';
import { MoviesAPI } from 'servises/MoviesApi';
// import { Movie } from 'components/Movie/Movie';
import { Loader } from '../components/Loader/Loader';
import { LinkItem } from '../components/Navigation/Navigation.styled';

const MoviesDetails = () => {
  // const { movieInfo, isLoading, error } = useFetchMovieInfo();
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const navigation = useNavigate();

  useEffect(() => {
    const getMovie = async movieId => {
      setIsLoading(true);
      try {
        const movieDetails = await MoviesAPI.fetchMovieById(movieId);
        console.log(movieDetails);
        setMovieInfo(movieDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getMovie(movieId);
  }, [movieId]);

  const onBtnClick = () => {
    navigation(location?.state?.from ?? '/');
  };
  console.log(movieInfo);

  return (
    <>
      {isLoading && <Loader />}
      {movieInfo && (
        <>
          <button type="button" onClick={onBtnClick}>
            Go back
          </button>
          <div>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
                alt={
                  movieInfo.title ?? movieInfo.original_name ?? movieInfo.name
                }
              />
            </div>
            <div>
              <h2>
                {movieInfo.title ?? movieInfo.original_name ?? movieInfo.name} (
                {new Date(movieInfo.release_date).getFullYear()})
              </h2>
              <p>User score: {Math.round(movieInfo.vote_average * 10)} %</p>
              <h3>Genres</h3>
              <p>{movieInfo.genres?.map(({ name }) => name).join(', ')}</p>
              <h3>Overview</h3>
              <p>{movieInfo.overview}</p>
            </div>
          </div>
          <h3>Additional information</h3>
          <ul>
            <li>
              <LinkItem to="cast" state={location.state}>
                Cast
              </LinkItem>
            </li>
            <li>
              <LinkItem to="reviews" state={location.state}>
                Reviews
              </LinkItem>
            </li>
          </ul>
        </>
      )}
      {error && <p>Ooops!</p>}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
