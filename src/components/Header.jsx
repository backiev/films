import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'


export const Header = () => {
  return (
    <div className='header'>
        <div className="container">
            <div className="header-left">
                <div className="header__logo">backiev</div>
                <div className="header__list">
                    <div className="header__list-item"><a href="">movies</a></div>
                    <div className="header__list-item"><a href="">lists</a></div>
                    <input type="text" className="header__list-input" placeholder='search...' />
                </div>
            </div>
            <div className="header-right">
                <div className="header-profile"><FontAwesomeIcon icon={faUser} /></div>
            </div>
        </div>
    </div>
  )
}
