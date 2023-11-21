import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//Api key : 884de661
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=884de661";


function App() {
  const [movie, setMovies] = useState([]);
  const [searchM, setSearchM] = useState('')

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovie("supermen");
  } ,[]);
  return (
    <>
      <div className="app">
        <h1>Movie hub</h1>
        <div className="search">
          <input
            placeholder="Search for movies"
            value={searchM}
            onChange={(e) => setSearchM(e.target.value)}
          />
          <img src={SearchIcon} alt="search" onClick={() => {searchMovie(searchM)}} />
        </div>

        {movie?.length > 0 ? (
          <div className="container">
            {
                movie.map((movieItem)=>(
                    <MovieCard movie={movieItem}/>
                ))
            }
          </div>
        ) : (
          <div className="empty">
            <h2>No found the movie.</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
