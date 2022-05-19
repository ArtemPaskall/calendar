import './MovieCard.scss';
import { Movie } from '../../react-app-env';
import camera from '../../Images/con-video-camera.png';

type Props = {
  movie: Movie;
};

export const MovieCard:React.FC<Props> = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        className="movie-card__img"
        src={movie.show.image === null
          ? camera
          : movie.show.image.medium}
        alt="MovieImage"
      />
      <div className="movie-card__content">
        <div>
          <p className="movie-card__name">{movie.name}</p>
          <p className="movie-card__airdate">{movie.airdate.slice(0, 4)}</p>
        </div>
        <div className="movie-card__description">
          <p className="movie-card__description--season">
            Season:
            {movie.season}
          </p>
          <p className="movie-card__description--episode">
            Episode:
            {movie.number}
          </p>
        </div>
      </div>
    </div>
  );
};
