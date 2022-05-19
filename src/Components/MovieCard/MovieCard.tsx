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
        src={movie.show.image === null
          ? camera
          : movie.show.image.medium}
        alt="MovieImage"
      />
      <div className="movie-card__content">
        <p>{movie.name}</p>
        <p>{movie.airdate.slice(0, 4)}</p>
        <div className="movie-card__description">
          <p>
            Season:
            {movie.season}
          </p>
          <p>
            Episode:
            {movie.number}
          </p>
        </div>
      </div>
    </div>
  );
};
