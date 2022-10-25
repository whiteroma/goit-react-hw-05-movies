import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from 'Pages/home/Home';
import { Layout } from './Layout/Layout';
import Movies from 'Pages/movies/Movies';
import MovieDetails from 'Pages/moviedetails/MovieDetails';
// import Cast from './Cast/Cast';
// import MovieDetails from './MovieDetails';
// import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}>
            <Route path="/movies/:movieId" element={<div>Movie Details</div>}>
              {/* <Route path="cast" element={<Cast/>}></Route> */}
              {/* <Route path="reviews" element={<Reviews/>}></Route> */}
            </Route>
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
