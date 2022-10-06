import React from "react";
import { directors } from "../data";

function Directors() {

  // console.log(directors)

  let displayDirectors = directors.map(director => {
    return (
      <div key={director.name}>
        <h4>{director.name}</h4>
        <ul>
          {director.movies.map(movie => {
            return <li key={movie}>{movie}</li>
          })}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {displayDirectors}
    </div>
    );
}

export default Directors;
