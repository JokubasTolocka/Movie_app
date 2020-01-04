import React, {Component} from 'react';

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            commentFormHidden: true
        }
        this.ShowForm = this.ShowForm.bind(this);
    }
    componentWillMount(){
        this.setState({commentFormHidden: true});
    }
    ShowForm(){
        this.setState({commentFormHidden: !this.state.commentFormHidden});
    }
    render(){
        return(
            <div className='comment-form'>
                <button onClick={this.ShowForm} className='button btn-grad'>Comment <i className="fas fa-plus"></i></button>
                <div>
                {!this.state.commentFormHidden ?
                <div>Hi</div>
                : null}
                </div>
            </div>
        );
    }
}

export default CommentForm;