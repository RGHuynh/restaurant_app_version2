import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import Restaurant from './components/Pages/Restaurant'
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Restaurant />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
