// import '../../App.scss';
import './MoviesList.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { getMoviesList } from '../../api/moviesList';
import { Movie } from '../../react-app-env';
import { MovieCard } from '../MovieCard/MovieCard';
import { Loader } from '../Loader/Loader';
import { formatDate } from '../Calendar/Calendar';

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

  const getPrevDate = (d: string) => {
    const year = +d.slice(0, 4);
    const month = +d.slice(5, 7);
    const day = +d.slice(8, 10);

    const prevDay = new Date(year, month - 1, day - 1);

    return formatDate(prevDay);
  };

  const getErrorByType = (serverError1: boolean,
    dateFromCalendar: boolean) => {
    switch (true) {
      case serverError1:
        return (<p>Server Error</p>);
      case dateFromCalendar:
        return (<p>Date Error</p>);
      default:
        return '';
    }
  };

  const chechEmptyList = (moviesList: Movie[]) => {
    if (moviesList.length === 0) {
      setNoMovies(true);
    }

    return moviesList;
  };

  const chechEmptyPrevList = (moviesList: Movie[]) => {
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
        .then((response) => chechEmptyList(response))
        .then(response => setMovies(response))
        .catch(() => setServerError(true))
        .finally(() => setIsLoading(false));

      getMoviesList(getPrevDate(date))
        .then((response) => chechEmptyPrevList(response))
        .then(response => setMoviesPrevDay(response))
        .catch(() => setServerError(true))
        .finally(() => setIsLoading(false));
    }
  }, [date]);

  return (
    <>
      {getErrorByType(serverError, noDate)}
      {isLoading
        ? (<Loader />)
        : (
          <>
            <div className="movie-list">
              <div className="movie-list__date">
                <h2 className="movie-list__date-title">
                  {dayjs(date).format('DD MMMM YYYY')}
                </h2>
              </div>
              <div>
                <ul>
                  {longList
                    ? (movies.map(movie => (
                      <li
                        key={movie.id}
                      >
                        <MovieCard movie={movie} />
                      </li>
                    )))
                    : (movies.slice(0, 1).map(movie => (
                      <li
                        key={movie.id}
                      >
                        <MovieCard movie={movie} />
                      </li>
                    )))}
                </ul>
                <button
                  type="button"
                  className="button"
                  onClick={() => changeMoviesList()}
                >
                  Short List
                </button>
              </div>

              {noMovies && <p>noMovies</p>}
            </div>
            <div>
              <h2>
                {date && (dayjs(getPrevDate(date)).format('DD MMMM YYYY'))}
              </h2>
              <button
                type="button"
                className="button"
                onClick={() => changePrevMoviesList()}
              >
                Short List
              </button>
              <ul>
                {longListPrev
                  ? (moviesPrevDay.map(movie => (
                    <li
                      key={movie.id}
                    >
                      <MovieCard movie={movie} />
                    </li>
                  )))
                  : (moviesPrevDay.slice(0, 1).map(movie => (
                    <li
                      key={movie.id}
                    >
                      <MovieCard movie={movie} />
                    </li>
                  )))}
              </ul>
              {noMoviesPrevDay && <p>noMovies</p>}
            </div>
          </>
        )}
    </>
  );
};
