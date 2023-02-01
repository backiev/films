import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


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
                <div className="header__logo">backiev</div>
                <div className="header__list">
                    <div className="header__list-item"><Link to="/">movies</Link></div>
                    <div className="header__list-item"><Link to="/lists">lists</Link></div>
                    <input type="text" className="header__list-input" placeholder='search...'/>
                    <button className="header__list-button" onClick={() => submitHandler()}>Search</button>
                </div>
            </div>
            {/* <div className="header-right">
                <div className="header-profile"><FontAwesomeIcon icon={faUser} /></div>
            </div> */}
        </div>
    </div>
  )
}
