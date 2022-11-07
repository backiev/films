import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createList } from '../app/ListsSlice';
import { ModalItem } from './ModalItem';

export const Modal = ({active, setActive}) => {

    const [inputValue, setInputValue] = useState('');
    const [checkedList, setCheckedList] = useState(1);
    const lists = useSelector(state => state.lists.lists);
    const dispatch = useDispatch();
    console.log(lists);

    const createNewList = () => {
        dispatch(createList(inputValue))
    }

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
            <div className="modal__content-title">Which list do u prefer?</div>
            <div className="modal__content-button">
                <button onClick={createNewList} >create list</button>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />    
            </div>
            <div className="modal__content-list">
                {lists.map(item => <ModalItem item={item} key={item.index} checkedItem={checkedList} setCheckedItem={setCheckedList} />)}
                <button>Add to this list</button>
            </div>
        </div>
    </div>
  )
}

