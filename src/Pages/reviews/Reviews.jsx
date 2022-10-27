import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  ReviewsList,
  ReviewsItem,
  ReviewsSpan,
} from './Reviews.styled';
import { Container } from 'components/Layout/Layout.styled';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=bfc78256055c27ed6be30c1c43cfe9c3&language=en-US`
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return new Promise.reject(new Error('Nothing found'));
      })
      .then(review => setReviews(review.results));
  }, [movieId]);
  console.log(reviews);

  return (
    <Container>
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(({ id, author, content, updated_at }) => {
            const updateTime = new Date(updated_at).toLocaleString();
            return (
              <ReviewsItem key={id}>
                <h4>
                  Author: <ReviewsSpan>{author}</ReviewsSpan>
                </h4>
                <p>{content}</p>
                <h5>
                  Last updated: <ReviewsSpan>{updateTime}</ReviewsSpan>
                </h5>
              </ReviewsItem>
            );
          })}
        </ReviewsList>
      ) : (
        <h4>No reviews yet.</h4>
      )}
    </Container>
  );
}
