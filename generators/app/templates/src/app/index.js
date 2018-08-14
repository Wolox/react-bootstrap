import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { apiSetup } from '../config/api';
import store from '../redux/store';

import Routes from './components/Routes';
import '../scss/application.scss';

class App extends Component {
  componentDidMount() {
    apiSetup(store.dispatch);
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

App.defaultProps = {
  loading: false
};

export default App;
