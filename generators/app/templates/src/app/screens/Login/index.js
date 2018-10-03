import React, { Component } from 'react';

import Login from './layout';

class LoginContainer extends Component {
  handleSubmit = () => {
    // TODO implement function
  };

  handleChange = () => {
    // TODO implement function
  };

  render() {
    return <Login handleChange={this.handleChange} handleSubmit={this.handleSubmit} />;
  }
}

export default LoginContainer;
