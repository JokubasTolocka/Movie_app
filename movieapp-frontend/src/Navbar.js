import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <div className='nav-navbar'>
                    <input
                        className='nav-input'
                        placeholder='Search'
                    />
                    <h2 className='nav-title'>The Movie App</h2>
                    <button className='nav-button'>Create Review</button>
            </div>
        );
    }
}

export default Navbar;