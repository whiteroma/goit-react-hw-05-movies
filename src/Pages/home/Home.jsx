import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  TrendingItem,
  TrendingLink,
  TrendingList,
  Container,
} from './Home.styled';

export default function Home() {
  const location = useLocation();
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=bfc78256055c27ed6be30c1c43cfe9c3`
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error('Nothing found'));
      })
      .then(movie => {
        return setTrending(movie.results);
      })
      .catch(error => toast.error(error.message));
  }, []);

  console.log('results', trending);

  return (
    <Container>
      <h2>Trending movies</h2>
      <TrendingList>
        {trending.map(
          ({ poster_path, name, title, id, release_date, first_air_date }) => {
            const date = new Date(release_date).getFullYear();
            const date2 = new Date(first_air_date).getFullYear();
            return (
              <TrendingItem key={id}>
                <TrendingLink to={`/movies/${id}`} state={{ from: location }}>
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
                </TrendingLink>
              </TrendingItem>
            );
          }
        )}
      </TrendingList>
      <Outlet />
    </Container>
  );
}
