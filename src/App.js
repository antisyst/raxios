import React, { useEffect, useState } from 'react'
import Movie from './components/Movie'
import Footer from './components/layouts/Footer'

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    getMovies(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page=1`
    )
  }, [])

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
  }

  const handleSubmit = (e) => {
    console.log(searchTerm)
    if (searchTerm !== '') {
      getMovies(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=` +
          searchTerm
      )
      setSearchTerm('')
    } else {
    }
    e.preventDefault()
  }

  const handleChange = (e) => setSearchTerm(e.target.value)

  return (
    <>
      <nav className="nav">
        <a href="./" className="brand">
          Movies Finder 2.0
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
      </nav>

      <div className="container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie {...movie} key={movie.id} />)}
      </div>
      <Footer />
    </>
  )
}

export default App
