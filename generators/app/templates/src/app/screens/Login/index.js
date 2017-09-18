import React, { Component } from "react";
import { connect } from "react-redux";

import { actionCreators as authActions } from "../../../redux/AuthHandler";

import Login from "./layout";

class LoginContainer extends Component {
  state = { invalidInput: false };
  handleSubmit = values => {
    const invalidateUser = false; // TODO: Add validation logic
    const invalidatePass = false; // TODO: Add validation logic
    if (
      values.username === "" ||
      values.password === "" ||
      invalidateUser ||
      invalidatePass
    ) {
      this.setState({ invalidInput: true });
    } else {
      this.setState({ invalidInput: false });
      this.props.dispatch(authActions.login());
    }
  };

  render() {
    return (
      <Login
        onSubmit={this.handleSubmit}
        invalidInput={this.state.invalidInput}
      />
    );
  }
}

export default connect()(LoginContainer);
