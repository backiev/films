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
                    <button onClick={createNewList} >create list</button>
                    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />    
                </div>
                <div className="modal__content-list">
                    {lists.map(item => <ModalItem item={item} key={item.index} checkedItem={checkedList} setCheckedItem={setCheckedList} />)}
                    <button onClick={() => addToPickedList() }>Add to this list</button>
                </div>
            </div>
        </div>
    )
}

