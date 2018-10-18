import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Switch } from 'react-router-dom';

import { history } from '~redux/store';

import Home from '~screens/Dashboard';

import Login from '~screens/Login';

import * as Routes from '~constants/routes';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import styles from './styles';

function AppRoutes() {
  return (
    <ConnectedRouter history={history}>
      <div style={styles.container}>
        <Switch>
          <AuthenticatedRoute isPrivateRoute exact path={Routes.HOME} component={Home} />
          <AuthenticatedRoute isPublicRoute exact path={Routes.LOGIN} component={Login} />
        </Switch>
      </div>
    </ConnectedRouter>
  );
}

export default AppRoutes;
