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
            console.log('history push');
            this.props.history.push("/");
          }).catch((e) => {
            return console.log(e);
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
          <div>
            <div className="">
              <div className="">
                <form onSubmit={this.handleSubmit}>
                  <h2>{heading}</h2>
                  {errors.message && (
                    <div className="">{errors.message}</div>
                  )}
                  <label htmlFor="email"></label>
                  <input
                    placeholder='Email'
                    autoComplete="off"
                    className=""
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
                    className=""
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
                        className=""
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
                    className=""
                  >
                    {buttonText}
                  </button>
                </form>
              </div>
            </div>
          </div>
      );
  }
}
    
export default AuthForm;
