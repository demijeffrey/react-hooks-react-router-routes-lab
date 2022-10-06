import React from "react";
import { movies } from "../data";

function Movies() {

  // console.log(movies)

  let displayMovies = movies.map(movie => {
    return (
      <div key={movie.title}>
        <h4>{movie.title}</h4>
        <p>{movie.time} minutes</p>
        <ul>
          {movie.genres.map(genre => {
            return <li key={genre}>{genre}</li>
          })}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovies}
    </div>
  )
}

export default Movies;
