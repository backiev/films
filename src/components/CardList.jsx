import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMovie } from '../api/api';



export const CardList = ({index}) => {
  const urlPoster = '/img/woman.jpg';
  const [loadedMovie, setLoadedMovie] = useState({});
  const [imageMovie, setImageMovie] = useState(urlPoster);

  useEffect(() => {
    getMovie({id: index}, setLoadedMovie, setImageMovie);
  }, []);

  console.log(loadedMovie);

  return (
    <>
      <div className="movies-card">
          <div className='movies-card__image' style={{backgroundImage: `url(${imageMovie})`}}></div>
          <div className='movies-card__name'>
            {loadedMovie.name}  
          </div>
      </div>
    </>
  )
}
