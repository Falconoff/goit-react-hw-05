import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTRjZWViMmYwYTcyNmI4OTg2ODE1ZjgzZTQyNTIwNSIsIm5iZiI6MTcyOTM3MDMwMS41ODUwOTksInN1YiI6IjYxODZmNDM0YzVjMWVmMDA4ODE2NTFjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nH3NALGFQYbjGrqOOfBJCCG6MhTt1I6IZddO-XsWvRo';

const moviesInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
  params: {
    include_adult: false,
    language: 'en-US',
    limit: 10,
  },
});

export const imageURL = 'https://image.tmdb.org/t/p/w500';

export const getMovies = async params => {
  const { data } = await moviesInstance.get('/trending/movie/day', {
    params,
  });
  // console.log('data:::', data);

  return data;
};

export const searchMovies = async q => {
  const { data } = await moviesInstance.get('/search', {
    params: {
      q,
    },
  });
  return data;
};

export const getMovieById = async id => {
  const { data } = await moviesInstance.get(`/movie/${id}`);
  return data;
};

export const getMovieCast = async id => {
  const { data } = await moviesInstance.get(`/movie/${id}/credits`);
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await moviesInstance.get(`/movie/${id}/reviews`);
  return data;
};
