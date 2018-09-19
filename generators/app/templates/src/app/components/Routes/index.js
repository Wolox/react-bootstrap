import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import { history } from '../../../redux/store';
import Home from '../../screens/Dashboard';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import * as Routes from './constants';
import styles from './styles';

function AppRoutes() {
  // TODO: Handle ConnectedRouter connection according redux feature
  return (
    <ConnectedRouter history={history}>
      <div style={styles.container}>
        <Switch>
          <AuthenticatedRoute isPrivateRoute exact path={Routes.HOME} component={Home} />
        </Switch>
      </div>
    </ConnectedRouter>
  );
}

export default AppRoutes;
