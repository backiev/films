import React from 'react';
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
    const currentLink = useLocation().pathname;
    const submitHandler = () => {
        if (currentLink === "/") {
            console.log(123);
        }
        
    }

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
            {/* <div className="header-right">
                <div className="header-profile"><FontAwesomeIcon icon={faUser} /></div>
            </div> */}
        </div>
    </div>
  )
}
