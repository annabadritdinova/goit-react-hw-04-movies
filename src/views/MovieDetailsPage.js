import { useState, useEffect } from 'react';
import {
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
  Route,
} from 'react-router-dom';
import { fetchMovieDetails } from '../services/movies-api';
import MovieCard from '../components/MovieCard';
import MovieCast from '../components/MovieCast';
import MovieReviews from '../components/MovieReviews';

export default function MovieDetailsPage() {
  const { path } = useRouteMatch();
  const { movieId } = useParams();
  const [movies, setMovies] = useState({});
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    fetchMovieDetails(movieId).then(data => {
      setMovies(data);
    });
  }, [movieId]);

  const handleGoBack = () => {
    history.push(location?.state?.from ?? '/');
    console.log(location.state.from);
  };

  return (
    <>
      <button onClick={handleGoBack} type="button">
        Back
      </button>

      {movies && <MovieCard movie={movies} />}

      <Route path={`${path}:movieId/cast`}>
        {movies && <MovieCast id={movieId} />}
      </Route>

      <Route path={`${path}:movieId/reviews`}>
        {movies && <MovieReviews id={movieId} />}
      </Route>
    </>
  );
}