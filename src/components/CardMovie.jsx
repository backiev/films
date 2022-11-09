import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faS } from '@fortawesome/free-solid-svg-icons';
import { Modal } from './Modal';

import { useDispatch, useSelector } from 'react-redux';
import { activatedModal, disActivatedModal } from '../app/ModalSlice';
import { addToLastList } from '../app/ListsSlice';




export const CardMovie = ({movie}) => {

  const dispatch = useDispatch();
  const countLists = useSelector(state => state.lists.lists.length);
  const lists = useSelector(state => state.lists.lists);
  


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

  const clickOnHeart = (target) => {
    setNeededIcon(target);
    if (!countLists) {
      dispatch(activatedModal(movie.id));
    } else {
      dispatch(addToLastList(movie.id));
    }
  }

  return (
    <>
      <div className="movies-card">
          <div className='movies-card__image' style={{backgroundImage: `url(${urlPoster})`}}></div>
          <div className='movies-card__name'>
            {nameMovie}  
            <FontAwesomeIcon icon={faPlus} className="iconPlus" onClick={() => dispatch(activatedModal(movie.id))}/> 
            <FontAwesomeIcon icon={faHeart} className={toggleIcon} onClick={(e) => clickOnHeart(e.target.closest("svg").classList[2]) } />
          </div>
      </div>
      
    </>
  )
}
