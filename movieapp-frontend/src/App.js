import React, {Component} from 'react';
import Navbar from './Navbar';
import {Provider} from 'react-redux';
import {configureStore} from './store';
import {BrowserRouter as Router} from 'react-router-dom';
import Main from './Main';

const store = configureStore();

export default class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar/>
            <Main/>
          </div>
        </Router>
      </Provider>
    );
  }
}


