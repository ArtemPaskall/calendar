import './MoviesList.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesList } from '../../api/moviesList';
import { Movie } from '../../react-app-env';
import { MovieCard } from '../MovieCard/MovieCard';
import { Loader } from '../Loader/Loader';

export const MoviesList:React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [serverError, setServerError] = useState<boolean>(false);
  const [noDate, setNoDate] = useState<boolean>(false);
  const [noMovies, setNoMovies] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { date } = useParams();
  const [longList, setLongList] = useState<boolean>(false);

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

  const changeMoviesList = () => {
    setLongList(!longList);
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
    }
  }, [date]);

  return (
    <>
      <h2>{date}</h2>
      {getErrorByType(serverError, noDate)}
      {isLoading
        ? (<Loader />)
        : (
          <>
            <button
              type="button"
              className="button"
              onClick={() => changeMoviesList()}
            >
              Short List
            </button>
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
          </>

        )}
      {noMovies && <p>noMovies</p>}
    </>
  );
};
