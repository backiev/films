import React, { useState } from 'react';
import { ListMovie } from './ListMovie';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export const  Lists = () => {
    const lists = useSelector(state => state.lists.lists);
    const [filter, setFilter] = useState({
        byWhat: 'index'
    });


    return (
        <div className='lists'>
            <div className="container">
                <h1 className='lists-title'>Lists</h1>
                <div className='lists-filter'>
                    <div>Lists</div>
                    <select name="year" id='year' value={filter.byWhat} onChange={(e) => setFilter({byWhat: e.target.value})}>
                        <option value="index">By Index</option>
                        <option value="count">By Count</option>
                    </select>
                    <div className="lists-filter-by_date"></div>
                    <div className="lists-filter-by_count"></div>
                </div>
                <div className="lists-list">
                    {lists.map(list => <Link to={`/yourlist/${list.index}`} className="movies-card" key={list.index}><ListMovie key={list.index} list={list} /></Link>)}
                </div>
            </div>
        </div>
    )
}