import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import { lazy, Suspense } from 'react';
import { Home } from '../Pages/HomePage';
import { Movies } from '../Pages/Movies';
import MovieDetails from '../Pages/MovieDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </>
  );
};


