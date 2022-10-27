import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CastList, CastItem, CastSpan } from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=bfc78256055c27ed6be30c1c43cfe9c3&language=en-US`
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return new Promise.reject(new Error('Nothing found'));
      })
      .then(credit => setCast(credit.cast));
  }, [movieId]);
  console.log(cast);

  return (
    <CastList>
      {cast.map(({ id, name, profile_path, character }) => {
        return (
          <CastItem key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : 'https://hollywoodlife.com/wp-content/uploads/2016/05/actor-on-a-red-carpet-reddit-ftr1.jpg?w=600&h=432&crop=1'
              }
              alt={name}
            ></img>
            <div>
              <h3>{name}</h3>
              <p>
                Character: <CastSpan>{character}</CastSpan>
              </p>
            </div>
          </CastItem>
        );
      })}
    </CastList>
  );
}
