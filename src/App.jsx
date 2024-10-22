// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import About from './pages/About/About';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import Header from './components/Header/Header';
import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="/about" element={<About />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
