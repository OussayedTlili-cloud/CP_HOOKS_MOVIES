import React from "react";

const Filter = ({ setTitleFilter, setRateFilter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title..."
        onChange={(e) => setTitleFilter(e.target.value)}
      />

      <input
        type="number"
        min="0"
        max="5"
        placeholder="Min rate"
        onChange={(e) => setRateFilter(Number(e.target.value))}
      />
    </div>
  );
};

export default Filter;
