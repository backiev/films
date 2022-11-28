import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMovie } from '../api/api';



export const CardList = ({id, index}) => {
  const urlPoster = '/img/woman.jpg';
  const [loadedMovie, setLoadedMovie] = useState({});
  const [imageMovie, setImageMovie] = useState(urlPoster);

  useEffect(() => {
    getMovie({id: id}, setLoadedMovie, setImageMovie);
  }, []);

  console.log(loadedMovie);

  return (
    <div className='yourList-block'>
      <div className="yourList-card">
          <div className='yourList-card__image' style={{backgroundImage: `url(${imageMovie})`}}></div>
          <div className='yourList-card__name'>
            {loadedMovie.name}
            <button className="yourList-delete">Delete</button>
          </div>
      </div>
      <div className="yourList-number">{index + 1}</div>
    </div>
  )
}
