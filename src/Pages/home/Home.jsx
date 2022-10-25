import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TrendingItem, TrendingLink } from './Home.styled';

export default function Home() {
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
        return setTrending([...movie.results]);
      })
      .catch(error => toast.error(error.message));
  }, []);

  console.log('results', trending);

  return (
    <div>
      <h2>Trending movies</h2>
      <ul>
        {trending.map(({ name, title, id }) => {
          return (
            <TrendingItem key={id}>
              <TrendingLink to={id}>{name ?? title}</TrendingLink>
            </TrendingItem>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}
