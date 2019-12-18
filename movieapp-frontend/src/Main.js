import React from 'react';
import CreateForm from './CreateForm';
import Catalogue from './Catalogue';
import {Switch, Route} from 'react-router-dom';

function Main() {
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' render={props => <Catalogue {...props}/>}/>
          <Route exact path='/create' render={props => <CreateForm {...props}/>}/>
        </Switch>
      </div>
    );
  }
  
  export default Main;