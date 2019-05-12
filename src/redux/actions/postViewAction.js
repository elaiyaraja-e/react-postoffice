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
import axios from 'axios';
//Redux Action File
import { POST_VIEW_STATUS } from './actionTypes';
//Constant URL File
import { POST_VIEW_URL } from '../../constants/index';

const requestPostView = () => {
  return {
    type: POST_VIEW_STATUS.REQUEST,
    payload: {
      status: 'loading'
    }
  };
};

const successPostView = posts => {
  return {
    type: POST_VIEW_STATUS.SUCCESS,
    payload: {
      posts: posts,
      status: 'success'
    }
  };
};

const errorPostView = errorMessage => {
  return {
    type: POST_VIEW_STATUS.ERROR,
    payload: {
      status: 'error',
      errorMessage: errorMessage
    }
  };
};

export const fetchPostView = () => {
  return dispatch => {
    dispatch(requestPostView());
    axios
      .get(POST_VIEW_URL)
      .then(response => {
        dispatch(successPostView(response.data));
      })
      .catch(error => {
        dispatch(errorPostView(error));
      });
  };
};
