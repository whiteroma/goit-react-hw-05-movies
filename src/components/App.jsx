import { Route, Routes } from "react-router-dom";
// import Home from '../Pages/home/Home';
import Layout from "./Layout/Layout";
// import Cast from './Cast/Cast';
// import Movies from './Movies/Movies';
// import MovieDetails from './MovieDetails';
// import Reviews from './Reviews/Reviews';


export const App = () => {
  return (
    <div>
      
      <header>
            <div>Home</div>
            <div>Movies</div>
        </header>
    <Routes>
      <Route path="/" element={<Layout />}>
      {/* <Route index element={<Home/>}></Route> */}
      {/* <Route path="/movies" element={<Movies/>}>
        <Route path="/movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>}></Route>
          <Route path="reviews" element={<Reviews/>}></Route>
        </Route>
      </Route> */}
       {/* <Route path="*" element={<Home />} /> */}
       </Route>
    </Routes>
    </div>
  );
};
