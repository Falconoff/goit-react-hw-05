import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Header.module.css';

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const Header = () => {
  return (
    <header>
      <NavLink className={buildCssClasses} to="/">
        Home
      </NavLink>
      <NavLink className={buildCssClasses} to="/movies">
        Movies
      </NavLink>
      {/* <NavLink  to="/movies/:movieId">Movies</NavLink> */}
      <NavLink className={buildCssClasses} to="/about">
        About
      </NavLink>
    </header>
  );
};

export default Header;
