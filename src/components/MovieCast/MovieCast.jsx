import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast, imageURL } from '../../api/movies';

import imgNotFound from '../../assets/image-not-found.png';

import css from './MovieCast.module.css';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  // console.log('MovieCast - movieId: ', movieId);

  // get Cast by ID
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { cast } = await getMovieCast(movieId);
        // console.log('MovieCast - cast: ', cast);
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
                  // src={imgNotFound}
                  alt={actor.name}
                />
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </div>
            </li>
          );
        })}

        {/* <li>
          <div className="actor">
            <img src="" alt="" />
            <p>name</p>
            <p>Character: Batman</p>
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default MovieCast;
