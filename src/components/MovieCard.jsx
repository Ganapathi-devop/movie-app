import React, { useState } from "react";
import "../styling/MovieCard.css";

function MovieCard({movie,}) {
  const [isOnHover, setOnHover] = useState("hide");
  
  return (
    <div 
      className="container"
      onMouseOver={() => {
        setOnHover("");
      }}
      onMouseLeave={() => {
        setOnHover("hide");
      }}
    >
      <div className="poster">
        <img 
          id="poster-img"
          src={
            movie.Poster !== "N/A"
              ? `${movie.Poster}`
              : "https://placehold.jp/300x300.png"
          }
          alt="placeholder" 
        />
        <div className={`title-poster`}>
          <div className={`title-hover-div ${isOnHover}`}>
            <p className="movie-type">{movie.Type}</p>
            <p className="movie-year">{movie.Year}</p>
          </div>
          <h4 className="movie-title" >{movie.Title}  </h4>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;





//
  // const [widthState, setWidhState] = useState(0);

  // const ref = useRef(null);
  // const ref1= ()=>{
  //   var h4Width = ref.current.offsetWidth;
  //   console.log(h4Width + " :ref")
    

  // }

  // const h4Style = {
  //   width: `${ref1()}`
  // }
  // console.log(h4Style.width)

  // useEffect(() => {
  //   ref1()
  // });