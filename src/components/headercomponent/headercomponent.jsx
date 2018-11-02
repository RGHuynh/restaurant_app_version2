import React from 'react';
import logo from '../../assets/pictures/logo.svg';

import './headercomponent.css';

export default function HeaderComponent() {
    return(
        <div className="header--wrapper">
            <img className="logo__size logo__position" src={logo} ></img>
            <form id="restaurant-search-form" className="restaurant-search-form__position">
                <input type="text" className="form-input"></input>
                <br></br>
                <button form="restaurant-search-form" className="btn btn-primary btn__color btn__position">SEARCH</button>
            </form>
        </div>
    );
}

