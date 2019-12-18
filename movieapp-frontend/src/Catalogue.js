import React, {Component} from 'react';

class Catalogue extends Component {
    constructor(props){
        super(props);
        this.state = {
            reviews: []
            
        }
    }
    componentWillMount(){
        this.getReviews();
    }
    getReviews(){
        fetch('http://localhost:8000')
            .then(res => {
                return res.json();
            })
            .then(posts => {
                this.setState({reviews: posts})
            })
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <h1>Hi</h1>
                
            </div>
        );
    }
}

export default Catalogue;