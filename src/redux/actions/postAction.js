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
//Library File
import axios from 'axios';
//Redux Action File
import {POST_STATUS} from './actionTypes';
//Constant URL File
import {POST_URL} from '../../constants/index';

const requestPost = () => {
    return {
        type: POST_STATUS.REQUEST,
        payload: {
            status: 'loading'
        }
    };
};

const successPost = post => {
    return {
        type: POST_STATUS.SUCCESS,
        payload: {
            post: post,
            status: 'success'
        }
    };
};

const errorPost = errorMessage => {
    return {
        type: POST_STATUS.ERROR,
        payload: {
            status: 'error',
            errorMessage: errorMessage
        }
    };
};

export const fetchPost = postId => {
    return dispatch => {
        dispatch (requestPost());
        axios.get(POST_URL(postId))
        .then(response => {
            dispatch(successPost(response.data));
        })
        .catch(error =>{
            dispatch(errorPost(error));
        });
    };
};