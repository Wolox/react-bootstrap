import React, { Component } from 'react';

import Login from './layout';

class LoginContainer extends Component {
  handleSubmit = values => {
    console.log(values); // eslint-disable-line no-console
  };

  handleChange = value => {
    console.log(value); // eslint-disable-line no-console
  };

  render() {
    return <Login handleChange={this.handleChange} handleSubmit={this.handleSubmit} />;
  }
}

export default LoginContainer;
