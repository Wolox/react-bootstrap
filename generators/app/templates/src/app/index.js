import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleRoot } from "radium";

import { apiSetup } from "../config/api";

import Routes from "./components/Routes";

class App extends Component {
  componentDidMount() {
    apiSetup(this.props.dispatch);
  }

  render() {
    return (
      <StyleRoot>
        <Routes />
      </StyleRoot>
    );
  }
}

App.defaultProps = {
  loading: false
};

export default connect()(App);
