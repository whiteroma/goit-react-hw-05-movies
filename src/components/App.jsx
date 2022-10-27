import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from 'Pages/home/Home';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';

const Movies = lazy(() => import('Pages/movies/Movies'));
const MovieDetails = lazy(() => import('components/moviedetails/MovieDetails'));
const Cast = lazy(() => import('components/cast/Cast'));
const Reviews = lazy(() => import('components/reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
};
