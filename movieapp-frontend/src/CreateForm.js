import React, {Component} from 'react';

class CreateForm extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            title: '',
            user: '',
            imageUrl: '',
            review: ''
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("got to the beginning")
        

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render(){
        return(
            <div className='create-container'>
                <div className='create-review'>
                    <h2>Your Review:</h2>
                    <form onSubmit={this.handleSubmit} className='create-form'>
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
                            name='imageUrl'
                            onChange={this.handleChange}
                            type='text'
                        />
                        <label htmlFor='review'/>
                        <input 
                            className='create-review-text'
                            placeholder='Your Review'
                            name='review'
                            onChange={this.handleChange}
                            type='text'
                        />
                        <button
                            className='create-button'
                            type='submit'
                        >Submit!</button>
                    </form>
                </div>
                    <h2 >Preview</h2>
                <div className='create-preview'>

                </div>
            </div>
        );
    }
}

export default CreateForm;