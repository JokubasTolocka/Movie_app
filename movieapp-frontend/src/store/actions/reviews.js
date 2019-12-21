import {apiCall} from '../../services/api';
import {addError} from './errors';
import { LOAD_REVIEWS} from '../actionTypes';

export const loadReviews = reviews => ({
    type: LOAD_REVIEWS,
    reviews
});

export const fetchReviews = () => {
    return dispatch => {
        return apiCall('get', 'http://localhost:8000')
            .then((res) => {
                console.log(res); //gives those reviews
                dispatch(loadReviews(res))
            })
            .catch(err => dispatch(addError(err.message)));
    };
};

export const postNewReview = review => (dispatch, getState) => {
    return apiCall("post", `http://localhost:8000/review`, review)
      .then(res => {})
      .catch(err => addError(err.message));
  };