import React, {Component} from 'react';
import { connect } from "react-redux";
import { postNewReview } from "../store/actions/reviews";

class CreateForm extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            user: '',
            title: '',
            image: '',
            text: ''
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.postNewReview(this.state)
        this.setState({user: '', title: '', image: '', text: ''});
        this.props.history.push('/');
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render(){
        const date = new Date();
        var today = date.toDateString();
        return(
            <div className='create-container'>
                <div className='create-review'>
                    <h2>Your Review:</h2>
                    <form onSubmit={this.handleSubmit} className='create-form'>
                        {this.props.errors.message && (
                            <div>
                                <h5>{this.props.errors.message}</h5>
                            </div>
                        )}
                        <label htmlFor='movie'/>
                        <input
                            className='create-input'
                            placeholder='Movie Title'
                            name='title'
                            onChange={this.handleChange}
                            type='text'
                        />
                        <label htmlFor='creator'/>
                        <input
                            className='create-input'
                            placeholder='Your Name'
                            name='user'
                            onChange={this.handleChange}
                            type='text'
                        />
                        <label htmlFor='image'/>
                        <input
                            className='create-input'
                            placeholder='URL for the Image of that Movie'
                            name='image'
                            onChange={this.handleChange}
                            type='text'
                        />
                        <label htmlFor='review'/>
                        <textarea
                            rows='10'
                            cols='25' 
                            className='create-input textarea'
                            placeholder='Your Review'
                            name='text'
                            onChange={this.handleChange}
                            type='text'
                        />
                        <button
                            className='create-button'
                            type='submit'
                        >Submit!</button>
                    </form>
                </div>
                <div className='preview'>
                    <h2 >Preview:</h2>
                        <div className='create-preview' >
                            <div className='preview-top'>
                                <img className='preview-image' src={this.state.image} alt=''/>
                                <h1 className='preview-title'>{this.state.title}</h1>
                                <h3 className='preview-user'>{this.state.user ? 'Review by: ' : ''}{this.state.user}</h3>
                            </div> 
                            <div className='preview-content'>
                                <p className='preview-text'>{this.state.text}</p>
                                <h5 className='preview-date'>{this.state.text ? today : ''}</h5>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      errors: state.errors
    };
  }

export default  connect(mapStateToProps, { postNewReview })(CreateForm);