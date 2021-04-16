import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMovieCast } from '../../services/movies-api';
import styles from './MovieCast.module.css';
import imagePlaceholder from '../../images/placeholder.png';

export default function MovieCast({ id }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(id).then(data => {
      setCast(data.cast);
    });
  }, [id]);

  return (
    <>
      {cast && (
        <div className={styles.wrapper}>
          <ul className={styles.list}>
            {cast.map(actor => {
              return (
                <li className={styles.item} key={actor.cast_id}>
                  <img
                    className={styles.image}
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                        : imagePlaceholder
                    }
                    alt={actor.name}
                  />
                  <p className={styles.name}>{actor.name}</p>
                  <p className={styles.text}>Character: {actor.character}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

MovieCast.propTypes = {
  id: PropTypes.string.isRequired,
};