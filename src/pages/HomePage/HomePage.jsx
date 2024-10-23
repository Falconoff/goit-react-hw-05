import { useState, useEffect } from 'react';

import MovieList from '../../components/MovieList/MovieList';
import { getMovies } from '../../api/movies';

const HomePage = () => {
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(null);

  // getMovies
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies();
        setMovieList(data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>

      {error && <h2>{error}</h2>}

      {movieList && <MovieList movieList={movieList} />}
    </div>
  );
};

export default HomePage;
