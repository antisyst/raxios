import React from "react";
import { img_api } from "./APIs";

const setVoteClass = (vote_avg) => {
  if (vote_avg >= 7) {
    return "green";
  } else if (vote_avg >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const not_found =
  "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className="movie_component">
    <img
      src={poster_path ? img_api + poster_path : not_found}
      alt={title}
      className="poster"
    />
    <div className="movie-info">
      <h2>{title}</h2>
      <span className={`tag ${setVoteClass(vote_average)}`}>
        <strong> {vote_average} </strong>
      </span>
    </div>
    <div className="hover-info">
      <h3>{title}</h3>
      <h4>Overview: </h4>
      <p>{overview ? overview : "No overview provided"}</p>
    </div>
  </div>
);

export default Movie;
