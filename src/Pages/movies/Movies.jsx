import MovieDetails from 'Pages/moviedetails/MovieDetails';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Outlet, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => setQuery(data.SearchQuery);
  console.log('query:', query);

  useEffect(() => {
    if (!query) {
      return;
    }

    fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=bfc78256055c27ed6be30c1c43cfe9c3&language=en-US&query=${query}&page=1&include_adult=false`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error('Change your search query'));
      })
      .then(movie => {
        console.log(movie);
        if (movie.results === 0) {
          return toast.error(
            'Something went wrong. Try changing your search query'
          );
        }
        return setMovies([...movie.results]);
      })
      .catch(error => {
        return toast.error(error.message);
      });
  }, [query]);
  console.log(movies);

  //   const notify = () => toast.error("Please enter your search query");

  return (
    <>
      {movies.length === 0 ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="SearchQuery"
            {...register('SearchQuery', { required: true })}
          />
          {errors.SearchQuery && <span>Field is required</span>}

          <input type="submit" value="Search" />
        </form>
      ) : (
        <ul>
          {movies.map(({ id, title, name }) => {
            return (
              <li key={id}>
                <Link to={`${id}`}>{name ?? title}</Link>
              </li>
            );
          })}
        </ul>
      )}
      <Outlet />
    </>
  );
}
