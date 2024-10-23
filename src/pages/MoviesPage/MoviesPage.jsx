import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';

import { searchMovies } from '../../api/movies';

const MoviesPage = () => {
  const [movieList, setMovieList] = useState(null);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQ = searchParams.get('query');

  const onSearch = searchQuery => {
    setSearchParams({ query: searchQuery });
  };

  // getMovie by query
  useEffect(() => {
    if (!searchQ) return;

    const fetchMovies = async searchQ => {
      try {
        const data = await searchMovies(searchQ);
        setMovieList(data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMovies(searchQ);
  }, [searchQ]);

  return (
    <div>
      <h1 className="visually-hidden">search movie by name</h1>
      {error && <h2>{error}</h2>}

      <SearchForm onSearch={onSearch} />
      {movieList && <MovieList movieList={movieList} />}
    </div>
  );
};

export default MoviesPage;
