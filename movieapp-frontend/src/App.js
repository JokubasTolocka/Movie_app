import React, {Component} from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Main from './Main';

export default class App extends Component {
  render(){
    return(
      <Router>
        <div className="App">
          <Navbar/>
          <Main/>
        </div>
      </Router>
    );
  }
}


