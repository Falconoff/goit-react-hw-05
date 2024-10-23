import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movieList }) => {
  const location = useLocation();

  if (movieList.length == 0) return <p>Nothing was found</p>;

  return (
    <ul>
      {movieList.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
