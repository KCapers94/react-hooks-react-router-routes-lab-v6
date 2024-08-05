import {Link} from 'react-router-dom';
import React from "react"
import Movie from '../pages/Movie';

function MovieCard({title,id}) {
  
  return (
    <article>
        <h2>{title}</h2>
        {/* What should go here? */}
    
          <Link to={`/movie/${id}`}>View Info</Link>

    </article>
  );
};

export default MovieCard;