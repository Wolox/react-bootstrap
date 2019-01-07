import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';

import routes from '../../../constants/routes';

import Login from './layout';

import { actionCreators } from '~redux/Auth/actionCreator';

class LoginContainer extends Component {
  handleLogin = (email, password) => {
    const { login } = this.props;

    login(email, password);
    push(routes.HOME);
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

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(actionCreators.login({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginContainer);
