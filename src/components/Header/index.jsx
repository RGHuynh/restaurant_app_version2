import React from 'react';
import logo from '../../assets/pictures/logo.svg';
import './index.css';

export default function HeaderComponent() {
    return(
        <header className="section header-wrapper">
            <img className="logo__size logo__position" src={logo} ></img>
            <form id="restaurant-search-form" className="restaurant-search-form__position">
                <div className="input-wrapper">
                    <input type="text" className="form-input" placeholder="Find"></input>
                    <input type="text" className="form-input" placeholder="Near"></input>
                </div>

                <br></br>
                <button form="restaurant-search-form" className="btn btn-primary btn__color btn__position">Search</button>
            </form>
        </header>
    );
}

