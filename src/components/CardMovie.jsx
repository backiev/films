import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { addToLastList, removeFromList } from '../app/ListsSlice';
import { useEffect } from 'react';


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
  // console.log(allFavFilms);
  // setIconsHurts(allFavFilms);
  const firstIcon = allFavFilms.find(item => item === true) ? "iconHeartRed" : "iconHeartWhite";

  const [toggleIcon, setToggleIcon] = useState(firstIcon);




  // FIX: рендер сердечек при нажатии на листы
  const clickOnHeart = (target) => {
    if (target === "iconHeartWhite") {
      // проверка есть ли вообще листы у пользователя
      if (!countLists) {
        setActiveLists({visible: true, movieInfo: movie, allFavFilms: allFavFilms})
      } else {
        dispatch(addToLastList(movie.id));
      }
      setToggleIcon("iconHeartRed");
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

  // useEffect(() => {
  //   // setIconsHurts([...allFavFilms]);
  // }, [iconsHurts]);

  return (
    <>
      <div className="movies-card">
          <div className='movies-card__image' style={{backgroundImage: `url(${urlPoster})`}}></div>
          <div className='movies-card__name'>
            <div className='movies-card__name-title'>{nameMovie}</div>
            <div className='movies-card__name-icons'>
              <FontAwesomeIcon icon={faCircleInfo} className="iconInfo" onClick={() => setActiveInfo({visible: true, movieInfo: movie})}/>
              <FontAwesomeIcon icon={faPlus} className="iconPlus" onClick={() => setActiveLists({visible: true, movieInfo: movie, allFavFilms: allFavFilms})}/> 
              <FontAwesomeIcon icon={faHeart} className={toggleIcon} onClick={(e) => clickOnHeart(e.target.closest("svg").classList[2]) } />
            </div>
          </div>
      </div>
    </>
  )
}
