import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card-link">
      <div className="movie-card">
        <img src={movie.posterUrl} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p className="movie-description-preview">
          {movie.description.substring(0, 100)}...
        </p>
        
        <div className="stars">
          {Array(movie.rate)
            .fill()
            .map((_, index) => (
              <span key={index}>⭐</span>
            ))}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;