import React, { useState } from "react";

const AddMovieModal = ({ addMovie, closeModal }) => {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rate: 0,
    trailer: "",
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (movie.title && movie.posterUrl) {
      addMovie({ ...movie, rate: Number(movie.rate) });
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Movie</h2>

        <input name="title" placeholder="Title" onChange={handleChange} />
        <input name="description" placeholder="Description" onChange={handleChange} />
        <input name="posterUrl" placeholder="Poster URL" onChange={handleChange} />
        <input name="trailer" placeholder="Trailer URL" onChange={handleChange} />

        <input
          name="rate"
          type="number"
          min="0"
          max="5"
          onChange={handleChange}
        />

        <div className="modal-actions">
          <button onClick={handleSubmit}>Add</button>
          <button className="cancel" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMovieModal;
