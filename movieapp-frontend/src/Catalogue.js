import React, {Component} from 'react';
import Review from './Review';
import { connect } from "react-redux";
import {fetchReviews} from './store/actions/reviews';

class Catalogue extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         reviews: []
            
    //     }
    // }
    componentDidMount(){
        this.props.fetchReviews();
        console.log(this.props.reviews);//return empty array
    }
    // getReviews(){
    //     fetch('http://localhost:8000')
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(posts => {
    //             this.setState({reviews: posts})
    //         })
    //         .catch(err => console.log(err))
    // }

    render(){
    const {reviews} = this.props;
    const ReviewList = reviews.map(review => {
    return (
            <Review
                key={review._id}
                title={review.title}
                user={review.user}
                image={review.image}
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