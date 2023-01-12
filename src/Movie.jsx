import React from "react";
import { motion } from "framer-motion";

function Movie({ movie }) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      Layout
    >
      <h2>{movie.title}</h2>
      <img
        onClick={() =>
          alert(`Overview:
      ${movie.overview}`)
        }
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt={movie.title}
      />
      <strong>{movie.release_date}</strong>
    </motion.div>
  );
}

export default Movie;
