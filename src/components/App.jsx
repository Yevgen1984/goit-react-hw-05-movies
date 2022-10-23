import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import { lazy, Suspense } from 'react';
import { Home } from '../Pages/HomePage';
// import { Movies } from '../Pages/Movies';
// import MovieDetails from '../Pages/MovieDetails';
// import CastPage from '../Pages/CastPage';
// import ReviewsPage from '../Pages/ReviewsPage';

const Movies = lazy(() => import('../Pages/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));

const CastPage = lazy(() => import('../Pages/CastPage'));
const ReviewsPage = lazy(() => import('../Pages/ReviewsPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index end element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
