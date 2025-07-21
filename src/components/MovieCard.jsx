import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card" style={{ margin: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.posterURL} alt={movie.title} width="200" />
      </Link>
      <h3>{movie.title}</h3>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
