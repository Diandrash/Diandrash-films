import { useEffect, useState } from 'react';
import './App.css';
import { getMovieData, searchMovie } from "./api"

function App() {
  const [popularMovie, setPopularMovie] = useState([])

  useEffect(() => {
    getMovieData().then((result) => {
      setPopularMovie(result)
    })
  }, [])

  const inputHandler = async (e) => {
    if (e.target.value.length > 3) {
      const result = await searchMovie(e)
      setPopularMovie(result)
      console.log(result);
    } else if (e.target.value.length < 2) {
      getMovieData().then((result) => {
        setPopularMovie(result)
      })
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Diandrash Films</h3>
        <input type="text" className='Input-search' placeholder='Search your favourite Films' onChange={inputHandler}/>
        <div className="App-container">

          {popularMovie.map((movie, id) => {
            return(
              <div className="App-wrapper" key={id}>
                <div className="title">{movie.original_title}</div>
                <img className="Image" src={`${process.env.REACT_APP_IMAGEURL}/${movie.poster_path}`} alt=''></img>
                <div className="Date">Release on {movie.release_date}</div>
                <div className="Rating">Ratings {movie.vote_average}</div>
              </div>
            )
          })}


        </div>
      </header>
    </div>
  );
}

export default App;
