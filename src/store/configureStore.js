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
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//Redux Reducer File
import rootReducer from '../redux/reducers/rootReducer';

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
