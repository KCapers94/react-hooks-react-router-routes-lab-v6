import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {

  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then((r) => r.json())
    .then(data => setActors(data))

    
  }, [])



  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Actor info here! */}
        <h1>Actors Page</h1>
        {actors.map((actor) => {
          return (<article key={actor.id} >
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((a) => {
               return <li key={a}>{a}</li>
            })}
            </ul>
          </article>
          )
        })}
      </main>
    </>
  );
};

export default Actors;
