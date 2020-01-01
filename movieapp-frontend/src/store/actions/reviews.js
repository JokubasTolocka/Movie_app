import {apiCall} from '../../services/api';
import {addError} from './errors';
import { LOAD_REVIEWS} from '../actionTypes';

export const loadReviews = reviews => ({
    type: LOAD_REVIEWS,
    reviews
});

export const fetchReviews = () => {
    return dispatch => {
        return apiCall('get', 'http://localhost:8000/')
            .then((res) => {
                dispatch(loadReviews(res))
            })
            .catch(err => {dispatch(addError(err))});
    };
};

export const postNewReview = review => (dispatch, getState) => {
    let {currentUser} = getState();
    const id = currentUser.user.id
    return apiCall("post", `http://localhost:8000/users/${id}/reviews`, review)
      .then(res => {
      })
      .catch(err => {
        addError(err.message)});
  };