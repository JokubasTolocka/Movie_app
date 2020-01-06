import React, {Component} from 'react';
import Review from '../components/Review';
import { connect } from "react-redux";
import {fetchReviews} from '../store/actions/reviews';
import Landing from '../components/Landing';

class Catalogue extends Component {
    constructor(props){
        super(props);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.state = {
            searchInput: ''
        }
    }
    onSearchChange(e){
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    componentDidMount(){
        this.props.fetchReviews();
    }
    render(){
    const {reviews, currentUser, errors, removeError, history} = this.props;
    const ReviewList = reviews.map(review => {
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
    history.listen(() => {
        removeError();
      });
    if(!currentUser.isAuthenticated){
        return(
            <div>
                <Landing/>
            </div>
        )
    }
    return(
            <div>
                {errors.message && (
                    <div className="auth-error" id='catalogue-error'>{errors.message.toString()}</div>
                  )}
                <div className='review-list'>
                    {ReviewList}
                </div>
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