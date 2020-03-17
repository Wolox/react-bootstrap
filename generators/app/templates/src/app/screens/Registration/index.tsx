import React, { Component } from 'react';

import Registration from './layout';

class RegistrationContainer extends Component {
  handleSubmit = () => {
    // TODO implement function
  };

  handleInputChange = () => {
    // TODO: implement function
  };

  render() {
    return <Registration onSubmit={this.handleSubmit} onInputChange={this.handleInputChange} />;
  }
}

export default RegistrationContainer;
