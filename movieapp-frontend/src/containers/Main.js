import React from 'react';
import CreateForm from './CreateForm';
import ReviewPage from '../components/ReviewPage';
import Catalogue from './Catalogue';
import AuthForm from './AuthForm';
import {authUser} from '../store/actions/auth';
import {Switch, Route, withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import { removeError } from "../store/actions/errors";


const Main = props => {
  const {errors, removeError, authUser} = props;
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' render={props => <Catalogue {...props}/>}/>
          <Route exact path='/create' render={props => <CreateForm
            errors={errors}
            removeError={removeError}
            {...props}/>}/>
          <Route exact path='/signin' render={props => {
            return(
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                buttonText='Log in'
                heading='Welcome Back.'
                {...props}
              />
            );
          }}
          />
          <Route exact path='/signup' render={props => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                signUp
                buttonText='Sign up'
                heading='Movie reviews. All of them.'
                {...props}
              />
            );
          }}
          />
          <Route path='/review/:id' render={props => <ReviewPage {...props}/>}/>
        </Switch>
      </div>
    );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
}
  
export default withRouter(
    connect(mapStateToProps, {authUser, removeError })(Main)
  );;