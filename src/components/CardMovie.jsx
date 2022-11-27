import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { activatedModal } from '../app/ModalSlice';
import { addToLastList, removeFromList } from '../app/ListsSlice';


export const CardMovie = ({movie, movieIndex}) => {

  const dispatch = useDispatch();
  const countLists = useSelector(state => state.lists.lists.length);
  const lists = useSelector(state => state.lists.lists);

  // Делаем один массив из всех избранных фильмов
  let allIdFilmsFromLists = [];
  lists.map(item => allIdFilmsFromLists.push(item.value));

  const urlPoster = movie.poster ? movie.poster.url : '/img/woman.jpg';
  //alternativeName
  const nameMovie = movie.name ? movie.name : movie.alternativeName;

  // Проверяем является ли фильм избранным
  const firstIcon = allIdFilmsFromLists.flat().find(item => item === movie.id);
  const firstFirstIcon = firstIcon ? "iconHeartRed" : "iconHeartWhite";

  const [toggleIcon, setToggleIcon] = useState(firstFirstIcon);


  // FIX: рендер сердечек при нажатии на листы
  const clickOnHeart = (target) => {
    if (target === "iconHeartWhite") {
      // проверка есть ли вообще листы у пользователя
      if (!countLists) {
        dispatch(activatedModal(movie.id));
      } else {
        dispatch(addToLastList(movie.id));
      }
      setToggleIcon("iconHeartRed");
    } else {
      allIdFilmsFromLists.map((item, index) => (
        item.map((e, indexE) => e === movie.id ? dispatch(removeFromList({indexList: index, idMovie: indexE})) : "")
      ));
      setToggleIcon("iconHeartWhite");
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
