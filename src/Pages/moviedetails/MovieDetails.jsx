import { Outlet, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const { movieId } = useParams();
  console.log("movieId", movieId);
  

  return (
    <>
      <div>Movie Details {movieId}</div>
      <Outlet />
    </>
  );
}
