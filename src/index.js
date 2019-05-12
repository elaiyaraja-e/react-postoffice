/**
 * copyright 2019 (C) ELAIYA
 * 
 * created on: May 12, 2019
 * @author: Elaiya Raja E
 * 
 * ---------------------------------------------------------
 * Revision History (Release 1.0.0)
 * ---------------------------------------------------------
 * VERSION | AUTHOR - DATE       | DESCRIPTION OF CHANGE
 * --------------------------------------------------------- 
 * 1.0     | ELAIYA - 12-05-2019 | Inital Creation
 * ---------------------------------------------------------
 * 
 */

//Library Files
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/configureStore";
//Routes File
import Routes from "./routes/Routes";
//Css File
import './index.css';

const store = configureStore();

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </Provider>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));

