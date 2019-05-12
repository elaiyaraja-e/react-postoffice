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

//Redux Action File
import {POST_VIEW_STATUS} from '../actions/actionTypes';

const postViewReducer = (state = {}, action) => {
    switch (action.type) {
        case POST_VIEW_STATUS.REQUEST:
            return {
                ...state,
                status: action.payload.status
            };
        case POST_VIEW_STATUS.SUCCESS:
            return {
                ...state,
                posts: action.payload.posts,
                status: action.payload.status
            };
        case POST_VIEW_STATUS.ERROR:
            return {
                ...state,
                status: action.payload.status,
                errorMessage: action.payload.errorMessage
            };
        default:
            return state;
    }
}
export default postViewReducer;