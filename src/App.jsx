import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Movie from "./Movie";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";

const url = "https://api.themoviedb.org/3/movie/popular?api_key=2eb190679bac710f73a179938cdc9b44&language=en-US&page=1";

function App() {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGen, setActiveGen] = useState(0);

  const fetchMovies = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
    setMovies(movies.results);
    setFiltered(movies.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <h1>The most popular movies on the web</h1>
      <Filter className="filter-style"
        movies={movies}
        setFiltered={setFiltered}
        activeGen={activeGen}
        setActiveGen={setActiveGen}
      />
      <motion.div Layout className="movies-style">
        <AnimatePresence>
          {filtered.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
