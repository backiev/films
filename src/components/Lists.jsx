import React, { useState, useEffect } from 'react';
import { CardMovieTest } from './CardMovieTest';

import { getMovie } from '../api/api';


export const  Lists = () => {
    const [arrMovies, setArrMovies] = useState([]);
    const [filter, setFilter] = useState({
        byWhat: 'date'
    });

    // useEffect(() => {
    //     getMovie(setArrMovies);
    // }, []);

    return (
        <div className='lists'>
            <div className="container">
                <h1 className='lists-title'>Lists</h1>
                <div className='lists-filter'>
                    <div>Lists</div>
                    <select name="year" id='year' value={filter.byWhat} onChange={(e) => setFilter({byWhat: e.target.value})}>
                        <option value="date">By Date</option>
                        <option value="count">By Count</option>
                    </select>
                    <div className="lists-filter-by_date"></div>
                    <div className="lists-filter-by_count"></div>
                </div>
                <div className="lists-list">
                    <CardMovieTest />
                    <CardMovieTest />
                    <CardMovieTest />
                    <CardMovieTest />
                    <CardMovieTest />
                    <CardMovieTest />
                    <CardMovieTest />
                    <CardMovieTest />
                    <CardMovieTest />
                </div>
            </div>
        </div>
    )
}
