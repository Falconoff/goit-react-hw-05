import {
  NavLink,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import clsx from 'clsx';

import css from './MovieDetailsPage.module.css';
import MovieDetails from '../../components/MovieDetails/MovieDetails';

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const backUrl = location.state?.from || '/movies';

  const goBack = () => navigate(backUrl);

  return (
    <>
      <h1 className="visually-hidden">Movie Details Page</h1>
      <button className="btn" type="button" onClick={goBack}>
        Go Back
      </button>

      <MovieDetails movieId={movieId} />

      <div className={css.additionalNav}>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink
              to="cast"
              className={buildCssClasses}
              state={{ from: backUrl }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to="reviews"
              className={buildCssClasses}
              state={{ from: backUrl }}
            >
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
