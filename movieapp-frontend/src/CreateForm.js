import React, {Component} from 'react';

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
        console.log("got to the beginning")
        fetch("http://localhost:8000/review/", {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(this.state)
        }).then(() => {
            this.props.history.push('/');
            this.setState({user: '', title: '', image: '', text: ''});
        }).catch(err => {
            console.log(err);
        })
        // this.props.history.push('/');
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
                        <input 
                            className='create-input'
                            placeholder='Your Review'
                            name='text'
                            rows='2'
                            cols='25'
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
                    <h2 >Preview</h2>
                    <div className='preview-back-shadow'>
                        <div className='create-preview' >
                            <div className='preview-top'>
                                <img className='preview-image' src={this.state.image} alt={this.state.title}/>
                                <h1 className='preview-title'>{this.state.title}</h1>
                                <h3 className='preview-user'>Review by: {this.state.user}</h3>
                            </div> 
                            <div className='preview-content'>
                                <p className='preview-text'>{this.state.text}</p>
                                <h5 className='preview-date'>{today}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateForm;