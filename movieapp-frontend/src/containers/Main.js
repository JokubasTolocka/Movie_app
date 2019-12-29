import React from 'react';
import CreateForm from '../CreateForm';
import ReviewPage from '../components/ReviewPage';
import Catalogue from './Catalogue';
import {Switch, Route, withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import { removeError } from "../store/actions/errors";


const Main = props => {
  const {errors, removeError} = props;
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' render={props => <Catalogue {...props}/>}/>
          <Route exact path='/create' render={props => <CreateForm
            errors={errors}
            removeError={removeError}
            {...props}/>}/>
          <Route path='/review/:id' render={props => <ReviewPage {...props}/>}/>
        </Switch>
      </div>
    );
}

function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}
  
export default withRouter(
    connect(mapStateToProps, { removeError })(Main)
  );;