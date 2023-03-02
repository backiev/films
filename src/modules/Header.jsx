import React from 'react';
import { Link } from "react-router-dom";

export const Header = () => {

  return (
    <div className='header'>
        <div className="container">
            <div className="header-left">
                <div className="header__logo">FavMovies</div>
                <div className="header__list">
                    <div className="header__list-item"><Link to="/">Movies</Link></div>
                    <div className="header__list-item"><Link to="/lists">Lists</Link></div>
                </div>
            </div>
        </div>
    </div>
  )
}
