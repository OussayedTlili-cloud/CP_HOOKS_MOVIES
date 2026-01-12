import React, { useState } from "react";
import { moviesData } from "./data";
import MovieList from "./MovieList";
import Filter from "./Filter";
import AddMovie from "./AddMovie";
import "./App.css";



function App() {
  const [movies, setMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rate >= rateFilter
  );

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
  };

  return (
    <div className="app">
      <h1>🎬 Movie App</h1>

      <Filter
        setTitleFilter={setTitleFilter}
        setRateFilter={setRateFilter}
      />

      <AddMovie addMovie={addMovie} />

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
