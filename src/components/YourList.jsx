import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { dragDrop } from '../app/ListsSlice';
import { useParams } from "react-router-dom";
import { CardList } from './CardList';
import { Link } from "react-router-dom";



export const YourList = () => {
    
    const dispatch = useDispatch();

    const listId = useParams().listId;
    const listValue = useSelector(state => state.lists.lists[listId].value);

    // const [arrMovies, setArrMovies] = useState([]);
    const [filter, setFilter] = useState({
        byWhat: 'yourOwn'
    });
    const [editMode, setEditMode] = useState(false);
    const [currentMovie, setCurrentMovie] = useState(null);

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

    return (
        <div className='yourList'>
            <div className="container">
                <h1 className='yourList-title'>Your list: 'My list'</h1>
                <div className='yourList-filter'>
                    <div className='yourList-filter__forwardLink'>
                        <Link to={`/lists`}>Back to Links page</Link>
                    </div>
                    <div className='yourList-filter__title'>Filters</div>
                    <div className="yourList-filter__year">
                        <div className='yourList-filter__labels'>Edit your list somehow u want</div>
                        <button className='button' onClick={() => editMode ? setEditMode(false) : setEditMode(true)}>Edit</button>
                    </div>
                </div>
                <div className={`yourList-list ${editMode ? "edit" : ""}`}>
                    {listValue.map((element, index) => <CardList 
                        key={element} 
                        id={element}
                        listId={listId}
                        index={index} 
                        dragStartHandler={dragStartHandler} 
                        dragEndHandler={dragEndHandler} 
                        dragOverHandler={dragOverHandler}
                        dropHandler={dropHandler}
                        editMode={editMode}
                        />)}
                </div>
            </div>
        </div>
    )
}
