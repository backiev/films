import React, { useState, useEffect } from 'react'
import { CardMovie } from './CardMovie';

import { getMovies } from '../api/api';

import { Modal } from './Modal';
import { Modalinfo } from './ModalInfo';

import { useSelector } from 'react-redux';



export const Movies = () => {
    const lists = useSelector(state => state.lists.lists);

    const [arrMovies, setArrMovies] = useState([]);
    const [filter, setFilter] = useState({
        year: "2020-2023",
        type: "1",
        page: "1",
        rating: "7-10"
    });
    
    // Модальное окно для добавления листа
    const [activeLists, setActiveLists] = useState({
        visible: false,
        movieInfo: {},
        allFavFilms: [],

    });

    // Модальное окно для информации фильма
    const [activeInfo, setActiveInfo] = useState({
        visible: false,
        movieInfo: {},
    });

    // Иконки сердца на карточке фильма
    const hurtsArray = [];
    lists.map(item => item.value.map(movieIndex => hurtsArray.push(movieIndex)));
    const [iconsHurts, setIconsHurts] = useState([...new Set(hurtsArray)]);

    const filterSort = (pageItem, value) => {
        return { year: filter.year, type: filter.type, page: pageItem + value, rating: filter.rating };
    }

    const valueNav = (page, value) => {
        if (page === 1 && value === -1) {
            return "<"
        } else {
            return page + value;
        }
    }

    useEffect(() => {
        getMovies(filter, setArrMovies);
    }, [filter]);

  return (
    <>
    <div className='movies'>
        <div className="container">
            <h1 className='movies-title'>Movies</h1>
            <div className='movies-filter'>
                <div className='movies-filter__title'>Filters</div>
                <div className='movies-filter__buttons'>
                    <div className="movies-filter__year">
                        <label htmlFor="year" className='movies-filter__year-title'>Year</label>
                        <select name="year" id='year' value={filter.year} onChange={(e) => setFilter({ year: e.target.value, type: filter.type, page: "1", rating: filter.rating })}>
                            <option value="2023">2023</option>
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
                        <label htmlFor="type" className='movies-filter__type-title'>Type</label>
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
            </div>
            <div className="movies-list">

                {arrMovies.map((movie) => 
                    <CardMovie 
                        key={movie.id} 
                        movie={movie}
                        setActiveInfo={setActiveInfo}
                        setActiveLists={setActiveLists}
                        iconsHurts={iconsHurts}
                        setIconsHurts={setIconsHurts}
                    />
                )}

            </div>
            <ul className="movies-pag">
                
                <span className="movies-pag__link" 
                    onClick={() => parseInt(filter.page) !== 1 ? setFilter(filterSort(parseInt(filter.page), -1)) : ' '}>
                        {valueNav(parseInt(filter.page), -1)}
                </span>
                
                <span className="movies-pag__link">{filter.page}</span>
                
                <span className="movies-pag__link" 
                    onClick={() => setFilter(filterSort(parseInt(filter.page), +1))}>
                        {valueNav(parseInt(filter.page), 1)}
                </span>
                
            </ul>
        </div>
    </div>
    <Modalinfo activeInfo={activeInfo} setActiveInfo={setActiveInfo} />
    <Modal activeLists={activeLists} setActiveLists={setActiveLists} iconsHurts={iconsHurts} setIconsHurts={setIconsHurts}/>
    </>
  )
}
