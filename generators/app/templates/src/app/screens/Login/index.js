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
        handleEmailChange={this.handleEmailChange}
        handlePasswordChange={this.handlePasswordChange}
        handleLogin={this.handleLogin}
      />
    );
  }
}

export default LoginContainer;
