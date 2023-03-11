import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { addToLastList, removeFromList } from '../../app/ListsSlice';


export const CardMovie = ({movie, setActiveInfo, setActiveLists, iconsHurts, setIconsHurts}) => {
  

  const dispatch = useDispatch();
  const countLists = useSelector(state => state.lists.lists.length);
  const lists = useSelector(state => state.lists.lists);

  //? IMG
  const urlPoster = movie.poster ? movie.poster.url : '/img/woman.jpg';
  //alternativeName
  const nameMovie = movie.name ? movie.name : movie.alternativeName;



  //* Делаем один массив из всех избранных фильмов
  const allFavFilms = [];
  lists.map(item => item.value.find(movieItem => movieItem === movie.id) 
    ? allFavFilms.push(true) 
    : allFavFilms.push(false));

  
  const firstIcon = iconsHurts.find(item => item === movie.id) ? "iconHeartRed" : "iconHeartWhite";

  const [toggleIcon, setToggleIcon] = useState(firstIcon);

  // console.log(iconsHurts);


  // FIX: рендер сердечек при нажатии на листы
  const clickOnHeart = (target) => {
    if (target === "iconHeartWhite") {
      // проверка есть ли вообще листы у пользователя
      if (!countLists) {
        setActiveLists({visible: true, movieInfo: movie, allFavFilms: allFavFilms})
      } else {
        dispatch(addToLastList(movie.id));
      }
      // Иконка сердца меняет класс и меняется массив в State в компоненте Movies
      setToggleIcon("iconHeartRed");
      setIconsHurts([...iconsHurts, movie.id]);
    } else {

      // Индекс последнего листа избранного фильма
      let lastFavList = 0;
      for(let i = 0; i <= allFavFilms.length; i++) {
        if (allFavFilms[i] === true) {
          lastFavList = i;
        }
      }

      // Индекс избранного фильма в листе
      const indexMovieInList = lists[lastFavList].value.indexOf(movie.id);

      dispatch(removeFromList({idList: lastFavList, idMovie: indexMovieInList}))
      setToggleIcon("iconHeartWhite");
    }
  }

  return (
    <>
      <div className="movies-card">
          <div className='movies-card__image' style={{backgroundImage: `url(${urlPoster})`}}></div>
          <div className='movies-card__name'>
            <div className='movies-card__name-title'>{nameMovie}</div>
            <div className='movies-card__name-icons'>
              <FontAwesomeIcon icon={faCircleInfo} className="iconInfo" onClick={() => setActiveInfo({visible: true, movieInfo: movie})}/>
              <FontAwesomeIcon icon={faPlus} className="iconPlus" onClick={() => setActiveLists({visible: true, movieInfo: movie, allFavFilms: [...allFavFilms]})}/> 
              <FontAwesomeIcon icon={faHeart} className={toggleIcon} onClick={(e) => clickOnHeart(e.target.closest("svg").classList[2]) } />
            </div>
          </div>
      </div>
    </>
  )
}
