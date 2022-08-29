import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "../styling/Content.css";

function Content() {
    
    const [searchTitle, setSearchTitle] = useState('');
    const [movies, setMovies] = useState([]);
    const receivingData = async (title) => {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=cc1c8926&s=${title}`
      );
      const data = await response.json();
      setMovies(data.Search)
      console.log(data.Search)
    };
    useEffect(
        () => {
          receivingData('spiderman')
        },[]
      )
     var poster ={};
  return (
    <>
      <div className="container-content">
        <div className="search-content">
          <input type="text" name="search" id="search-input" value={searchTitle} onChange={(e)=> setSearchTitle(e.target.value) } />
          <span className="material-symbols-outlined" id="search-icon" onClick={()=> {receivingData(searchTitle)}} >search</span>
        </div>

        <div className="movies-content">
          {movies.map((movie) => (
              // poster = {
              //   <img 
              // id="poster-img"
              // src={
              //   movie.Poster !== "N/A"
              //     ? `${movie.Poster}`
              //     : "https://placehold.jp/300x300.png"
              // }
              // alt="placeholder" 
              // />   }    
            
            <MovieCard movie={movie} moviePoster={poster}/>
          ))}
          {/* <MovieCard movie={obj}/> */}
        </div>
      </div>
    </>
  );
}

export default Content;
