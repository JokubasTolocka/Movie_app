import {combineReducers} from 'redux';
import errors from './error';
import reviews from './reviews';

const rootReducer = combineReducers({
    errors,
    reviews
});

export default rootReducer;