// import React from 'react'

import { NavLink, Outlet, useParams } from 'react-router-dom';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import css from './MovieDetailsPage.module.css';

import clsx from 'clsx';

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  // console.log('movieId: ', movieId);

  return (
    <>
      <button className="btn" type="button">
        Go Back
      </button>

      <MovieDetails movieId={movieId} />

      <div className={css.additionalNav}>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast" className={buildCssClasses}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={buildCssClasses}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
