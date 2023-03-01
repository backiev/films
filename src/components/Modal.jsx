import React from 'react'
// import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createList, addToList } from '../app/ListsSlice';
import { disActivatedModal, clearIdFilm} from '../app/ModalSlice';

import { ModalItem } from './ModalItem';

export const Modal = () => {

    const [inputValue, setInputValue] = useState('');
    const [checkedList, setCheckedList] = useState(1);
    const lists = useSelector(state => state.lists.lists);
    const dispatch = useDispatch();
    const isActivated = useSelector(state => state.modal.modalActive.active);
    const idFilm = useSelector(state => state.modal.modalActive.idFilm);

    const createNewList = () => {
        dispatch(createList(inputValue))
    } 
   
    const addToPickedList = () => {
        if (idFilm >= 0) {
            dispatch(addToList({idList: checkedList, idFilm: idFilm}));
            dispatch(clearIdFilm());
            dispatch(disActivatedModal());
        }
    }

    const closeModal = () => {
        dispatch(disActivatedModal());
    }

    return (
        <div className={isActivated ? "modal active" : "modal"} onClick={closeModal}>
            <div className={isActivated ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                <div className="modal__content-title">Which list do u prefer?</div>
                <div className="modal__content-button">
                    <div className='modal__content-title__block'>Create new List</div>
                    <input type="text" value={inputValue} className="modal-input" placeholder={"Type name of new List..."} onChange={(e) => setInputValue(e.target.value)} />
                    <button onClick={createNewList} className="modal-button">Create List</button>
                </div>
                <div className="modal__content-list">
                    <div className='modal__content-title__block'>Current Lists</div>
                    <div className='modal__content-currentLists'>
                    {lists.map(item => <ModalItem item={item} key={item.index} checkedItem={checkedList} setCheckedItem={setCheckedList} />)}
                    </div>
                    <button onClick={() => addToPickedList() } className="modal-button">Add to this list</button>
                </div>
            </div>
        </div>
    )
}

