import React, {Component} from 'react';
import Review from './Review';
import { connect } from "react-redux";
import {fetchReviews} from './store/actions/reviews';

class Catalogue extends Component {
    componentDidMount(){
        this.props.fetchReviews();
    }

    render(){
    const {reviews} = this.props;
    const ReviewList = reviews.map(review => {
    return (
            <Review
                key={review._id}
                id={review._id}
                title={review.title}
                user={review.user}
                image={review.image}
                date={review.createdAt}
                text={review.text}
            />
        );
    }) 
        return(
            <div className='review-list'>
                {ReviewList}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        reviews: state.reviews
    };
};

export default connect(mapStateToProps, {fetchReviews})(Catalogue);