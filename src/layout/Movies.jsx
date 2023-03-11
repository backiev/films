import React, { useState, useEffect } from 'react'
import { CardMovie } from '../components/cards/CardMovie';
import { getMovies } from '../api/api';
import { Modal } from '../components/modals/Modal';
import { Modalinfo } from '../components/modals/ModalInfo';
import { useSelector } from 'react-redux';
import { Select } from '../components/ui/Select';



export const Movies = () => {
    const lists = useSelector(state => state.lists.lists);
    const optionsYears = [
        {value: "2023", valueTag: "2023"},
        {value: "2022", valueTag: "2022"},
        {value: "2021", valueTag: "2021"},
        {value: "2020", valueTag: "2020"},
        {value: "2019", valueTag: "2019"},
        {value: "2018", valueTag: "2018"},
        {value: "2017", valueTag: "2017"},
    ];
    const optionsType = [
        {value: "1", valueTag: "films"},
        {value: "2", valueTag: "tv-series"},
        {value: "3", valueTag: "cartoon"},
        {value: "4", valueTag: "anime"},
        {value: "5", valueTag: "animated-series"},
        {value: "6", valueTag: "tv-show"},
        {value: "7", valueTag: "mini-series"},
    ];

    const [arrMovies, setArrMovies] = useState([]);
    const [filter, setFilter] = useState({
        year: "2022",
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

    // Пагинация перелестывания стр
    const filterSort = (pageItem, value) => {
        return { year: filter.year, type: filter.type, page: pageItem + value, rating: filter.rating };
    }

    // Пагинация знак
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
                    <Select 
                        name={"Year"} options={optionsYears} filter={filter.year} setFilter={setFilter} 
                        setNewFilter={(e) => ({ year: e.target.value, type: filter.type, page: "1", rating: filter.rating })} 
                        classes={{divClass: "movies-filter__type", labelClass: "movies-filter__type-title"}}
                        />
                    <Select 
                        name={"Type"} options={optionsType} filter={filter.type} setFilter={setFilter} 
                        setNewFilter={(e) => ({ year: filter.year, type: e.target.value, page: "1", rating: filter.rating })} 
                        classes={{divClass: "movies-filter__type", labelClass: "movies-filter__type-title"}}
                        />
                    
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
                
                <span className="movies-pag__link" style={{background: "linear-gradient(blue, 10%, pink)"}}>{filter.page}</span>
                
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
