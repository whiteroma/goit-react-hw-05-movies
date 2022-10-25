import { Route, Routes } from "react-router-dom";
import Home from './Home/Home';
// import Cast from './Cast/Cast';
// import Movies from './Movies/Movies';
// import MovieDetails from './MovieDetails';
// import Reviews from './Reviews/Reviews';


export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      {/* <Route path="/movies" element={<Movies/>}>
        <Route path="/movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>}></Route>
          <Route path="reviews" element={<Reviews/>}></Route>
        </Route>
      </Route> */}
       <Route path="*" element={<Home />} />
    </Routes>
    </>
  );
};
