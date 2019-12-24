import  {LOAD_REVIEWS} from '../actionTypes';

const review = (state=[], action) => {
    switch(action.type){
        case LOAD_REVIEWS:
            return action.reviews;
        default:
            return state;
    }
}

export default review;