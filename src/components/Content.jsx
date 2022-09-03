import React, { useEffect, useState } from "react";
import "../styling/Content.css";
import MovieCard from "./MovieCard";

function Content() {
  const [searchTitle, setSearchTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const receivingData = async (title) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=cc1c8926&s=${title}`
    );
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  };
  useEffect(() => {
    receivingData("spider-man");
  }, []);

  return (
    <>
      <div className="container-content">
        <div className="search-content">
          <input
            type="text"
            name="search"
            id="search-input"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <span
            className="material-symbols-outlined"
            id="search-icon"
            onClick={() => {
              receivingData(searchTitle);
            }}
          >
            search
          </span>
        </div>
        <br />
        <div className="movies">
          <div className="movies-content">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
