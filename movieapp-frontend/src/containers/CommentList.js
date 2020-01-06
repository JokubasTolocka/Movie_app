import React, {Component} from 'react';
import {fetchComments} from '../store/actions/comments';
import { connect } from 'react-redux';
import Comment from '../components/Comment';

class CommentList extends Component{
    constructor(props){
        super(props);
        this.state = {
            user_id: this.props.currentUser.user.id,
            reviewUserId: window.location.pathname.slice(7,31),
            reviewId: window.location.pathname.slice(40,64)
        }
    }
    componentDidMount(){
        this.props.fetchComments(this.state);
    }
    render(){
        const {comments} = this.props;
        var CommentsList = comments.map(comment =>{
            return(
                <Comment
                    key={comment._id}
                    userUrl={comment.user._id}
                    comment={comment.comment}
                    date={comment.createdAt}
                    username={comment.user.username}
                />
            )
        });
        return(
            <div>
                {CommentsList}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        currentUser: state.currentUser,
        comments: state.comments
    }
}

export default connect(mapStateToProps, {fetchComments})(CommentList);