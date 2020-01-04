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
    const filteredReviews = reviews.filter(review => {
        return review.title.toLowerCase().includes(this.state.searchInput.toLowerCase());
    });
    const ReviewList = filteredReviews.map(review => {
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
                <div>
                    <input
                        onChange={this.onSearchChange}
                        className='nav-input'
                        placeholder='Search'
                        name='searchInput'
                    />
                </div>
                <hr></hr>
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