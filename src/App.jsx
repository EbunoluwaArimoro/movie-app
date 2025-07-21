import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieDetails from './components/MovieDetails';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Matrix",
      description: "A computer hacker learns about the true nature of reality.",
      posterURL: "https://i.imgur.com/EjvYJMo.jpg",
      rating: 4.7,
      trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
    },
    {
      id: 2,
      title: "Inception",
      description: "A thief steals corporate secrets through dream-sharing.",
      posterURL: "https://i.imgur.com/e1hLQ2H.jpg",
      rating: 4.5,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleAddMovie = () => {
    const newMovie = {
      id: Math.random(),
      title: prompt('Enter title'),
      description: prompt('Enter description'),
      posterURL: prompt('Enter poster URL'),
      rating: parseFloat(prompt('Enter rating')),
      trailer: prompt('Enter YouTube trailer embed link'),
    };
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    movie.rating >= ratingFilter
  );

  return (
    <div className="App" style={{ padding: '2rem' }}>
      <h1>🎬 My Movie App</h1>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter
                onTitleChange={setTitleFilter}
                onRatingChange={setRatingFilter}
              />
              <button onClick={handleAddMovie}>Add Movie</button>
              <MovieList movies={filteredMovies} />
            </>
          }
        />

        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </div>
  );
};

export default App;
