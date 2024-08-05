import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {

  const [movieList, setMovieList] = useState([])
  console.log(movieList)

  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then((res) => res.json())
    .then((data) =>  setMovieList(data))
    .catch(error => console.error(error))

  }, []);

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {/* Info goes here! */}
        {movieList.map((movie) => {
          return <MovieCard key={movie.id} title={movie.title} id={movie.id} />
        })}
      </main>
    </>
  );
};

export default Home;
