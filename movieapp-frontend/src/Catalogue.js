import React, {Component} from 'react';
import Review from './Review';

class Catalogue extends Component {
    constructor(props){
        super(props);
        this.state = {
            reviews: []
            
        }
    }
    componentWillMount(){
        this.getReviews();
    }
    getReviews(){
        fetch('http://localhost:8000')
            .then(res => {
                return res.json();
            })
            .then(posts => {
                this.setState({reviews: posts})
            })
            .catch(err => console.log(err))
    }

    render(){
    const {reviews} = this.state;
    const ReviewList = reviews.map((review, i) => {
        return(
            <Review
                key={i}
                title={reviews[i].title}
                user={reviews[i].user}
                image={reviews[i].image}
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

export default Catalogue;