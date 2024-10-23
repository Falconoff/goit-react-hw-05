import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast, imageURL } from '../../api/movies';

import imgNotFound from '../../assets/image-not-found.png';

import css from './MovieCast.module.css';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  // get Cast by ID
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { cast } = await getMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMovies();
  }, [movieId]);

  return (
    <div>
      <h3>MovieCast</h3>
      {error && <h2>{error}</h2>}
      {cast.length == 0 && <p>We didn`t find anything about it</p>}

      <ul>
        {cast.map(actor => {
          return (
            <li key={actor.cast_id}>
              <div className={css.actorCard}>
                <img
                  className={css.actorPhoto}
                  src={
                    actor.profile_path
                      ? imageURL + actor.profile_path
                      : imgNotFound
                  }
                  alt={actor.name}
                />
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieCast;
