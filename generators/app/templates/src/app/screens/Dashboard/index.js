import React from 'react';
import { Switch } from 'react-router-dom';

import RouteItem from '~components/Routes/components/RouteItem';
import PATHS from '~components/Routes/paths';

import Home from './screens/Home';
import ListExample from './screens/ListExample';

function Dashboard() {
  return (
    <Switch>
      <RouteItem exact path={PATHS.home} component={Home} />
      <RouteItem exact path={PATHS.list} component={ListExample} />
    </Switch>
  );
}

export default Dashboard;
