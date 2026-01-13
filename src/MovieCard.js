import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>

      {/* Affichage dynamique des étoiles */}
      <div className="stars">
        {Array(movie.rate)
          .fill()
          .map((_, index) => (
            <span key={index}>⭐</span>
          ))}
      </div>
    </div>
  );
};

export default MovieCard;
