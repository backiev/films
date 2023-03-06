import React, { useState, useEffect } from 'react';
import { ListMovie } from './ListMovie';
import { useSelector, useDispatch } from 'react-redux';
import { removeList } from '../app/ListsSlice';
import { Link, useLocation } from "react-router-dom";

export const  Lists = () => {
    const lists = useSelector(state => state.lists.lists);
    const [filter, setFilter] = useState({
        byWhat: 'index',
    });

    const location = useLocation();
    const dispatch = useDispatch();


    // Сортировка по фильтру
    const sortByName = (a, b, currentFilter) => {
        if (currentFilter === 'index') {
            return;
        } else if (currentFilter === 'name') {
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        } else if (currentFilter === 'count') {
            return b.value.length - a.value.length;
        }
    }

    // Если произошел редирект с YourList в Lists - удаление выбранного листа
    useEffect(() => {
        if (location.state?.from) {
            dispatch(removeList(location.state.listId));
            window.history.replaceState({}, document.title);
        }
    }, [])
    

    return (
        <div className='lists'>
            <div className="container">
                <h1 className='lists-title'>Lists</h1>
                <div className='lists-filter'>
                    <div>Filters</div>
                    <div className='lists-filter__sort'>
                        <label htmlFor="byWhat" className='lists-filter__byWhat'>Year</label>
                        <select name="byWhat" id='byWhat' value={filter.byWhat} onChange={(e) => setFilter({byWhat: e.target.value})}>
                            <option value="index">By Index</option>
                            <option value="count">By Count</option>
                            <option value="name">By Name</option>
                        </select>
                    </div>
                </div>
                <div className="lists-list">

                    {[...lists]
                        .sort((a, b) => sortByName(a, b, filter.byWhat))
                        .map(list => <Link to={`/yourlist/${list.index}`} className="movies-card" key={list.index}><ListMovie key={list.index} list={list} /></Link>)}
                </div>
            </div>
        </div>
    )
}
