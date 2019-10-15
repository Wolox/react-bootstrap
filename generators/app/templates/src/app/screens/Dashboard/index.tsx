import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Routes from '~constants/routes';

import Home from '~screens/Dashboard/screens/Home';

function Dashboard() {
  return (
    <Switch>
      <Route exact path={Routes.HOME} component={Home} />
      <Redirect to={Routes.HOME} />
    </Switch>
  );
}

export default Dashboard;
