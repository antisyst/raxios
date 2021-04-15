import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Created with{' '}
        <span role="img" aria-label="heart">
          {' '}
          ❤️{' '}
        </span>{' '}
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
        </a>{' '}
        API
      </p>{' '}
    </footer>
  )
}
