import React from "react";
import { useEffect } from "react";

function Filter({ activeGen, setActiveGen, setFiltered, movies }) {
  useEffect(() => {
    if (activeGen === 0) {
      setFiltered(movies);
      return;
    }
    const filtered = movies.filter((movie) =>
      movie.genre_ids.includes(activeGen)
    );
    setFiltered(filtered);
  }, [activeGen]);

  return (
    <div className="filter-style">
      <button
        className={activeGen === 0 ? "active" : ""}
        onClick={() => setActiveGen(0)}
      >
        All
      </button>
      <button
        className={activeGen === 28 ? "active" : ""}
        onClick={() => setActiveGen(28)}
      >
        Action
      </button>
      <button
        className={activeGen === 12 ? "active" : ""}
        onClick={() => setActiveGen(12)}
      >
        Adventure
      </button>
      <button
        className={activeGen === 35 ? "active" : ""}
        onClick={() => setActiveGen(35)}
      >
        Comedy
      </button>
    </div>
  );
}

export default Filter;
