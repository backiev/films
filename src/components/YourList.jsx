import React, { useState, useEffect } from 'react';
import { CardMovieTest } from './CardMovieTest';

import { getMovie } from '../api/api';

export const YourList = () => {

    const [arrMovies, setArrMovies] = useState([]);
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
                    <CardMovieTest />
                    <CardMovieTest />
                    <CardMovieTest />
                    <CardMovieTest />
                    <CardMovieTest />
                    <CardMovieTest />


                    {/* {arrMovies.map(movie => <CardMovie key={movie.id} movie={movie} />)} */}

                </div>
            </div>
        </div>
    )
}
