import React, {Component} from 'react';
import {apiCall} from '../services/api';
import { connect } from "react-redux";
import { removeReview } from "../store/actions/reviews";
import Moment from 'react-moment';

class ReviewPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            image: '',
            title: '',
            user: '',
            text: '',
            date: '',
        }
    }
    componentDidMount(){
        apiCall('get', `http://localhost:8000${window.location.pathname}`)
            .then((res) => {
                this.setState({
                    image: res.image,
                    title: res.title,
                    user: res.user,
                    text: res.text,
                    date: res.createdAt
            });
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render(){
        const {title, user, text, date, image} = this.state;
        return(
            <div>
                <div className='review-page'>
                    <div className='reviewPage-top'>
                        <img className='reviewPage-image' src={image} alt={title}/>
                        <h1 className='reviewPage-title'>{title}</h1>
                        <h3 className='reviewPage-user'>Review by: {user}</h3>
                    </div> 
                    <div className='reviewPage-content'>
                        <p className='reviewPage-text'>{text}</p>
                        <Moment className='reviewPage-date' format='DD MM YYYY'>{date}</Moment>
                    </div>
                    {/* {this.props.currentUser.user.id === this.state.user &&
                    <div className='reviewPage-buttons'>
                        <button className='reviewPage-delete'>Delete <i class="far fa-trash-alt"></i></button>
                    </div>
                    } */}
                </div>
            </div>
        )
    }
}

// function mapStateToProps(state){
//     return {
//         currentUser: state.currentUser
//     }
// }


// export default connect(mapStateToProps, {})(ReviewPage);

export default ReviewPage;