import React, { Component } from 'react';
import { connect } from 'react-redux';

import { apiSetup } from '../config/api';

import Routes from './components/Routes';

class App extends Component {
  componentDidMount() {
    apiSetup(this.props.dispatch);
  }

  render() {
    return <Routes />;
  }
}

App.defaultProps = {
  loading: false
};

export default connect()(App);
