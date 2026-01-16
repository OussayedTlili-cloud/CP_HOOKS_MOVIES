import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MovieDescription.css";

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return (
      <div className="movie-description">
        <div className="not-found">
          <h2>🎬 Film non trouvé</h2>
          <p>Le film que vous cherchez n'existe pas ou a été déplacé.</p>
          <button className="home-btn" onClick={() => navigate("/")}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="movie-description">
      <div className="description-container">
        {/* Header avec bouton */}
        <div className="description-header">
          <h1 className="movie-title-header">{movie.title}</h1>
          <button className="back-btn" onClick={() => navigate("/")}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </button>
        </div>

        {/* Contenu principal */}
        <div className="movie-content">
          {/* Poster */}
          <div className="poster-container">
            <img 
              src={movie.posterUrl} 
              alt={movie.title} 
              className="detail-poster" 
            />
          </div>

          {/* Infos */}
          <div className="movie-info">
            {/* Rating */}
            <div className="movie-rating">
              <div className="rating-stars">
                {Array(Math.floor(movie.rate))
                  .fill()
                  .map((_, index) => (
                    <span key={index}>⭐</span>
                  ))}
              </div>
              <span className="rating-text">
                {movie.rate}/5 • {Math.floor(Math.random() * 1000) + 500} avis
              </span>
            </div>

            {/* Description */}
            <div className="description-section">
              <h3>📖 Synopsis</h3>
              <p>{movie.description}</p>
            </div>

            {/* Trailer */}
            {movie.trailer && (
              <div className="trailer-section">
                <h3>Trailer</h3>
                <div className="video-container">
                  {movie.trailer.includes("youtube") || movie.trailer.includes("youtu.be") ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${
                        movie.trailer.includes("youtube.com/watch?v=")
                          ? movie.trailer.split("v=")[1].split("&")[0]
                          : movie.trailer.split("/").pop()
                      }`}
                      title={`${movie.title} Trailer`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video controls className="trailer-video">
                      <source src={movie.trailer} type="video/mp4" />
                      Votre navigateur ne supporte pas la lecture vidéo.
                    </video>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="movie-footer">
          <p>© {new Date().getFullYear()} Movie Library • Tous droits réservés</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;