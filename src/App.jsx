import { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "The Matrix",
      description: "A computer hacker learns about the true nature of reality.",
      posterURL: "https://i.imgur.com/EjvYJMo.jpg",
      rating: 4.7,
    },
    {
      title: "Inception",
      description: "A thief steals corporate secrets through dream-sharing.",
      posterURL: "https://i.imgur.com/e1hLQ2H.jpg",
      rating: 4.5,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleAddMovie = () => {
    const newMovie = {
      title: prompt('Enter title'),
      description: prompt('Enter description'),
      posterURL: prompt('Enter poster URL'),
      rating: parseFloat(prompt('Enter rating')),
    };
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    movie.rating >= ratingFilter
  );

  return (
    <div className="App">
      <h1>🎬 My Movie App</h1>
      <Filter 
        onTitleChange={setTitleFilter} 
        onRatingChange={setRatingFilter} 
      />
      <button onClick={handleAddMovie}>Add Movie</button>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
