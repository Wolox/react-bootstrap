import React, { Component } from 'react';

import Login from './layout';

class LoginContainer extends Component {
  handleLogin = () => {
    // TODO implement function
  };

  handleEmailChange = () => {
    // TODO implement function
  };

  handlePasswordChange = () => {
    // TODO implement function
  };

  render() {
    return (
      <Login
        onEmailChange={this.handleEmailChange}
        onPasswordChange={this.handlePasswordChange}
        onLogin={this.handleLogin}
      />
    );
  }
}

export default LoginContainer;
