import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import { lazy, Suspense } from 'react';
// import { Home } from '../pages/HomePage';
// import Movies  from '../Pages/Movies';
// import MoviesDetails from '../Pages/MoviesDetails';
// import CastPage from '../Pages/CastPage';
// import ReviewsPage from '../Pages/ReviewsPage';

const HomePage = lazy(() => import('../pages/HomePage'));
const Movies = lazy(() => import('../pages/Movies'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetails'));

const CastPage = lazy(() => import('../pages/CastPage'));
const ReviewsPage = lazy(() => import('../pages/ReviewPage'));

export const App = () => {
  return (
    <>
      {/* <Suspense> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index end element={<HomePage />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MoviesDetails />}>
              <Route path="cast" element={<CastPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
            </Route>
          </Route>
        </Routes>
      {/* </Suspense> */}
    </>
  );
};
