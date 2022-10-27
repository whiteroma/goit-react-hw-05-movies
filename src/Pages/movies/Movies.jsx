import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, MoviesLink, Input, SearchBtn } from './Movies.styled';

export default function Movies() {
  const location = useLocation();
  const [query, setQuery] = useSearchParams('');
  const [movies, setMovies] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data =>
    setQuery(data !== '' ? { query: data.SearchQuery } : '');
  const searchQuery = query.get('query');
  console.log('query', query);
  console.log('searchQuery', searchQuery);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=bfc78256055c27ed6be30c1c43cfe9c3&language=en-US&query=${searchQuery}&page=1&include_adult=false`)
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
  }, [searchQuery]);
  console.log(movies);

  //   const notify = () => toast.error("Please enter your search query");

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="SearchQuery"
          {...register('SearchQuery', { required: true })}
        />
        {errors.SearchQuery && <span>Field is required</span>}

        <SearchBtn type="submit" value="Search" />
      </form>
      <ul>
        {movies.map(
          ({ poster_path, id, title, name, release_date, first_air_date }) => {
            const date = new Date(release_date).getFullYear();
            const date2 = new Date(first_air_date).getFullYear();
            return (
              <li key={id}>
                <MoviesLink to={`${id}`} state={{ from: location }}>
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg'
                    }
                    alt={title ?? name}
                  ></img>
                  <h4>
                    {name ?? title} ({date || date2})
                  </h4>
                </MoviesLink>
              </li>
            );
          }
        )}
      </ul>
      <Outlet />
    </Container>
  );
}
