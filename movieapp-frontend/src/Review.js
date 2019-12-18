import React from 'react';

const Review = ({title, user, image}) => {
    return(
        <div className='review-card'>
            <img className='review-image shadow' src={image} alt={title}/>
            <div className='review-content'>
                <h3 className='review-title'>{title}</h3>
                <h4 className='review-creator'>{user}</h4>
            </div>
        </div>
    )
}

export default Review;