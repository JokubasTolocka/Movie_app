import React, {Component} from 'react';
import {apiCall} from '../services/api';
import Review from './Review';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            reviews: []
        }
    }
    componentDidMount(){
        apiCall('get', `http://localhost:8000${window.location.pathname}`)
            .then(res => {
                this.setState({
                    username: res.username
                })
            }).catch(err => console.log(err));
        let url = '/reviews';
        apiCall('get', `http://localhost:8000${window.location.pathname}${url}`)
            .then(res => {
                this.setState({
                    reviews: res
                })
            }).catch(err => console.log(err));
    }
    render(){
    const {reviews} = this.state;
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
        });
        return(
            <div>
                {this.state.username ?
                <h1 className='profile-header'>{this.state.username}'s Reviews</h1>
                : <h1 className='profile-header'>Loading</h1>}
                <div className='review-list' id='profile-review-list'>
                    {ReviewList}
                </div>
            </div>
        )
    }
}

export default Profile;