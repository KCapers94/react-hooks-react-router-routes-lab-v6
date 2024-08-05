import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {

  const [directors, setListofDirectors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/directors")
    .then((r) => r.json())
    .then(data => setListofDirectors(data))
    
  }, [])



  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>
        {directors.map((d) => {
          return (
          <article key={d.id}>
            <h2>{d.name}</h2>
            <ul>
              {d.movies.map((g) => {
                 return <li key={g}>{g}</li>
              })}
            </ul>
            
          </article>
          )
        })}
      </main>
    </>
  );
};

export default Directors;
