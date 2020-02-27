import React, { Component } from 'react';

import Registration from './layout';

class RegistrationContainer extends Component {
  handleSubmit = () => {
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
      <Registration
        onEmailChange={this.handleEmailChange}
        onPasswordChange={this.handlePasswordChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default RegistrationContainer;
