import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux'
import store from './redux/store.js'

import Web from './routes/web';



if (document.getElementById('app')) {
    ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>            
            <Web />
        </BrowserRouter>    
    </Provider>
    , document.getElementById('app'));
}
