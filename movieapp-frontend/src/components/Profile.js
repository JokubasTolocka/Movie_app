import React, {Component} from 'react';
import {apiCall} from '../services/api';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: ''
        }
    }
    componentDidMount(){
        apiCall('get', `http://localhost:8000${window.location.pathname}`)
            .then(res => {
                console.log(res);
                this.setState({
                    username: res.username
                })
            }).catch(err => console.log(err));
    }
    render(){
        return(
            <h1>Hi, {this.state.username}!</h1>
        )
    }
}

export default Profile;