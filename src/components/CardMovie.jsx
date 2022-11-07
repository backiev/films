import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faS } from '@fortawesome/free-solid-svg-icons';
import { Modal } from './Modal';



export const CardMovie = ({movie}) => {

  const urlPoster = movie.poster ? movie.poster.url : '/img/woman.jpg';
  //alternativeName
  const nameMovie = movie.name ? movie.name : movie.alternativeName;
  <FontAwesomeIcon icon="fa-solid fa-heart" />
  const [toggleIcon, setToggleIcon] = useState('iconHeartWhite');
  

  const setNeededIcon = (target) => {
    if (target === "iconHeartWhite") {
      setToggleIcon("iconHeartRed");
    } else {
      setToggleIcon("iconHeartWhite");
    }

  }

  return (
    <>
      <div className="movies-card">
          <div className='movies-card__image' style={{backgroundImage: `url(${urlPoster})`}}></div>
          <div className='movies-card__name'>{nameMovie}  <FontAwesomeIcon icon={faPlus} /> <FontAwesomeIcon icon={faHeart} className={toggleIcon} onClick={(e) => setNeededIcon(e.target.closest("svg").classList[2]) } /> </div>
      </div>
      
    </>
  )
}
