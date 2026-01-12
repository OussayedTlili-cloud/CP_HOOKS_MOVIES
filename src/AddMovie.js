import React, { useState } from "react";

const AddMovie = ({ addMovie }) => {
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
      setMovie({
        title: "",
        description: "",
        posterUrl: "",
        rate: 0,
        trailer: "",
      });
    }
  };

  return (
    <div className="add-movie">
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

      <button onClick={handleSubmit}>Add Movie</button>
    </div>
  );
};

export default AddMovie;
