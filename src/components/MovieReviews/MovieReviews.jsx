import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../services/movies-api';
import styles from './MovieReviews.module.css';

export default function MovieReviews({ id }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(id).then(data => setReviews(data.results));
  }, [id]);

  return (
    <div className={styles.wrapper}>
      {reviews.length > 0 ? (
        <>
          <ul className={styles.list}>
            {reviews.map((item, index) => (
              <li key={index} className={styles.item}>
                <p className={styles.title}> {item.author}</p>
                <p> {item.content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className={styles.text}>No reviews</p>
      )}
    </div>
  );
}

MovieReviews.propTypes = {
  id: PropTypes.string.isRequired,
};