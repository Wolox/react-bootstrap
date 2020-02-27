import React, { Component } from 'react';

import RecoverPassword from './layout';

class RecoverPasswordContainer extends Component {
  handleSubmit = () => {
    // TODO: Implement submit
  };

  handleEmailChange = () => {
    // TODO: Implement method
  };

  render() {
    return <RecoverPassword onSubmit={this.handleSubmit} onEmailChange={this.handleEmailChange} />;
  }
}

export default RecoverPasswordContainer;
