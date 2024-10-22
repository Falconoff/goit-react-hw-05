import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../../api/movies';

import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  // console.log('MovieCast - movieId: ', movieId);

  // get Reviews by ID
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { results } = await getMovieReviews(movieId);
        // console.log(' - results: ', results);
        setReviews(results);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMovies();
  }, [movieId]);

  return (
    <div>
      <h3>MovieReviews</h3>
      {error && <h2>{error}</h2>}

      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <div className={css.review}>
                <h4>Author: {review.author}</h4>
                <p>{review.content}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieReviews;
