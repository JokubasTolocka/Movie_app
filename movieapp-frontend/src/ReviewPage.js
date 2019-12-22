import React from 'react';

const ReviewPage = (props) => {
    const {image, title, user, text, date} = props.location.aboutProps;
    return(
        <div>
            <div className='review-page' >
                <div className='reviewPage-top'>
                    <img className='reviewPage-image' src={image} alt={title}/>
                    <h1 className='reviewPage-title'>{title}</h1>
                    <h3 className='reviewPage-user'>Review by: {user}</h3>
                </div> 
                <div className='reviewPage-content'>
                    <p className='reviewPage-text'>{text}</p>
                    <h5 className='reviewPage-date'>{date}</h5>
                </div>
            </div>
        </div>
    )
}


export default ReviewPage;