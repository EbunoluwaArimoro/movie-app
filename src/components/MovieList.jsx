import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {movies.map((movie, i) => (
        <MovieCard key={i} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
