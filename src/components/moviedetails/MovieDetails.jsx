import { useState } from 'react';
import { useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { StyledLink } from 'components/Layout/Layout.styled';
import {
  AboutMovie,
  AboutMovieText,
  AboutMovieTextSpan,
  AdditionalList,
  AdditionalDiv,
} from './MovieDetails.styled';
import { Container } from 'components/Layout/Layout.styled';
import { BsArrowLeftSquareFill } from 'react-icons/bs';

export default function MovieDetails() {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const getBack = location.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) {
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=bfc78256055c27ed6be30c1c43cfe9c3&language=en-US`
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error('Nothing found'));
      })
      .then(movie => {
        setMovie([movie]);
      });
  }, [movieId]);

  return (
    <>
      {movie && (
        <Container>
          {movie.map(
            ({
              release_date,
              poster_path,
              title,
              name,
              overview,
              vote_average,
              genres,
              id,
            }) => {
              const releaseYear = new Date(release_date).getFullYear();
              console.log('releaseYear', releaseYear);
              const genre = genres
                .map(({ name }) => {
                  return name;
                })
                .join(' ');
              console.log('genre', genre);
              const userScore = Math.round(vote_average * 10) + '%';
              return (
                <div key={id}>
                  <Link to={getBack}>
                    <BsArrowLeftSquareFill size="40px" color="orangered" />
                  </Link>
                  <AboutMovie>
                    <img
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`
                          : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg'
                      }
                      alt={title ?? name}
                    ></img>
                    <AboutMovieText>
                      <h2>
                        {name ?? title} ({releaseYear})
                      </h2>
                      <p>
                        User score:{' '}
                        <AboutMovieTextSpan>{userScore}</AboutMovieTextSpan>
                      </p>
                      <h3>Overview</h3>
                      <p>{overview}</p>
                      <h3>Genres</h3>
                      <p>{genre}</p>
                    </AboutMovieText>
                  </AboutMovie>
                  <AdditionalDiv>
                    <h3>Additional information</h3>
                    <AdditionalList>
                      <li>
                        <StyledLink state={{ from: getBack }} to="cast">
                          Cast
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink state={{ from: getBack }} to="reviews">
                          Reviews
                        </StyledLink>
                      </li>
                    </AdditionalList>
                  </AdditionalDiv>
                </div>
              );
            }
          )}
        </Container>
      )}
     <Suspense><Outlet /></Suspense>
    </>
  );
}
