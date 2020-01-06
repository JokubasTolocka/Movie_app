import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AllReviews extends Component{
    render(){
        const filteredReviews = reviews.filter(review => {
            return review.title.toLowerCase().includes(this.state.searchInput.toLowerCase());
        });
        const ReviewList = filteredReviews.map(review => {
        return (
                <Review
                    key={review._id}
                    id={review._id}
                    title={review.title}
                    user={review.user._id}
                    image={review.image}
                    date={review.createdAt}
                    text={review.text}
                    commentAmount={review.comments.length}
                />
            );
        });
        return(
            <div>

            </div>
        );
    }
}

export default AllReviews;