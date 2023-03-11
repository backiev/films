import React, {useState, useEffect} from 'react';
import { getMovie } from '../../api/api';

export const ListMovie = ({list}) => {

  const listMovies = list.value;
  let lastMovieAdded;
  const urlPoster = ' ';

  if (listMovies[0]) lastMovieAdded = listMovies[listMovies.length-1];


  const [filter, setFilter] = useState({
    id: lastMovieAdded,
  });
  // setFilter(lastMovieAdded);
  const [loadedMovie, setLoadedMovie] = useState({});
  const [imageMovie, setImageMovie] = useState(urlPoster);


  // const listMovies = list.value;

  useEffect(() => {
    if (lastMovieAdded) getMovie(filter, setLoadedMovie, setImageMovie);
  }, []);

  return (
    <div className="movies-card list-card">
        <div className='movies-card__image' style={{backgroundImage: `url(${imageMovie})`}}></div>
        <div className='movies-card__name'>{list.name}</div>
    </div>
  )
}
