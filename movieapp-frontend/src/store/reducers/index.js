import {combineReducers} from 'redux';
import errors from './error';
import currentUser from './currentUser';
import reviews from './reviews';

const rootReducer = combineReducers({
    currentUser,
    errors,
    reviews
});

export default rootReducer;