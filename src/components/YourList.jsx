import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import { useParams } from "react-router-dom";
import { CardList } from './CardList';


import { getMovie } from '../api/api';


export const YourList = () => {
    const listId = useParams().listId;
    const listValue = useSelector(state => state.lists.lists[listId].value);
    console.log(listValue);
    // const [arrMovies, setArrMovies] = useState([]);
    const [filter, setFilter] = useState({
        byWhat: 'yourOwn'
    });

    return (
        <div className='yourList'>
            <div className="container">
                <h1 className='yourList-title'>Your list: 'My list'</h1>
                <div className='yourList-filter'>
                    <div>Filters</div>
                    <div className="yourList-filter__year">
                        <select name="" id='year' value={filter.byWhat} onChange={(e) => setFilter({byWhat: e.target.value})}>
                            <option value="date">By Date</option>
                            <option value="rating">By Rating</option>
                            <option value="yourOwn">By Your Own opinion</option>
                        </select>
                    </div>
                </div>
                <div className="yourList-list">
                    {listValue.map(element => <CardList key={element} index={element}/>)}
                </div>
            </div>
        </div>
    )
}
