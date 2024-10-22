import css from './MovieDetails.module.css';
import imgTest from '../../img_test.png';

const MovieDetails = () => {
  return (
    <div className={css.movieDetails}>
      <h1>MovieDetailsPage</h1>
      <div className={css.movieDetailsWrapper}>
        <img src={imgTest} alt="" />
        <div className="textWrap">
          <h2>Movie Name</h2>
          <p>User Score: 74%</p>
          <h3>Overview</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            eveniet.
          </p>
          <h4>Genres</h4>
          <p>Drama History War</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
