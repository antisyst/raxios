import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page=1`
    );
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  const handleSubmit = (e) => {
    console.log(searchTerm);
    if (searchTerm !== "") {
      getMovies(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=` +
          searchTerm
      );
      setSearchTerm("");
    } else {
    }
    e.preventDefault();
  };

  const handleChange = (e) => setSearchTerm(e.target.value);

  return (
    <>
      <div className="nav">
        <a href="./" className="brand">
          Movies Finder
        </a>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchTerm}
            className="search"
            placeholder="Enter a movie name"
            onChange={handleChange}
          />
        </form>
      </div>

      <div className="container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie {...movie} key={movie.id} />)}
      </div>
      <footer className="footer">
        <p>
          Created with{" "}
          <span role="img" aria-label="heart">
            {" "}
            ❤️{" "}
          </span>{" "}
          by &nbsp;
          <b>
            <a href="https://www.github.com/pratham82" target="_">
              Prathamesh Mali
            </a>
          </b>
          &nbsp; powered by &nbsp;
          <a href="https://www.themoviedb.org" target="_">
            <img
              className="tmdbLogo"
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="tmdbLogo"
            />
          </a>
        </p>{" "}
      </footer>
    </>
  );
};

export default App;
