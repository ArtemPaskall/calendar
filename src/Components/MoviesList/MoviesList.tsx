import './MoviesList.scss';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { getMoviesList } from '../../api/moviesList';
import { Movie } from '../../react-app-env';
import { MovieCard } from '../MovieCard/MovieCard';
import { Loader } from '../Loader/Loader';
import { getErrorByType, getPrevDate } from './function';
import arrow from '../../Images/arrow_icon-red.svg';

export const MoviesList:React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [moviesPrevDay, setMoviesPrevDay] = useState<Movie[]>([]);
  const [serverError, setServerError] = useState<boolean>(false);
  const [noDate, setNoDate] = useState<boolean>(false);
  const [noMovies, setNoMovies] = useState<boolean>(false);
  const [noMoviesPrevDay, setNoPrevMovies] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { date } = useParams();
  const [longList, setLongList] = useState<boolean>(false);
  const [longListPrev, setLongListPrev] = useState<boolean>(false);

  const checkEmptyList = (moviesList: Movie[]) => {
    if (moviesList.length === 0) {
      setNoMovies(true);
    }

    return moviesList;
  };

  const checkEmptyPrevList = (moviesList: Movie[]) => {
    if (moviesList.length === 0) {
      setNoPrevMovies(true);
    }

    return moviesList;
  };

  const changeMoviesList = () => {
    setLongList(!longList);
  };

  const changePrevMoviesList = () => {
    setLongListPrev(!longListPrev);
  };

  useEffect(() => {
    if (date === undefined) {
      setNoDate(true);
    } else {
      getMoviesList(date)
        .then((response) => checkEmptyList(response))
        .then(response => setMovies(response))
        .catch(() => setServerError(true))
        .finally(() => setIsLoading(false));

      getMoviesList(getPrevDate(date))
        .then((response) => checkEmptyPrevList(response))
        .then(response => setMoviesPrevDay(response))
        .catch(() => setServerError(true))
        .finally(() => setIsLoading(false));
    }
  }, [date]);

  return (
    <div className="movie-list__wrap">
      <div className="movie-list__link-wrap">
        <Link to="/" className="movie-list__link">
          <img src={arrow} alt="arrow" />
        </Link>
      </div>
      {getErrorByType(serverError, noDate)}
      {isLoading
        ? (<Loader />)
        : (
          <>
            <div className="movie-list" id="list-top">
              <div className="movie-list__date">
                <h2 className="movie-list__date-title">
                  {dayjs(date).format('DD MMMM YYYY')}
                </h2>
              </div>
              <ul>
                {longList
                  ? (movies.map(movie => (
                    <li
                      key={movie.id}
                    >
                      <MovieCard movie={movie} />
                    </li>
                  )))
                  : (movies.slice(0, 2).map(movie => (
                    <li
                      key={movie.id}
                    >
                      <MovieCard movie={movie} />
                    </li>
                  )))}
              </ul>
              <button
                type="button"
                className="movie-list__button"
                onClick={() => changeMoviesList()}
              >
                {longList ? ('Show short list') : (`All ${movies.length} movies`)}
              </button>
              {noMovies && (
                <p className="movie-list__error">
                  There are no movies to this date
                </p>
              )}
            </div>
            <div className="movie-list" id="list-buttom">
              <div className="movie-list__date">
                <h2 className="movie-list__date-title">
                  {date && (dayjs(getPrevDate(date)).format('DD MMMM YYYY'))}
                </h2>
              </div>
              <ul>
                {longListPrev
                  ? (moviesPrevDay.map(movie => (
                    <li
                      key={movie.id}
                    >
                      <MovieCard movie={movie} />
                    </li>
                  )))
                  : (moviesPrevDay.slice(0, 2).map(movie => (
                    <li
                      key={movie.id}
                    >
                      <MovieCard movie={movie} />
                    </li>
                  )))}
              </ul>
              <button
                type="button"
                className="movie-list__button"
                onClick={() => changePrevMoviesList()}
              >
                {longListPrev ? ('Show short list') : (`All ${moviesPrevDay.length} movies`)}
              </button>
              {noMoviesPrevDay && (
                <p className="movie-list__error">
                  There are no movies to this date
                </p>
              )}
            </div>
          </>
        )}
    </div>
  );
};
