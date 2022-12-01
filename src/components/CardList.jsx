import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMovie } from '../api/api';



export const CardList = ({id, index,editMode, dragStartHandler, dragEndHandler, dragOverHandler, dropHandler}) => {
  const urlPoster = '/img/woman.jpg';
  const [loadedMovie, setLoadedMovie] = useState({});
  const [imageMovie, setImageMovie] = useState(urlPoster);

  useEffect(() => {
    getMovie({id: id}, setLoadedMovie, setImageMovie);
  }, []);

  return (
    <div className='yourList-block' 
      draggable={(editMode)}
      onDragStart={(e) => dragStartHandler(e, id)}
      onDragLeave={(e) => dragEndHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, id)}

    >
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
