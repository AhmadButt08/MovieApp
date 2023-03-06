
import { useEffect, useState } from 'react';
import './App.css';
import  SearchIcon from "./search.svg";
import MovieCard from './MovieCard';


//366aa7b
const API_URL = "http://www.omdbapi.com?apikey=366aa7b";
 const App=()=>{
  //using usestate
  const[movies,setmovies]=useState([]);
  const[searchterm,setsearchterm]=useState('');
  //use hook useeffect
  useEffect(() => {
    searchMovies("Batman");
  }, []);
  
  //function for moving searching
  const searchMovies=async (title)=>{
    const response= await fetch(`${API_URL}&s=${title}`);
    const data= await response.json();
    setmovies(data.Search)

  };




  return (
    <div className="App">
         <h1> MovieLand</h1>


      <div className="search"> 
      <input
      placeholder="Search for movie"
      value={searchterm}
      onChange={(e)=> setsearchterm(e.target.value)}
      />
      <img
      src={ SearchIcon}
      alt ="search"
      onClick={()=>searchMovies(searchterm)}></img>
      </div>
{
  movies.length>0
  ?(<div className='container'>
  {movies.map((movie)=> (
    <MovieCard movie={movie}/>
  ))}
  
  </div>
):
 <div className='empty'>
  <h3> No movies found</h3>

 </div>
}

    </div>    );
}

export default App;
