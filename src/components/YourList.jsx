import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { dragDrop, removeList } from '../app/ListsSlice';
import { useParams, redirect, useNavigate, useLocation, Navigate } from "react-router-dom";
import { CardList } from './CardList';
import { Link } from "react-router-dom";



export const YourList = () => {
    
    const [editMode, setEditMode] = useState(false);
    const [currentMovie, setCurrentMovie] = useState(null);
    const [deleted, setDeleted] = useState(false);

    const dispatch = useDispatch();

    const location = useLocation();


    const listId = useParams().listId;
    const listItem = useSelector(state => state.lists.lists[listId]);
    const listValue = listItem.value;
    // console.log(listItem[4], listValue);



    const dragStartHandler = (e, idMovie) => {
        if (editMode) setCurrentMovie(idMovie);
    }
    const dragEndHandler = (e) => {
        // console.log(123);
    }
    const dragOverHandler = (e) => {
        e.preventDefault();
        // console.log(idMovie);
    }
    const dropHandler = (e, idMovie) => {
        e.preventDefault();
        if (editMode) dispatch(dragDrop({indexList: listId, currentMovie: currentMovie, idMovie: idMovie}));
    }


    // Редирект в компонент Lists, там удаление через location
    const  removeCurrentList =  () => {
        setDeleted(true);
    }

    return (
        <div className='yourList'>
            <div className="container">
                <h1 className='yourList-title'>Your list: <span style={{textDecoration: 'underline'}}>{listItem.name}</span></h1>
                <div className='yourList-filter'>
                    <div className='yourList-filter__forwardLink'>
                        <Link to={`/lists`}>Back to Links page</Link>
                    </div>
                    <div className='yourList-filter__title'>Filters</div>
                    <div className="yourList-filter__year">
                        <div className='yourList-filter__labels'>Edit your list somehow u want</div>
                        <div className='yourList-filter__buttons'>
                            <button className='button' onClick={() => editMode ? setEditMode(false) : setEditMode(true)}>Edit</button>
                            <button className='button delete-button' onClick={() => removeCurrentList()}>Delete List</button>
                        </div>
                    </div>
                </div>
                <div className={`yourList-list ${editMode ? "edit" : ""}`}>
                    {listValue.length > 0
                        ? listValue.map((element, index) => <CardList 
                        key={element} 
                        id={element}
                        listId={listId}
                        index={index} 
                        dragStartHandler={dragStartHandler} 
                        dragEndHandler={dragEndHandler} 
                        dragOverHandler={dragOverHandler}
                        dropHandler={dropHandler}
                        editMode={editMode}
                        />)
                        : <span style={{textAlign: 'center', fontSize: '18px', fontWeight: 'bold'}}>Empty list</span>
                    }
                </div>
            </div>
            {deleted ? <Navigate to="/lists" replace state={{from: location, listId: listId}}/> : ' '}
            {/* {error ? <Navigate to="/lists" replace state={{from: location}}/> : ' '} */}
        </div>
    )
}
