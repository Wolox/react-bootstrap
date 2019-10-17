import React, { Component } from 'react';

import Login from './layout';

const LOADING_DELAY = 2000;

class LoginContainer extends Component {
  state = {
    loading: false
  };

  handleLogin = () => {
    // TODO implement function
    this.setState({ loading: true });
    setTimeout(() => this.setState({ loading: false }), LOADING_DELAY);
  };

  handleEmailChange = () => {
    // TODO implement function
  };

  handlePasswordChange = () => {
    // TODO implement function
  };

  render() {
    const { loading } = this.state;

    return (
      <Login
        onEmailChange={this.handleEmailChange}
        onPasswordChange={this.handlePasswordChange}
        onLogin={this.handleLogin}
        loading={loading}
      />
    );
  }
}

export default LoginContainer;
