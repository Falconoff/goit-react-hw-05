import { Link } from 'react-router-dom';

const MovieList = ({ movieList }) => {
  // console.log('MovieList movieList: ', movieList);

  return (
    <ul>
      {movieList.map(movie => {
        // return <li key={movie.id}>{movie.title}</li>;
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            {/* {movie.title} */}
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
