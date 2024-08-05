import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";




function Movie() {

const [movies, setMovies] = useState({genres:[]})
const params = useParams();
const movieId = params.id

useEffect(() => {
  fetch(`http://localhost:4000/movies/${movieId}`)
  .then((r) => r.json())
  .then(data => setMovies(data))
  .catch(error => console.error(error))
}, [movieId])

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
          <div>
            <h1>{movies.title}</h1>
            <p>{movies.time}</p>
            {movies.genres.map((genre) => (
              <span key={genre}>{genre}</span>
          ))}
          </div> 

        
      </main>
    </>
  );
};

export default Movie;
