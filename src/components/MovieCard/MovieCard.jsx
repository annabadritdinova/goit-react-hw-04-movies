import PropTypes from 'prop-types';
import { NavLink, useRouteMatch, useLocation } from 'react-router-dom';
import styles from './MovieCard.module.css';
import imagePlaceholder from '../../images/placeholder.png';

function MovieCard({ movie }) {
  const location = useLocation();
  const { url } = useRouteMatch();

  return (
    <>
      <hr />
      <div className={styles.wrapper}>
        <img
          className={styles.image}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : imagePlaceholder
          }
          alt={movie.title}
        />
        <div className={styles.content}>
          <h2 className={styles.title}>{movie.title}</h2>
          <p className={styles.text}>Release date: {movie.release_date}</p>
          <p className={styles.text}>User Score: {movie.vote_average * 10}%</p>
          <p className={styles.category}>Overview:</p>
          <p className={styles.text}>{movie.overview}</p>

          <p className={styles.category}>Genres:</p>
          {movie.genres && (
            <ul>
              {movie.genres.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className={styles.nav}>
        <p className={styles.category}>Additional information</p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { from: location?.state?.from ?? '/' },
              }}
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Cast
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: { from: location?.state?.from ?? '/' },
              }}
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};