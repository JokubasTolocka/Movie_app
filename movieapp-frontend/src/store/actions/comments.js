import {apiCall} from '../../services/api';
import {addError} from './errors';
import { LOAD_COMMENTS} from '../actionTypes';

export const loadComments = comments => ({
    type: LOAD_COMMENTS,
    comments
});

export const fetchComments = (state) => {
    return dispatch => {
        return apiCall('get', `http://localhost:8000/users/${state.reviewUserId}/reviews/${state.reviewId}/comments`)
            .then((res) => {
                dispatch(loadComments(res))
            })
            .catch(err => {dispatch(addError(err))});
    };
};

export const postNewComment = state => (dispatch, getState) => {

    return apiCall("post", `http://localhost:8000/users/${state.reviewUserId}/reviews/${state.reviewId}/comments`, state)
      .then(res => {
      })
      .catch(err => {
        dispatch(addError('Comment submition failed. Did you fill out all the fields?'))});
};