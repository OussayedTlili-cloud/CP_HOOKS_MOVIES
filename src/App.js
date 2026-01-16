import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { moviesData } from "./data";
import MovieList from "./MovieList";
import Filter from "./Filter";
import AddMovieModal from "./AddMovieModal";
import MovieDescription from "./MovieDescription";
import "./App.css";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rate >= rateFilter
  );

  const addMovie = (newMovie) => {
    setMovies([...movies, { 
      ...newMovie, 
      id: movies.length + 1,
      rate: Number(newMovie.rate) 
    }]);
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      {/* Header avec titre et navigation */}
      <h1>🎬 Movie Library</h1>
      
      <nav className="nav-header">
        <Link to="/" className="nav-brand">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          Movie Library
        </Link>
        
        <Link to="/" className="home-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          Home
        </Link>
      </nav>

      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={
          <>
            {/* Section filtres */}
            <div className="filter-container">
              <Filter
                setTitleFilter={setTitleFilter}
                setRateFilter={setRateFilter}
              />
            </div>

            {/* Bouton pour ajouter un film */}
            <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="16"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
              Add Movie
            </button>

            {/* Liste des films filtrés */}
            <div className="movie-list-container">
              {filteredMovies.length > 0 ? (
                <MovieList movies={filteredMovies} />
              ) : (
                <div className="no-results">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                  <h3>No movies found</h3>
                  <p>Try adjusting your filters or add a new movie.</p>
                </div>
              )}
            </div>

            {/* Modal pour ajouter un film */}
            {isModalOpen && (
              <AddMovieModal
                addMovie={addMovie}
                closeModal={() => setIsModalOpen(false)}
              />
            )}
          </>
        } />

        {/* Route pour la page de description d'un film */}
        <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;