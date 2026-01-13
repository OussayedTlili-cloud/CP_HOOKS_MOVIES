import React, { useState } from "react";
import { moviesData } from "./data";
import MovieList from "./MovieList";
import Filter from "./Filter";
import AddMovieModal from "./AddMovieModal";
import "./App.css";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  // 👇 state pour ouvrir / fermer le modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rate >= rateFilter
  );

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
    setIsModalOpen(false); // 👈 fermer le modal après ajout
  };

  return (
    <div className="app">
      <h1>🎬 Movie App</h1>

      <Filter
        setTitleFilter={setTitleFilter}
        setRateFilter={setRateFilter}
      />

      {/* Bouton ouverture modal */}
      <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>
        + Add Movie
      </button>

      <MovieList movies={filteredMovies} />

      {/* Modal */}
      {isModalOpen && (
        <AddMovieModal
          addMovie={addMovie}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
