import React,{Component} from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';

class Comment extends Component{
    render(){
        const {userUrl, username, comment, date} = this.props;
        return(
            <div className='comment-box'>
                <Link to={`/user/${userUrl}`} className='comment-user'><i id='comment-user-icon' className="far fa-user"></i> {username}</Link>
                <p className='comment-text'>{comment}</p>
                <Moment className='comment-date' format='DD MM YYYY'>{date}</Moment>
            </div>
        )
    }
}

export default Comment;