import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ffcbf5f69b3aae455b646368423d5cf9";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=ffcbf5f69b3aae455b646368423d5cf9&query=";


function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
     getMovies(FEATURED_API)
   
  }, []);
  const getMovies = (API) => {
     fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
    })
  }

  

  const handleOnSubmit = (e) => {
    e.preventDefault();

    //if the search term exist fetch from the api the movies which there is in the searchTearm
    if(searchTerm) {

      getMovies(SEARCH_API + searchTerm)
      
       setSearchTerm('')
      }

  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);

  }

  return (
    <>
   
      <header>
        <form onSubmit={handleOnSubmit}>
          <input 
            className="search" 
            type="search" 
            value= {searchTerm}
            placeholder="Search..." 
            onChange= {handleOnChange}
            />


        </form>  
      </header>
      
       <div className="movie-container">    
          {movies.length > 0 && movies.map((movie) =>
          <Movie key={movie.id} {...movie} />//with ...movies we get all the properties and then we can destructure each we want

      
    </div>
    </>
  );
}

export default App;
