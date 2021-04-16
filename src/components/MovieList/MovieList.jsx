import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieList.module.css';
import imagePlaceholder from '../../images/placeholder.png';

function MovieList({ movies, title }) {
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      {movies.length && (
        <ul className={styles.list}>
          {movies.map(movie => {
            return (
              <li key={movie.id} className={styles.item}>
                <Link
                  to={{
                    pathname: `movies/${movie.id}`,
                    state: { from: location },
                  }}
                >
                  <img
                    className={styles.image}
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : imagePlaceholder
                    }
                    alt={movie.title}
                  />
                  <p className={styles.title}>{movie.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};