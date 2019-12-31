import React, { Component } from "react";

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          username: "",
          password: ""
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signUp ? "signup" : "signin";
        this.props.onAuth(authType, this.state)
          .then(() => {
            this.props.history.push("/");
          }).catch((e) => {
            return e;
          });
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { email, username, password} = this.state;
        const {
          signUp,
          heading,
          buttonText,
          errors,
          history,
          removeError
        } = this.props;
    
        history.listen(() => {
          removeError();
        });
    
        return (
              <div >
                <form onSubmit={this.handleSubmit} className="auth-form">
                  <h2 className='auth-heading'>{heading}</h2>
                  {errors.message && (
                    <div className="auth-error">{errors.message.toString()}</div>
                  )}
                  <label htmlFor="email"></label>
                  <input
                    placeholder='Email'
                    autoComplete="off"
                    className="auth-input"
                    id="email"
                    name="email"
                    onChange={this.handleChange}
                    type="text"
                    value={email}
                  />
                  <label htmlFor="password"></label>
                  <input
                    placeholder='Password'
                    autoComplete="off"
                    className="auth-input"
                    id="password"
                    name="password"
                    onChange={this.handleChange}
                    type="password"
                    value={password}
                  />
                  {signUp && (
                    <div>
                      <label htmlFor="username"></label>
                      <input
                        placeholder='Username'
                        autoComplete="off"
                        className="auth-input"
                        id="username"
                        name="username"
                        onChange={this.handleChange}
                        type="text"
                        value={username}
                      />
                    </div>
                  )}
                  <button
                    type="submit"
                    className="auth-button"
                  >
                    {buttonText}
                  </button>
                </form>
              </div>
        );
  }
}
    
export default AuthForm;
