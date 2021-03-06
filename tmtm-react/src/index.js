import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import MainComponent from './components/MainComponent';
import * as serviceWorker from './serviceWorker';
import Header from './components/Header'
import EyeCatch from './components/Eyecatch'

ReactDOM.render(
    <div>
        <MainComponent />
        <Header/>
        <EyeCatch/>
    </div>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
