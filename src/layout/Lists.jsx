import React, { useState } from 'react';
import { ListMovie } from '../components/cards/ListMovie';
import { Select } from '../components/ui/Select';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export const  Lists = () => {
    const lists = useSelector(state => state.lists.lists);
    const [filter, setFilter] = useState({
        byWhat: 'index',
    });
    const optionsType = [
        {value: "index", valueTag: "By Date Added"},
        {value: "count", valueTag: "By Count"},
        {value: "name", valueTag: "By Name"},
    ];


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


    return (
        <div className='lists'>
            <div className="container">
                <h1 className='lists-title'>Lists</h1>
                <div className='lists-filter'>
                    <div>Filters</div>
                    <Select 
                        name={"Filter"} options={optionsType} filter={filter.type} setFilter={setFilter} 
                        setNewFilter={(e) => ({byWhat: e.target.value})} 
                        classes={{divClass: "lists-filter__sort", labelClass: "lists-filter__byWhat"}}/>
                </div>
                <div className="lists-list">

                    {[...lists]
                        .sort((a, b) => sortByName(a, b, filter.byWhat))
                        .map(list => <Link to={`/yourlist/${list.index}`} className="lists-card" key={list.index}><ListMovie key={list.index} list={list} /></Link>)}
                </div>
            </div>
        </div>
    )
}
