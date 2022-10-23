import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const Movies = lazy(() => import('../pages/Movies'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetails'));

const CastPage = lazy(() => import('../pages/CastPage'));
const ReviewPage = lazy(() => import('../pages/ReviewPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
