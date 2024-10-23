import { useEffect, useState } from 'react';

import { getMovieById, imageURL } from '../../api/movies';

import imgNotFound from '../../assets/image-not-found.png';

import css from './MovieDetails.module.css';

const MovieDetails = ({ movieId }) => {
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([movie]);
  const [error, setError] = useState(null);

  // getMovie by ID
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovieById(movieId);
        setMovie(data);
        setGenres(makeGenresString(data.genres));
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMovies();
  }, [movieId]);

  const makeGenresString = genres => {
    return genres.map(genre => genre.name).join(' | ');
  };

  const posterUrl = movie.poster_path
    ? imageURL + movie.poster_path
    : imgNotFound;

  return (
    <div className={css.movieDetails}>
      {error && <h2>{error}</h2>}

      <div className={css.movieDetailsWrapper}>
        <img className={css.movieImg} src={posterUrl} alt={movie.title} />
        <div className="textWrap">
          <h2>{movie.title}</h2>
          <p>User Score: {movie.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>{genres}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
