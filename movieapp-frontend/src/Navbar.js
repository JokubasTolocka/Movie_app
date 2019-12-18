import React, {Component} from 'react';
import{ Link } from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <div className='nav-navbar'>
                    <input
                        className='nav-input'
                        placeholder='Search'
                    />
                    <Link to='/' className='nav-title'>The Movie App</Link>
                    <Link to='/create' className='nav-button'>Create Review</Link>
            </div>
        );
    }
}

export default Navbar;