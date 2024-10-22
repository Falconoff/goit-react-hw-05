// import React from 'react'

import { NavLink, Outlet } from 'react-router-dom';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import css from './MovieDetailsPage.module.css';

import clsx from 'clsx';

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const MovieDetailsPage = () => {
  return (
    <>
      <MovieDetails />

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
