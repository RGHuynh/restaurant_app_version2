import React from 'react';

import './headercomponent.css';

export default function HeaderComponent() {
    return(
        <div className="header--wrapper">
            <form id="restaurant-search-form">
                <input type="text" className="form-input"></input>
                <button form="btn btn-primary restaurant-search-form">SEARCH</button>
            </form>
        </div>
    );
}

