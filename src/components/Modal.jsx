import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createList, addToList, removeFromList } from '../app/ListsSlice';

import { ModalItem } from './ModalItem';

export const Modal = ({activeLists, setActiveLists, iconsHurts, setIconsHurts}) => {

    const closeModal = () => {
        setActiveLists({
            visible: false,
            movieInfo: {},
            allFavFilms: [],
        });
    }
    const idFilm = activeLists.movieInfo.id;
    const favFilms = activeLists.allFavFilms;

    const [inputValue, setInputValue] = useState('');
    const [checkedList, setCheckedList] = useState([]);
    const lists = useSelector(state => state.lists.lists);
    const dispatch = useDispatch();


    const createNewList = () => {
        const newInputValue = inputValue.trim().length;
        if (newInputValue) {
            dispatch(createList(newInputValue));
            setCheckedList([...checkedList, false]);
            setInputValue('');
        } else {
            setInputValue('Пустая строка!');
        }
    } 
   

    const addToPickedList = (index) => {
        dispatch(addToList({idList: index, idFilm: idFilm}));
    }
    const removeFromPickedList = (index) => {
        const indexMovieInList = lists[index].value.indexOf(idFilm);
        dispatch(removeFromList({idList: index, idMovie: indexMovieInList}));
    }

    const submitButton = () => {
        if (idFilm >= 0) {
            // массив из избранных фильмов до нажатия на чекбокс
            const allFavFilms = [];
            lists.map(item => item.value.find(movieItem => movieItem === idFilm) 
                ? allFavFilms.push(true) 
                : allFavFilms.push(false));

            // проверка на какие именно нажал чекбоксы пользователь
            for(let i = 0; i < lists.length; i++) {
                if (checkedList[i] === true && allFavFilms[i] === false) {
                    addToPickedList(i);
                    setIconsHurts([...iconsHurts, idFilm]);
                }
                if (checkedList[i] === false && allFavFilms[i] === true) {
                    removeFromPickedList(i);
                }
            }
            closeModal();
            
        }
    }
    useEffect(() => {
        setCheckedList([...favFilms]);
    }, [activeLists]);
    
    return (
        <div className={activeLists.visible ? "modal active" : "modal"} onClick={closeModal}>
            <div className={activeLists.visible ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                <div className="modal__content-title">Which list do u prefer?</div>
                <div className="modal__content-button">
                    <div className='modal__content-title__block'>Create new List</div>
                    <input type="text" value={inputValue} className="modal-input" placeholder={"Type name of new List..."} onChange={(e) => setInputValue(e.target.value)} />
                    <button onClick={createNewList} className="modal-button">Create List</button>
                </div>
                <div className="modal__content-list">
                    <div className='modal__content-title__block'>Current Lists</div>
                    <div className='modal__content-currentLists'>
                        {lists.map((item, index) => 
                                <ModalItem item={item} key={item.index} checkedList={checkedList} setCheckedList={setCheckedList} index={index} />
                        )}
                    </div>
                    <button onClick={() => submitButton() } className="modal-button">Add to this list</button>
                </div>
            </div>
        </div>
    )
}

