import React, { useState, useEffect } from 'react'
import { CardMovie } from './CardMovie';

import { getMovies } from '../api/api';

import { Modal } from './Modal';


export const Movies = () => {
    const [arrMovies, setArrMovies] = useState([]);
    const [filter, setFilter] = useState({
        year: "2020-2022",
        type: "1",
        page: "2",
        rating: "7-10"
    });

    useEffect(() => {
        getMovies(filter, setArrMovies);
    }, [filter]);

  return (
    <>
    <div className='movies'>
        <div className="container">
            <h1 className='movies-title'>Movies</h1>
            <div className='movies-filter'>
                <div >Filters</div>
                <div className="movies-filter__year">
                    <label htmlFor="year">Year</label>
                    <select name="year" id='year' value={filter.year} onChange={(e) => setFilter({ year: e.target.value, type: filter.type, page: "1", rating: filter.rating })}>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                    </select>
                </div>
                <div className="movies-filter__type">
                    <label htmlFor="type">type</label>
                    <select name="type" id='type' value={filter.type} onChange={(e) => setFilter({ year: filter.year, type: e.target.value, page: "1", rating: filter.rating })}>
                        <option value="1">films</option>
                        <option value="2">tv-series</option>
                        <option value="3">cartoon</option>
                        <option value="4">anime</option>
                        <option value="5">animated-series</option>
                        <option value="6">tv-show</option>
                        <option value="7">mini-series</option>
                    </select>
                </div>

            </div>
            <div className="movies-list">

                {arrMovies.map((movie, index) => <CardMovie key={movie.id} movie={movie} movieIndex={index}/>)}

            </div>
            <ul className="movies-pag">
                    <li><span className="movies-pag__link" onClick={() => setFilter({ year: filter.year, type: filter.type, page: parseInt(filter.page) - 1, rating: filter.rating })}>{parseInt(filter.page) - 1 }</span></li>
                    <li><span className="movies-pag__link">{filter.page}</span></li>
                    <li><span className="movies-pag__link" onClick={() => setFilter({ year: filter.year, type: filter.type, page: parseInt(filter.page) + 1, rating: filter.rating })}>{parseInt(filter.page) + 1}</span></li>
            </ul>
        </div>
    </div>
    <Modal />
    </>
  )
}
