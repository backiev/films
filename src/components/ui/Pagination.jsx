import React from 'react'

export const Pagination = ({filter, setFilter, setNewFilter}) => {
    // Пагинация перелестывания стр
    const filterSort = (pageItem, value) => {
        return setNewFilter(pageItem, value);
    }

    // Пагинация знак
    const valueNav = (page, value) => {
        if (page === 1 && value === -1) {
            return "<"
        } else {
            return page + value;
        }
    }
  return (
    <ul className="movies-pag">
                
        <span className="movies-pag__link" 
            onClick={() => parseInt(filter) !== 1 ? setFilter(filterSort(parseInt(filter), -1)) : ' '}>
                {valueNav(parseInt(filter), -1)}
        </span>
        
        <span className="movies-pag__link" style={{background: "linear-gradient(blue, 10%, pink)"}}>{filter}</span>
        
        <span className="movies-pag__link" 
            onClick={() => setFilter(filterSort(parseInt(filter), +1))}>
                {valueNav(parseInt(filter), 1)}
        </span>
        
    </ul>
  )
}
