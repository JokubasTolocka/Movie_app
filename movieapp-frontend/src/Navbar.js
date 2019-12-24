import React, {Component} from 'react';
import{ Link } from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <div className='nav-navbar'>
                    <Link to='/' className='nav-title'><i className='fas fa-film '></i> The Movie App</Link>
                    <Link to='/create' className='nav-button'>Create Review</Link>
            </div>
        );
    }
}

export default Navbar;