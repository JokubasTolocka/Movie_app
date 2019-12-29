import React from 'react';
import {Link} from 'react-router-dom';

const Review = ({title, user, image,text, id, date}) => {
    return(
        <Link to={{
            pathname:`/review/${id}`,
            aboutProps:{
                title,
                user,
                image,
                text,
                date
            }
        }}>
        <div className='review-card'>
            <img className='review-image shadow' src={image} alt={title}/>
            <div className='review-content'>
                <h3 className='review-title'>{title}</h3>
                <h4 className='review-creator'>{user}</h4>
            </div>
        </div>
        </Link>
    )
}

export default Review;