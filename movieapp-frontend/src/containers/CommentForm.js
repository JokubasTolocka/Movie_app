import React, {Component} from 'react';

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            commentFormHidden: true,
            comment: ''
        }
        this.ShowForm = this.ShowForm.bind(this);
    }
    componentWillMount(){
        this.setState({commentFormHidden: true});
    }
    ShowForm(){
        this.setState({commentFormHidden: !this.state.commentFormHidden});
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = e =>{
        e.preventDefault();
    }
    render(){
        return(
            <div className='comment-form'>
                <button onClick={this.ShowForm} className='button btn-grad'>Comment <i className="fas fa-plus"></i></button>
                <div>
                {!this.state.commentFormHidden ?
                <div className='comment-form-box'>
                    <form className='commentForm' onSubmit={this.handleSubmit}>
                        <input
                        placeholder='Comment'
                        autoComplete="off"
                        className="comment-input"
                        name="comment"
                        onChange={this.handleChange}
                        type="text"
                        value={this.state.comment}
                        />
                        <button
                        type="submit"
                        id='comment-button'
                        className="button btn-grad"
                        ><i className=" fas fa-plus"></i></button>
                    </form>
                    
                </div>
                : null}
                </div>
            </div>
        );
    }
}

export default CommentForm;